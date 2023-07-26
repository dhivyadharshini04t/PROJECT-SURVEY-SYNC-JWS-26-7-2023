import React, { useState } from 'react';
import './Rating.css';
import { Link } from 'react-router-dom';

function RatingScale() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const [minValue, setMinValue] = useState(1);
  const [maxValue, setMaxValue] = useState(5);

  const handleQuestionChange = (event) => {
    setCurrentQuestion(event.target.value);
  };

  const handleMinValueChange = (event) => {
    setMinValue(Number(event.target.value));
  };

  const handleMaxValueChange = (event) => {
    setMaxValue(Number(event.target.value));
  };

  const handleAddQuestion = () => {
    if (currentQuestion !== '') {
      const newQuestion = {
        question: currentQuestion,
        minValue: minValue,
        maxValue: maxValue,
        ratings: []
      };
      setQuestions([...questions, newQuestion]);
      setCurrentQuestion('');
      setMinValue(1);
      setMaxValue(5);
    }
  };

  const handleRateQuestion = (questionIndex, rating) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].ratings.push(rating);
    setQuestions(updatedQuestions);
  };

  const renderStarRating = (questionIndex, value) => {
    const stars = [];
    for (let i = 1; i <= maxValue; i++) {
      stars.push(
        <span
          key={i}
          className={i <= value ? 'rating-star filled' : 'rating-star'}
          onClick={() => handleRateQuestion(questionIndex, i)}
        >
          &#9734;
        </span>
      );
    }
    return stars;
  };

  const handleSubmitSurvey = () => {
    // You can handle submitting the survey data here
    console.log('Survey data:', questions);
  };

  return (
    <div className="container-rating-scale">
      <Link to="/Button" className="home-button">
        Home
      </Link>

      <h1 className="rating-heading">RATING SCALE</h1>

      <div className="content-rating">
        <h2 className="content-heading">Create a Question</h2>
        <div className="hina">
          <input
            type="text"
            value={currentQuestion}
            onChange={handleQuestionChange}
            placeholder="Enter your question"
            className="question-input"
          />
        </div>
        <div className="min-max-values">
          <label>
            Min Value:
            <input
              type="number"
              value={minValue}
              min={1}
              onChange={handleMinValueChange}
              className="min-value-input"
            />
          </label>
          <label>
            Max Value:
            <input
              type="number"
              value={maxValue}
              min={1}
              onChange={handleMaxValueChange}
              className="max-value-input"
            />
          </label>
        </div>
        <br />
        <button onClick={handleAddQuestion} className="add-question-button">
          Add Question
        </button>
      </div>

      <div className="content-rating">
        <h2 className="content-heading">Questions List</h2>
        {questions.map((question, index) => (
          <div key={index} className="question-container">
            <p>{question.question}</p>
            <div className="ratings">
              {renderStarRating(index, question.ratings.length)}
            </div>
          </div>
        ))}
        <button onClick={handleSubmitSurvey} className="submit-button">
          Submit
        </button>
      </div>
    </div>
  );
}

export default RatingScale;
