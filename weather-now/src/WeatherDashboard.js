import React, { useState, useEffect } from 'react';
import './WeatherDashboard.css';

function WeatherDashboard() {
  const [weatherData, setWeatherData] = useState({});
  const [location, setLocation] = useState('');
  const [apiKey, setApiKey] = useState('420ac8b7c4f8b126867d1a317ae4c82f'); // Replace with your OpenWeatherMap API key

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`);
    const data = await response.json();
    setWeatherData(data);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="container">
      <h1>WeatherNow</h1>
      <input type="text" value={location} onChange={handleLocationChange} placeholder="Enter city name" />
      <button onClick={fetchWeatherData}>Get Weather</button>
      {weatherData && (
        <div>
          <h2>Current Weather</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Humidity: {weatherData.main.humidity}%</p>
          <p>Wind Speed: {weatherData.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default WeatherDashboard;