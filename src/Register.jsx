import React, { useState } from 'react';
import './Register.css'; 
import image from './logo.jpeg';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [generatedOtp, setGeneratedOtp] = useState(null);
  const [otpError, setOtpError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendOtp = () => {
    if (!formData.email) {
      setErrorMessage('Please enter your email to receive an OTP.');
      return;
    }

    const otp = Math.floor(100000 + Math.random() * 900000);
    setGeneratedOtp(otp);
    setOtpSent(true);
    setErrorMessage('');

    console.log(`Sending OTP ${otp} to email: ${formData.email}`); // Fixed here
    alert(`OTP sent to ${formData.email}. Check your email for the code.`); // Fixed here
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    if (!otpSent || formData.otp !== generatedOtp?.toString()) {
      setOtpError('Invalid or missing OTP.');
      return;
    }

    setOtpError('');
    setErrorMessage('');
    alert('Registration successful!');
  };

  return (
    <div className="registration-container">
      <div className="header">
        <img src={image} alt="Logo" className="logo" />
        <h1 style={{ color: 'black', fontSize: '26px' }}>Safe Steps</h1>
      </div>
      <div className="registration-form">
        <form onSubmit={handleSubmit}>
          <h2 className="form-title">Registration Form</h2>
          <label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
            />
          </label>
          <label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />
          </label>
          <label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              placeholder="Enter your password"
            />
          </label>
          <label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
              placeholder="Confirm your password"
            />
          </label>
          <button
            type="button"
            className="send-otp-button"
            onClick={handleSendOtp}
            disabled={otpSent}
          >
            {otpSent ? 'OTP Sent' : 'Send OTP'}
          </button>
          {otpSent && (
            <label className="otp-field">
              <input
                type="text"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
                required
                placeholder="Enter OTP"
              />
            </label>
          )}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {otpError && <p className="error-message">{otpError}</p>}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
