import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './GetRadio.css';
import './ShowLikert.css';

class Get extends Component {
  state = {
    data: [],
    selectedOptions: {} // Object to store selected options for each question
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8081/api/v1/user/showLikertDetails')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleOptionChange = (event, questionId) => {
    const { name, checked } = event.target;
    this.setState(prevState => ({
      selectedOptions: {
        ...prevState.selectedOptions,
        [questionId]: {
          ...prevState.selectedOptions[questionId],
          [name]: checked // Store the selected option for the corresponding question ID
        }
      }
    }), () => {
      console.log("Selected options:", this.state.selectedOptions);
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { selectedOptions } = this.state;
    const selectedOptionsData = Object.keys(selectedOptions).map((questionId) => {
      const selectedOptionsForQuestion = Object.keys(selectedOptions[questionId]).filter(option => selectedOptions[questionId][option]);
      const selectedOptionsString = selectedOptionsForQuestion.join(', '); // Convert selected options array to a comma-separated string
      return {
        questionsid: parseInt(questionId),
        selectedoptions: selectedOptionsString,
      };
    });

    axios
      .post('http://127.0.0.1:8081/api/v1/user/addUserLikerttDetails', selectedOptionsData)
      .then((response) => {
        console.log('Selected options submitted successfully!');
        // Redirect to the End page after successful submission
        this.props.history.push('/End');
      })
      .catch((error) => {
        console.error('Error submitting selected options:', error);
      });
  };

  render() {
    return (
      <div className="getch">
        <h1>
          <center>Likert Survey</center>
        </h1>
        <br></br>
       
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Likert Question</th>
              <th>Likert Option</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.likertquestion}</td>
                <td>
                  <label>
                    <input
                      type="checkbox"
                      name={`option${user.id}_1`}
                      checked={this.state.selectedOptions[user.id]?.option1 || false}
                      onChange={(event) => this.handleOptionChange(event, user.id)}
                    />
                    <span className="checkbox-custom"></span>
                    {user.likertoption1}
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name={`option${user.id}_2`}
                      checked={this.state.selectedOptions[user.id]?.option2 || false}
                      onChange={(event) => this.handleOptionChange(event, user.id)}
                    />
                    <span className="checkbox-custom"></span>
                    {user.likertoption2}
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name={`option${user.id}_3`}
                      checked={this.state.selectedOptions[user.id]?.option3 || false}
                      onChange={(event) => this.handleOptionChange(event, user.id)}
                    />
                    <span className="checkbox-custom"></span>
                    {user.likertoption3}
                  </label>
                  <br />
                  <label>
                    <input
                      type="checkbox"
                      name={`option${user.id}_4`}
                      checked={this.state.selectedOptions[user.id]?.option4 || false}
                      onChange={(event) => this.handleOptionChange(event, user.id)}
                    />
                    <span className="checkbox-custom"></span>
                    {user.likertoption4}
                  </label>
                  <br />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Move the button inside the form */}
        <button type="submit" onClick={this.handleSubmit} className="submit-btn">
          Submit Selected Options
        </button>

        {/* Link removed as we will handle the redirection after form submission */}
      </div>
    );
  }
}

export default Get;
