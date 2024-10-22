import React from 'react';
import { useLocation } from 'react-router-dom';
import './MediaDisplay.css'; 

const MediaDisplay = () => {
  const { state } = useLocation(); 
  const { mediaBlob } = state || {};

  const handleShare = (option) => {
    alert(`Media shared with: ${option}`); // Fixed here
  };

  return (
    <div className="media-display-container">
      <h2>Recorded Media</h2>
      {mediaBlob && (
        <video controls src={URL.createObjectURL(mediaBlob)} />
      )}
      <div>
        <h3>Share With:</h3>
        <div className="share-buttons">
          <button className="share-button" onClick={() => handleShare('Saved Contacts')}>Saved Contacts</button>
          <button className="share-button" onClick={() => handleShare('Contacts and Police')}>Contacts and Police</button>
          <button className="share-button" onClick={() => handleShare('Everyone')}>Everyone</button>
        </div>
      </div>
    </div>
  );
};

export default MediaDisplay;
