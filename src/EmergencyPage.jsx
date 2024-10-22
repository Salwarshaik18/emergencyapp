import React, { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; 
import './EmergencyPage.css';
import { FaPhone, FaMicrophone, FaVideo, FaMapMarkerAlt, FaExclamationTriangle } from 'react-icons/fa';

const EmergencyPage = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const [clickCount, setClickCount] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [mediaBlob, setMediaBlob] = useState(null);
  const mediaRecorderRef = useRef(null);
  const [userLocation, setUserLocation] = useState(null);

  const handleEmergencyClick = () => {
    setClickCount(prevCount => prevCount + 1);
    let message;
    switch (clickCount + 1) {
      case 1:
        message = 'Alert message was sent to saved emergency contacts!';
        break;
      case 2:
        message = 'Alert message was sent to saved emergency contacts and police!';
        break;
      case 3:
        message = 'Alert message was sent to saved emergency contacts, police, and hospitals!';
        break;
      default:
        message = 'You have already sent the alert!';
        break;
    }
    alert(message);
  };

  const handleRecordMediaClick = async () => {
    if (!isRecording) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: true });
        mediaRecorderRef.current = new MediaRecorder(stream);
        const recordedChunks = [];
        mediaRecorderRef.current.ondataavailable = event => {
          if (event.data.size > 0) {
            recordedChunks.push(event.data);
          }
        };

        mediaRecorderRef.current.onstop = () => {
          const blob = new Blob(recordedChunks, { type: 'video/webm' });
          setMediaBlob(blob);
          navigate('/media-display', { state: { mediaBlob: blob } });
        };

        mediaRecorderRef.current.start();
        setIsRecording(true);
      } catch (error) {
        console.error('Error accessing media devices.', error);
        alert('Could not start recording: ' + error.message);
      }
    } else {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const handleSeeMyLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
          navigate('/location-display', { state: { latitude, longitude } });
        },
        error => {
          console.error('Error obtaining location', error);
          alert('Could not retrieve your location: ' + error.message);
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  return (
    <div className="emergency-container">
      <h2 className="header">Emergency Alerts</h2>

      <div className="feature-buttons">
        <button className="feature-button emergency" onClick={handleEmergencyClick}>
          <FaExclamationTriangle className="icon" /> Emergency
        </button>
        <button className="feature-button" onClick={handleRecordMediaClick}>
          <FaMicrophone className="icon" /> <FaVideo className="icon" /> {isRecording ? 'Stop Recording' : 'Record Media'}
        </button>
        <button className="feature-button" onClick={handleSeeMyLocation}>
          <FaMapMarkerAlt className="icon" /> See My Location
        </button>
        <button className="feature-button" onClick={() => alert('Share My Location feature is clicked!')}>
          <FaPhone className="icon" /> Share My Location
        </button>
      </div>

      {mediaBlob && (
        <div>
          <video controls src={URL.createObjectURL(mediaBlob)} style={{ marginTop: '20px', width: '100%' }} />
          <button className="feature-button" onClick={handleShareMedia}>Share Recorded Media</button>
        </div>
      )}

      {userLocation && (
        <div style={{ marginTop: '20px' }}>
          <p>Your current location:</p>
          <p>Latitude: {userLocation.latitude}</p>
          <p>Longitude: {userLocation.longitude}</p>
        </div>
      )}

      <div className="signup-link">
        <p>Don't have an account? <a href="/register">Sign Up</a></p>
      </div>
    </div>
  );
};

export default EmergencyPage;