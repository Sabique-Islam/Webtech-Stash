import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Weather.css';

function Weather({ latitude, longitude }) {
  const [weather, setWeather] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (latitude && longitude) {
      fetchWeather();
    }
  }, [latitude, longitude]);

  const fetchWeather = async () => {
    setIsLoading(true);
    const response = await axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code&timezone=auto`);
    setWeather(response.data.current);
    setIsLoading(false);
  };

  return (
    <div className="weather-card">
      <h2 className="weather-title">Current Weather</h2>
      {!latitude || !longitude ? (
        <p className="weather-message">Please fetch your location first</p>
      ) : isLoading ? (
        <p className="weather-message">Loading weather data...</p>
      ) : weather ? (
        <div className="weather-details">
          <div className="weather-item">
            <span className="weather-label">Temperature:</span>
            <span className="weather-value">{weather.temperature_2m}°C</span>
          </div>
          <div className="weather-item">
            <span className="weather-label">Humidity:</span>
            <span className="weather-value">{weather.relative_humidity_2m}%</span>
          </div>
          <div className="weather-item">
            <span className="weather-label">Wind Speed:</span>
            <span className="weather-value">{weather.wind_speed_10m} km/h</span>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Weather;
