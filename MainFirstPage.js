import React from 'react';
import { Link } from 'react-router-dom';

import tru from './assets/video.mp4';
import './MainFirstPage.css';

const Front = () => {
  return (
    <div className="frontdd-container">
        <div className="introdd-container"><h1>SURVEY SYNC</h1>
          <p>An online survey is a digital method of collecting information and feedback from a targeted audience over the internet. 
            It offers accessibility, cost-effectiveness, and real-time data, making it a powerful tool for
             understanding customer preferences, conducting market research, and gaining valuable
              insights to improve products and services.
          </p>
        </div>
      <video src={tru} loop autoPlay>
        
      </video>
      <Link to="/FrontPage" className="buttonddddd-container">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default Front;