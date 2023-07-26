import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

function App() {
  const handleClick = (buttonName) => {
    console.log(`Button ${buttonName} clicked`);
    // Perform desired actions here
  };

  return (
    <div className="Button-container">
      <Link to="/Home" className="home-button">Home</Link>
      <div className="container-app">
        <h1>SURVEY SYNC</h1>

        <div className="container-app2">
          <h2>Incorporate a mix of question types, such as multiple-choice, rating scales, open-ended questions, and Likert scales, to capture both quantitative and qualitative feedback. <br />This allows for a more comprehensive understanding of respondents' opinions and experiences.</h2>
        </div>
        <div className="button-container-center"> {/* Updated class name */}
          <Link to="./ButtonMain" >
            <button className="sofia" onClick={() => handleClick('1')}>Radio Survey</button>
          </Link>
          <Link to="./ButtonMainComment">
            <button className="sofia2" onClick={() => handleClick('3')}>Comment Survey</button>
          </Link>

          <Link to="./ButtonMainLikert" >
            <button className="sofia3" onClick={() => handleClick('3')}>Likert Survey</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
