import React from 'react';
import WeatherDashboard from './WeatherDashboard';
import Forecast from './Forecast';
import SearchBar from './SearchBar';

function App() {
  return (
    <div>
      <SearchBar />
      <WeatherDashboard />
      <Forecast />
    </div>
  );
}

export default App;