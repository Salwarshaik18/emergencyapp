import React from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Login.css';
import image from './logo.jpeg';
const Login = () => {
  const navigate = useNavigate(); 

  const handleLogin = (event) => {
    event.preventDefault();
    navigate('/emergency-contacts'); 
  };

  return (
    <div className="container">
      <img src={image} alt="Safe Steps Logo" />
      <h2>Safe Steps</h2>
      <p>Your Safety Matters!</p>
      <form className="login-form" onSubmit={handleLogin}>
        <div className="input-group">
          <input type="email" placeholder="Email" required />
        </div>
        <div className="input-group">
          <input type="password" placeholder="Password" required />
        </div>
        <button type="submit">Login</button>
        <p className="signup-link">
          Don't have an account? <a href="#">Sign Up</a>
        </p>
      </form>
      <div className="social-login">
        <img
          src="https://img.icons8.com/color/48/000000/google-logo.png"
          alt="Google Login"
          onClick={() => alert('Google login clicked!')}
        />
        <img
          src="https://img.icons8.com/ios-filled/50/000000/github.png"
          alt="GitHub Login"
          onClick={() => alert('GitHub login clicked!')}
        />
        <img
          src="https://img.icons8.com/ios-filled/50/000000/facebook-new.png"
          alt="Facebook Login"
          onClick={() => alert('Facebook login clicked!')}
        />
      </div>
    </div>
  );
};

export default Login;
