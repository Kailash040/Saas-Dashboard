import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1>SaaS Dashboard</h1>
      </div>
      <div className="header-right">
        <div className="user-profile">
          <span>Welcome, Kailash Tanwar</span>
          <button className="logout-btn">Logout</button>
        </div>
      </div>
    </header>
  );
};

export default Header; 