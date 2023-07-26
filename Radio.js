import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Radio.css';
import axios from 'axios';

function AdminInterface() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [options, setOptions] = useState([]);
  const [currentOption, setCurrentOption] = useState('');

  const handleQuestionChange = (event) => {
    setCurrentQuestion(event.target.value);
  };

  const handleOptionChange = (event) => {
    setCurrentOption(event.target.value);
  };

  const handleAddOption = () => {
    if (currentOption !== '' && options.length < 4) {
      setOptions([...options, currentOption]);
      setCurrentOption('');
    } else if (options.length >= 4) {
      window.alert('Maximum 4 options allowed.');
    }
  };

  const handleAddQuestion = () => {
    if (currentQuestion !== '' && options.length >= 2) {
      const newQuestion = {
        question: currentQuestion,
        options: options,
        selectedOption: ''
      };
      
      setQuestions([...questions, newQuestion]);
      setCurrentQuestion('');
      setOptions([]);
      setCurrentOption('');
    } else {
      window.alert('A question must have at least 2 options.');
    }
    const Question={
        question:questions
      }
      axios.post('http://127.0.0.1:8080/adDetails', Question);
  };

  const handleOptionSelect = (questionIndex, optionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].selectedOption = options[optionIndex];
    setQuestions(updatedQuestions);
  };

  const handleSurveySubmit = () => {
    
    console.log('Survey submitted:', questions);
  
    setQuestions([]);
  };

  return (
    <div className="container-admin-interface">
      <div className="home">
        <Link to="/Button">Home</Link>
      </div>
      <div className="header">
        <h1>RADIO SURVEY</h1>
      </div>

      <div className="content">
        <h2>Create a Question</h2>
        <input
          type="text"
          value={currentQuestion}
          onChange={handleQuestionChange}
          placeholder="Enter your question"
        />
        <br />
        <input
          type="text"
          value={currentOption}
          onChange={handleOptionChange}
          placeholder="Enter an option"
        />
        <br />
        <button onClick={handleAddOption}>Add Option</button>
        <br />
        <ul>
          {options.map((option, index) => (
            <li key={index}>
              <input
                type="radio"
                name={`option-${index}`}
                value={option}
                onChange={() => handleOptionSelect(questions.length, index)}
              />
              {option}
            </li>
          ))}
        </ul>
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>

      <div className="content">
        <h2>Questions List</h2>
        <ul>
          {questions.map((question, index) => (
            <li key={index}>
              {question.question}
              <ul>
                {question.options.map((option, optionIndex) => (
                  <li key={optionIndex}>
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={option}
                      checked={option === question.selectedOption}
                      onChange={() => handleOptionSelect(index, optionIndex)}
                    />
                    {option === 'null' ? '---' : option}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
      <Link to="./End">
        <button onClick={handleSurveySubmit}>Submit</button>
      </Link>
    </div>
  );
}

export default AdminInterface;
