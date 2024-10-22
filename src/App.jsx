import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import EmergencyContact from './EmergencyContact';
import EmergencyPage from './EmergencyPage';
import MediaDisplay from './MediaDisplay';
import LocationDisplay from './LocationDisplay';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/emergency-contacts" element={<EmergencyContact />} />
        <Route path="/emergency" element={<EmergencyPage />} />
        <Route path="/media-display" element={<MediaDisplay />} />
        <Route path="/location-display" element={<LocationDisplay />} />
      </Routes>
    </Router>
  );
};

export default App;
