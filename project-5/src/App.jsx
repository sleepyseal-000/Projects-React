import { useState, useEffect } from 'react';
import './App.css';
import SideBar from '../components/SideBar';
import Dashboard from '../components/Dashboard';

function App() {
  const [weatherData, setWeatherData] = useState([]);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const cities = ['London', 'New York', 'Tokyo', 'Paris', 'Sydney', 'Madrid','Toronto', 'Berlin', 'Boston', 'Cairo', 'Delhi', 'Beijing', 'Rome', ' Hamburg'];
      const weatherData = await Promise.all(
        cities.map((city) => {
          return fetch(
            `https://api.weatherbit.io/v2.0/current?city=${city}&key=7c7ffe4c1c9146d5b40eba8bc3a4b6ab`
          )
            .then((response) => response.json())
            .then((data) => data.data[0])
            .catch((error) => console.error(error));
        })
      );
      setWeatherData(weatherData);
    };

    fetchWeatherData();
  }, []);

  return (
    <div className="App">
      <div className="sidebar">
        <SideBar weatherData={weatherData} />
      </div>
      <div className="dashboard">
        <Dashboard weatherData={weatherData} />
      </div>
    </div>
  );
}

export default App;

