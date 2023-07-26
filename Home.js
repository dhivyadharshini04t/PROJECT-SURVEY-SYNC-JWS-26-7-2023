import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import img1 from './assets/About.png';
import img2 from './assets/TermsAndConditions.png';
import img3 from './assets/SurveySecurity.png';
import pdf1 from './assets/casestudies.pdf';
import pdf2 from './assets/FAQs.pdf';


const Home = () => {
  
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="containerS">
      <nav>
        <div className="menu">
          <div className="logo">
            <a href="#">SURVEY SYNC</a>
          </div>
          <ul>
            <li>
              <div className="dropdown">
                <div className="dropdown-content">
                  <Link to="/Button">Templates</Link>
                  <Link to="/ratings">Ratings</Link>
                  <Link to="/Responses">Responses</Link>
                  <Link to="/FeedbackFormMicro">FillFeedback</Link>
                </div>
              </div>
            </li>
            <li>
              <a href="mailto:dhivyadharshini04t@gmail.com">Contact Us</a>
            </li>
            <li>
              <Link to="/FrontPage">Log out</Link>
            </li>
            <li>
              <Link to="/FrontPage">Profile</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="img"></div>
      <div className="center">
        <div className="title">
          Survey is a method of gathering and compiling Information
        </div>
        <div className="btns">
          <Link to="/Button">
            <button>Create Survey</button>
          </Link>
        </div>
      </div>
      <footer className="footer">
        <div className="wrapper">
          <ul className="footer-links">
            <li>
              <a href={img1} target="_blank" rel="noopener noreferrer">
                About
              </a>
            </li>
            <li>
              <a href={img2} target="_blank" rel="noopener noreferrer">
                Terms and Conditions
              </a>
            </li>
            <li>
              <a href={img3} target="_blank" rel="noopener noreferrer">
                Survey Security
              </a>
            </li>
            <li>
              <a href={pdf1} target="_blank" rel="noopener noreferrer">
                Case Studies
              </a>
            </li>
            <li>
              <a href={pdf2} target="_blank" rel="noopener noreferrer">
                FAQs
              </a>
            </li>
            <li>
              <Link to="/Feedback">Feedback</Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
