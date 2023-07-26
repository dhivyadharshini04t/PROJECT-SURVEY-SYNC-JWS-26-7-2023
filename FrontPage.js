import React from 'react';
import './App.css';
import './FrontPage.css';

import { Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="app-container">
      <header className="app-header">
        <div className="background-image">
          {/* Add the heading on top of the background image */}
          <h1 className="heading-text">SURVEY SYNC</h1>
        </div>
        <div className="button-container">
          <Link to="/UserLogin">
            <button className="app-animated-button">Take Survey Login</button>
          </Link>
          <Link to="/AdminLogin">
            <button className="app-animated-button">Create Survey Login</button>
          </Link>
          <Link to="/Home2">
            <button className="app-animated-button">Admin</button>
          </Link>

        </div>
      </header>
    </div> 
  );
};

export default App;
