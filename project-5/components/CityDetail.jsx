import React from 'react';

function CityDetail({ weatherData }) {
  const {
    city_name,
    country_code,
    temp,
    weather,
  } = weatherData;

  return (
    <div>
      <h2>{city_name}</h2>
      <p>Temperature: {temp}&deg;C</p>
      <p>{weather.description}</p>
      <p>Country Code: {country_code}</p>
    </div>
  );
}

export default CityDetail;
