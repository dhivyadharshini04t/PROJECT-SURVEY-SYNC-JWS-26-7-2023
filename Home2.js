import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



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
                  
                  <Link to="/ratings">Ratings</Link>
                  <Link to="/Responses">Responses</Link>
                  <Link to="/ViewFeedback">ViewFeedback</Link>
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
        Online survey  is one of the most popular data-collection sources, where a set of survey questions is sent out to a target sample and the members of this sample can respond to the right questions over the world wide web.
        </div>
        <div className="btns">
          <Link to="/Answers">
            <button>Create Survey</button>
          </Link>
        </div>
      </div>
      
    </div>
  );
};

export default Home;
