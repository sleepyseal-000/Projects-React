import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import Chart from '../components/Chart';
import WindDonutChart from '../components/WindDonutChart';
import { Link } from 'react-router-dom';
 

function Dashboard({ weatherData }) {
  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedWeatherCondition, setSelectedWeatherCondition] = useState('');

  useEffect(() => {
    if (weatherData) {
      setFilteredResults(weatherData);
    }
  }, [weatherData]);

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSearchButtonClick = () => {
    const filteredCities = weatherData.filter((item) => {
      const { city_name, weather } = item;
      const cityNameMatches = city_name.toLowerCase().includes(searchInput.toLowerCase());
      const weatherMatches = selectedWeatherCondition === '' || weather.description.toLowerCase().includes(selectedWeatherCondition.toLowerCase());
      return cityNameMatches && weatherMatches;
    });
    setFilteredResults(filteredCities);
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

        <select
          className="select-weather-condition"
          value={selectedWeatherCondition}
          onChange={(e) => setSelectedWeatherCondition(e.target.value)}
        >
          <option value="">All</option>
          <option value="few clouds">Few Clouds</option>
          <option value="scattered clouds">Scattered Clouds</option>
          <option value="clear sky">Clear Sky</option>
          <option value="overcast clouds">Overcast clouds</option>
        </select>
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
              <p>Temperature: {temp}&deg;C</p>
              <p>{weather.description}</p>
              <p>Country Code: {country_code}</p>
              {/*  <p><Link key={city_name} to={`/detail/${city_name}`} className="link-list"> </Link></p>*/}
            </div>
          );
        })}
      </div>
      <div className="dashboard-chart-container">
        <Chart weatherData={filteredResults} />
      </div>
      <div className="dashboard-donut-container">
        <WindDonutChart weatherData={filteredResults} />
      </div>
    </div>
  );
}

export default Dashboard;