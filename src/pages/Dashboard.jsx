import React from 'react';
import Header from '../components/layout/Header';
import Sidebar from '../components/layout/Sidebar';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="dashboard-content">
        <Sidebar />
        <main className="main-content">
          <div className="dashboard-grid">
            <div className="card">
           
            </div>
            <div className="card">
              <h3>Revenue</h3>
              <p className="stat">$45,678</p>
            </div>
            <div className="card">
              <h3>Active Sessions</h3>
              <p className="stat">892</p>
            </div>
            <div className="card">
              <h3>Conversion Rate</h3>
              <p className="stat">12.5%</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard; 