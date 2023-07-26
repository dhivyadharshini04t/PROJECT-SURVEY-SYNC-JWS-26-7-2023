import React, { Component } from 'react';
import './UpdateRadio.css';
import axios from 'axios';

class Put extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      likertquestion: "",
      likertoption1: "",
      likertoption2: "",
      likertoption3: "",
      likertoption4: "",
      errorMessage: ""
    };
  }

  handleIdChange = (event) => {
    this.setState({ id: event.target.value });
  };

  handleQuestionChange = (event) => {
    this.setState({ likertquestion: event.target.value });
  };

  handleOption1Change = (event) => {
    this.setState({ likertoption1: event.target.value });
  };

  handleOption2Change = (event) => {
    this.setState({ likertoption2: event.target.value });
  };

  handleOption3Change = (event) => {
    this.setState({ likertoption3: event.target.value });
  };

  handleOption4Change = (event) => {
    this.setState({ likertoption4: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // Create the data object to be sent in the PUT request
    const data = {
      id: this.state.id,
      likertquestion: this.state.likertquestion,
      likertoption1: this.state.likertoption1,
      likertoption2: this.state.likertoption2,
      likertoption3: this.state.likertoption3,
      likertoption4: this.state.likertoption4
    };

    // Send the PUT request to update the data
    axios.put(`http://127.0.0.1:8081/api/v1/user/updateLikertDetails/${this.state.id}`, data)
      .then((response) => {
        console.log(this.state.id);
        // You can handle success feedback here if needed
      })
      .catch((error) => {
        console.error("Error updating Question:", error);
        // Set the error message in the state to display to the user
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

            <label>Likert Question:</label>
            <input type="text" value={this.state.likertquestion} required onChange={this.handleQuestionChange} />

            <label>Likert Option 1:</label>
            <input type="text" value={this.state.likertoption1} required onChange={this.handleOption1Change} />

            <label>Likert Option 2:</label>
            <input type="text" value={this.state.likertoption2} required onChange={this.handleOption2Change} />

            <label>Likert Option 3:</label>
            <input type="text" value={this.state.likertoption3} required onChange={this.handleOption3Change} />

            <label>Likert Option 4:</label>
            <input type="text" value={this.state.likertoption4} required onChange={this.handleOption4Change} />

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
