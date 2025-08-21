import React from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
       
      </div>
    </div>
  );
};

export default Dashboard; 