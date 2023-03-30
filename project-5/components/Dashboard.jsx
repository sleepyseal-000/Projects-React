import React, { useState, useEffect } from 'react';
import './Dashboard.css';

function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  const cities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney'];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await Promise.all(
          cities.map(city =>
            fetch(`https://api.weatherbit.io/v2.0/current?city=${city}&key=7c7ffe4c1c9146d5b40eba8bc3a4b6ab`)
              .then(response => response.json())
              .then(data => data.data[0])
          )
        );
        setWeatherData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (weatherData) {
      setFilteredResults(weatherData);
    }
  }, [weatherData]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchButtonClick = () => {
    // Implement your search logic here
  };

  return (
    <div className="dashboard-container">
      <h1>Weather List!</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearchInputChange}
        />
        <button
          type="button"
          className="button-3"
          onClick={handleSearchButtonClick}
        >
          Search
        </button>
      </div>
      <div className="dashboard-card-container">
        {filteredResults.map((item) => {
          const {
            city_name,
            country_code,
            temp,
            weather,
          } = item;
          return (
            <div key={city_name} className="weather-list">
              <h2>{city_name}</h2>
              <p>{temp}&deg;C</p>
              <p>{weather.description}</p>
              <p>Country Code: {country_code}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Dashboard;
