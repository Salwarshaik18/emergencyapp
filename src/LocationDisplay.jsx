import React, { useState, useEffect } from 'react'; // Make sure to import React hooks

const LocationDisplay = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });
      },
      (error) => {
        console.error('Error obtaining location:', error);
        alert('Could not retrieve your location: ' + error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0,
      }
    );

    // Clean up the watch when component unmounts
    return () => navigator.geolocation.clearWatch(watchId);
  }, []);

  const { latitude, longitude } = location;
  const mapUrl =
    latitude && longitude
      ? `https://www.openstreetmap.org/export/embed.html?bbox=${longitude - 0.01}%2C${latitude - 0.01}%2C${longitude + 0.01}%2C${latitude + 0.01}&layer=mapnik&marker=${latitude}%2C${longitude}`
      : ''; // Ternary operator fixed and works as expected

  return (
    <div className="location-display-container">
      <h2>Your Current Location</h2>
      {latitude && longitude ? (
        <>
          <p>Latitude: {latitude}</p>
          <p>Longitude: {longitude}</p>
          <iframe
            title="OpenStreetMap"
            src={mapUrl}
            style={{
              width: '100%',
              height: '400px',
              border: '1px solid black',
              borderRadius: '8px',
              marginTop: '20px',
            }}
          />
        </>
      ) : (
        <p>Tracking location...</p>
      )}
    </div>
  );
};

export default LocationDisplay;
