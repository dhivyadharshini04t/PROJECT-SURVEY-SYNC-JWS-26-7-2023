import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className="dashboard">
      <div className="dashboard-icon" onClick={toggleDashboard}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 3c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0 1c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm0 2c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6zm1 2v5h2v-7h-2zm-1 2h-4v-1h4v1zm0 2h-4v-1h4v1zm0 2h-4v-1h4v1z"/>
        </svg>
      </div>
      {showDashboard && (
        <div className="dashboard-menu">
          <h1>Welcome to the Dashboard</h1>
          <ul>
            <li>
              <Link to="/templates">Templates</Link>
            </li>
            <li>
              <Link to="/surveys">Surveys</Link>
            </li>
            <li>
              <Link to="/reports">Reports</Link>
            </li>
            <li>
              <Link to="/settings">Settings</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
