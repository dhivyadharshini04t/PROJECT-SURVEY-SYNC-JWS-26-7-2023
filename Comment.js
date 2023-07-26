import React, { useState } from 'react';
import './Comment.css';
import { Link } from 'react-router-dom';

function OpenEndedQuestions() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState('');

  const handleQuestionChange = (event) => {
    setCurrentQuestion(event.target.value);
  };

  const handleAddQuestion = () => {
    if (currentQuestion !== '') {
      const newQuestion = {
        question: currentQuestion,
        comments: ''
      };
      setQuestions([...questions, newQuestion]);
      setCurrentQuestion('');
    }
  };

  const handleCommentChange = (event, questionIndex) => {
    const updatedQuestions = [...questions];
    updatedQuestions[questionIndex].comments = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleSubmit = () => {
    // Implement your submit logic here
    console.log('Responses submitted:', questions);
    // Clear the questions after submission if needed
    setQuestions([]);
  };

  return (
    <div className="container-open-ended">
       <Link to="/Button" className="home-button">Home</Link>
      <h1>Open-Ended Questions</h1>

      <div className="contentComment">
        <h2>Create a Question</h2>
        <input
          type="text"
          value={currentQuestion}
          onChange={handleQuestionChange}
          placeholder="Enter your question"
        />
        <br />
        <button onClick={handleAddQuestion}>Add Question</button>
      </div>

      <div className="content">
        <h2>Questions List</h2>
        {questions.map((question, index) => (
          <div key={index} className="question">
            <p>{question.question}</p>
            <textarea
              value={question.comments}
              onChange={(event) => handleCommentChange(event, index)}
              placeholder="Enter your comment"
            ></textarea>
          </div>
        ))}
      </div>

      {/* Submit button */}
      <div className="submit-button-container">
        <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default OpenEndedQuestions;
