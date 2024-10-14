import React from 'react';
import './Forecast.css';

function Forecast() {
  const [forecastData, setForecastData] = useState({});

  useEffect(() => {
    fetchForecastData();
  }, []);

  const fetchForecastData = async () => {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=London&appid=${apiKey}`);
    const data = await response.json();
    setForecastData(data);
  };

  return (
    <div className="future-forecast">
      <h2>7-Day Forecast</h2>
      {forecastData && (
        <div>
          {forecastData.list.map((day) => (
            <div key={day.dt}>
              <p>{day.dt_txt}</p>
              <p>Temperature: {day.main.temp}°C</p>
              <p>Humidity: {day.main.humidity}%</p>
              <p>Wind Speed: {day.wind.speed} m/s</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Forecast;
