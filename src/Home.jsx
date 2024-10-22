import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import image from './logo.jpeg';

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login'); 
  };

  const handleRegister = () => {
    navigate('/register');
  };

  return (
    <div className="home-container">
      <div className="animated-background"></div>
      <div className="top-buttons">
        <button className="auth-button" onClick={handleLogin}>Login</button>
        <button className="auth-button" onClick={handleRegister}>Sign Up</button>
      </div>
      <div className="header">
        <img src={image} alt="Logo" className="logo" />
        <h1 className="app-heading">Safe Steps</h1>
      </div>
      <p className="welcome-message">"Welcome to Safe Steps, Your Safety is Our Priority! ôf"</p>
      <p className="welcome-message">"Empowering Girls to Stay Safe Anytime, Anywhere."</p>
      <div className="intro-text">
        <p>At Safe Steps, we believe that every woman deserves to feel safe and protected at all times. Whether you're commuting late at night, traveling to a new place, or simply walking home, you should have the peace of mind knowing help is just a tap away. Safe Steps is your reliable companion, designed to empower women with safety tools that make a difference when it matters most.</p>

        <p>Our platform offers a comprehensive range of features to help you stay connected to trusted contacts whenever you feel unsafe. With real-time location sharing, instant alerts, and emergency contact notifications, Safe Steps ensures that your loved ones are always aware of your situation. You can also record voice or video evidence during emergencies, giving you an extra layer of security.</p>

        <p>At Safe Steps, our mission is to support women by providing a user-friendly and accessible service that adapts to various situations, allowing you to take control of your safety wherever you go. Because your safety is not just a priority, itts a promise. Stay connected, stay empowered, and let Safe Steps be the guardian that accompanies you anytime, anywhere.</p>
      </div>
      <button className="register-button" onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Home;