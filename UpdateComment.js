import React, { Component } from 'react';
import './UpdateRadio.css';
import axios from 'axios';

class Put extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      enteryourquestion: "",
      answer: "",
      errorMessage: ""
    };
  }
  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleQuestionChange = (event) => {
    this.setState({ enteryourquestion: event.target.value });
  };

  handleAnswerChange = (event) => {
    this.setState({ answer: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Check if question and answer are not empty before sending the PUT request
    if (!this.state.enteryourquestion.trim()) {
      this.setState({ errorMessage: "Please enter a valid question." });
      return;
    }

    const data = {
      id: this.state.id,
      question: this.state.enteryourquestion,
      answer: this.state.answer,
      // Add other options if needed
    };
    axios.put(`http://127.0.0.1:8081/api/v1/user/updateComDetails/${this.state.id}`, data)
      .then((response) => {
        console.log(this.state.id);
      })
      .catch((error) => {
        console.error("Error updating Question:", error);
        this.setState({ errorMessage: "Error updating the question. Please try again later." });
      });
  };

  render() {
    return (
      <div className="Appppo">
        <header className="App-header11">
          <form onSubmit={this.handleSubmit}>
            <h2>Update</h2>
            {this.state.errorMessage && <p>{this.state.errorMessage}</p>}
            <label>ID:</label>
            <input type="number" value={this.state.id} required onChange={this.handleIdChange} />

            <label>Question:</label>
            <input type="text" value={this.state.enteryourquestion} required onChange={this.handleQuestionChange} />

            <label>Answer</label>
            <input type="text" value={this.state.answer} onChange={this.handleAnswerChange} />

            <div>
              <button className="huu" type="submit">Update Question</button>
            </div>
          </form>
        </header>
      </div>
    );
  }
}
export default Put;
