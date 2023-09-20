// Home.js
import React from 'react';
import LineChart from '../components/LineChart';

const timeData = {
  'Prep Time': 300,
  'Pre-Drive Setup': 250,
  Flash: 50,
  Calibration: 0,
  TOH: 0,
};

const HomePage = () => {
  return (
    <div>
      <h1>Time Management Chart</h1>
      <LineChart data={timeData} />
    </div>
  );
};

export default HomePage;