import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const dataArray = [
  {
    "Test Operator": "John Doe",
    "Location": "US-Santa_Clara",
    "Date": 45154,
    "TO Status": "Assigned",
    "Planned Task Time": 8,
    "Car Number": 3655,
    "Training": 0,
    "Prep Time": 35,
    "Pre-Drive Setup": 25,
    "Flash": 0,
    "Calibration": 10,
    "TOH": 0,
    "Test Time": 75,
    "Offload": 90,
    "Blocked Time": 20,
    "Actual Task time": 810,
    "Idle Time": -330,
    "Unallocated Time": 0,
    "CarPlatform": "ATG-B",
    "Shift": "Day Shift",
    "Task Type": "IFORV"
  },
  // ... (more data objects)
];

const keysToDisplay = ["Test Time", "Offload", "Blocked Time"];

const COLORS = ['#0008FE', '#01C49F', '#FFBB28'];

const PieChartComponent = () => {
  const data = keysToDisplay.map(key => ({
    name: key,
    value: parseFloat(dataArray[0][key]),
  }));

  return (
    <PieChart width={400} height={300}>
      <Pie
        data={data}
        cx={200}
        cy={150}
        outerRadius={100}
        fill="#8884d8"
        dataKey="value"
        label
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default PieChartComponent;