import React, { Component } from 'react';
import './GetComment.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Get extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8081/api/v1/user/showComDetails')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleInputChange = (event, questionId) => {
    const { name, value } = event.target;
    this.setState(prevState => ({
      data: prevState.data.map(question => {
        if (question.id === questionId) {
          return {
            ...question,
            [name]: value
          };
        }
        return question;
      })
    }));
  };

  handleSubmit = event => {
    event.preventDefault();
    // Log the data before sending it to the backend
    console.log('Submission data:', this.state.data);

    // Send the data to the backend using Axios
    axios.post('http://127.0.0.1:8081/api/v1/user/addUserComDetails', this.state.data) // Use the correct URL for adding comments
      .then(response => {
        console.log('Backend response:', response.data);
      })
      .catch(error => {
        console.error('Error sending data to backend:', error);
      });
  };

  render() {
    return (
      <div className="getch-container">
        <h1>
          <center className="getch-title">Get</center>
        </h1>
        <br />
        <br />
        <form onSubmit={this.handleSubmit} className="getch-form">
          {this.state.data.map((question, index) => (
            <div key={question.id} className="getch-question-box">
              <h3 className="getch-question-text">{question.enteryourquestion}</h3>
              <input
                type="text"
                name={`answer_${question.id}`} // Use dynamic name for each input
                value={question[`answer_${question.id}`] || ''} // Use dynamic value for each input
                onChange={(event) => this.handleInputChange(event, question.id)}
                placeholder="Enter your answer"
                className="getch-answer-input"
              />
            </div>
          ))}
          <div className="getch-button-container">
            <button type="submit" className="getch-submit-button">
              Submit
            </button>
          </div>
        </form>
        <Link to="./End" className="getch-go-to-end-link">
          <button className="getch-go-to-end-button">
            Go to End
          </button>
        </Link>
      </div>
    );
  }
}

export default Get;