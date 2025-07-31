import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Dashboard</h2>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="/dashboard">Dashboard</a></li>
          <li><a href="/analytics">Analytics</a></li>
          <li><a href="/users">Users</a></li>
          <li><a href="/settings">Settings</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 