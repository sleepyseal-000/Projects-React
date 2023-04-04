import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';

function WindDonutChart({ weatherData }) {
  // Format the weather data to be compatible with Recharts
  const chartData = weatherData.map((data) => ({
    name: data.city_name,
    wind_speed: data.wind_spd,
  }));

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF99E6', '#7C83FD', '#FFAF7B', '#C6BC1B', '#F4B9B8','#85D2D0', '#887BB0'];

  return (
    <div>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="wind_speed"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={140}
            fill="black"
            labelLine={false}
            label={({ name, percent, index }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
            <Tooltip formatter={(value) => `Wind: ${value} m/s`} position={{ x: 0, y: -50 }} />
          </Pie>
          <Legend />
        </PieChart>
      </ResponsiveContainer>
      <h4 style={{ textAlign: 'center' }}>Percentage of Wind Speed in Meters Per Second</h4>
    </div>
  );
}

export default WindDonutChart;
