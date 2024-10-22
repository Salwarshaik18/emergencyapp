import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './EmergencyContact.css';

const EmergencyContact = () => {
  const [contact, setContact] = useState({ name: '', phone: '', relation: '' });
  const [contacts, setContacts] = useState([]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact({ ...contact, [name]: value });
  };

  const handleAddContact = () => {
  
    if (!contact.name || !contact.phone || !contact.relation) {
      alert('Please fill out all fields.');
      return;
    }


    setContacts([...contacts, contact]);
    setContact({ name: '', phone: '', relation: '' });
  };

  const handleSave = (event) => {
    event.preventDefault();

    if (contacts.length === 0) {
      alert('Please add at least one contact.');
      return;
    }

    console.log('Saved Contacts:', contacts); 

    
    navigate('/emergency', { state: { contacts } });
  };

  return (
    <div className="page-wrapper">
      <img src="./safesteps.jpg" alt="Logo" className="logo" />
      <h1 className="app-heading">Safe Steps</h1>
      <div className="contact-container">
        <h2>Emergency Contacts</h2>
        <p>Add your emergency contacts below:</p>
        <form className="contact-form" onSubmit={handleSave}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={contact.name}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={contact.phone}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="relation"
              placeholder="Relation"
              value={contact.relation}
              onChange={handleChange}
              required
            />
          </div>
          <button type="button" onClick={handleAddContact} className="add-contact-button">
            Add Another Contact
          </button>
          <button type="submit" className="save-button">Save</button>
        </form>
      </div>
    </div>
  );
};

export default EmergencyContact;