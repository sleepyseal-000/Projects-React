import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Chart({ weatherData }) {
  // Format the weather data to be compatible with Recharts
  const chartData = weatherData.map((data) => ({
    name: data.city_name,
    temperature: data.temp,
  }));

  return (
    <BarChart width={600} height={400} data={chartData} margin={{ top: 20, right: 20, bottom: 5, left: 0 }}>
      <XAxis dataKey="name" />
      <YAxis />
      <CartesianGrid strokeDasharray="3 3" />
      <Tooltip />
      <Legend />
      <Bar dataKey="temperature" fill="#8884d8" />
    </BarChart>
  );
}

export default Chart;
