import React from 'react';
import './AfterUserLogin.css';
import { Link } from 'react-router-dom'; 

const CodeInput = () => {
  const handleRunCode = () => {
    // Add logic here to run the code or perform actions with the entered code
    const code = 'your-code-here'; // Replace 'your-code-here' with the actual code or URL you want to use
    console.log('Running code:', code);
  };

  return (
    <div className="code-input-container">
      <h2>You can view your questions here</h2><br></br>
      <Link to="./showRadio">
        <button className="enter-button" onClick={handleRunCode}>
          RADIO SURVEY QUESTIONS
        </button></Link>
        <Link to ='./ShowComment'>
        <button className="enter-button" onClick={handleRunCode}>
          COMMENT SURVEY QUESTIONS
        </button></Link>
        <Link to='./ShowLikert'>
        <button className="enter-button" onClick={handleRunCode}>
          LIKERT SURVEY QUESTIONS
        </button></Link>
      
    </div>
  );
};

export default CodeInput;
