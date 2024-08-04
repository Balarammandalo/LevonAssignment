// src/components/Dashboard.js
import React from 'react';
import LineChart from './LineChart';
import BarChart from './BarChart';
import PieChart from './PieChart';

const Dashboard = () => {
  const userActivityData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    values: [65, 59, 80, 81, 56, 55],
  };

  const salesData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    values: [28, 48, 40, 19, 86, 27],
  };

  const userDemographicsData = {
    labels: ['Male', 'Female', 'Other'],
    values: [300, 50, 100],
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Mobile Dashboard</h2>
      <div>
        <h3>User Activity</h3>
        <LineChart data={userActivityData} />
      </div>
      <div>
        <h3>Sales Data</h3>
        <BarChart data={salesData} />
      </div>
      <div>
        <h3>User Demographics</h3>
        <PieChart data={userDemographicsData} />
      </div>
    </div>
  );
};

export default Dashboard;
