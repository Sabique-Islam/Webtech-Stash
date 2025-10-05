import React, { useState } from "react";
import "./Location.css";

const Location = ({ onLocationFetched }) => {
  const [coords, setCoords] = useState({ latitude: null, longitude: null });
  const [isLoading, setIsLoading] = useState(false);

  const fetchLocation = () => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setCoords({ latitude, longitude });
      setIsLoading(false);
      if (onLocationFetched) {
        onLocationFetched({ latitude, longitude });
      }
    });
  };

  return (
    <div className="location-card">
      <h2 className="location-title">Get Your Location</h2>
      <button 
        className="location-btn" 
        onClick={fetchLocation}
        disabled={isLoading}
      >
        {isLoading ? 'Getting Location...' : 'Fetch Location'}
      </button>
      {coords.latitude && coords.longitude && (
        <p className="location-coords">
          Latitude: {coords.latitude.toFixed(4)} <br />
          Longitude: {coords.longitude.toFixed(4)}
        </p>
      )}
    </div>
  );
};

export default Location;

