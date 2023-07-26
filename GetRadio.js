import React, { Component } from 'react';
import './GetRadio.css';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

class Get extends Component {
  state = {
    data: []
  };

  componentDidMount() {
    axios.get('http://127.0.0.1:8081/api/v1/user/showRadioDetails')
      .then(response => {
        this.setState({ data: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="getch">
        <h1>
          <center>Get</center>
        </h1>
        <br></br>
        <br></br>
        <table border={1}>
          <thead>
            <tr>
              <th>id</th>
              <th>question</th>
              <th>Options</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.question}</td>
                <td>
                  <input type="radio" name={`option${user.id}`} value={user.option1} />
                  {user.option1}
                  <br />
                  <input type="radio" name={`option${user.id}`} value={user.option2} />
                  {user.option2}
                  <br />
                  <input type="radio" name={`option${user.id}`} value={user.option3} />
                  {user.option3}
                  <br />
                  <input type="radio" name={`option${user.id}`} value={user.option4} />
                  {user.option4}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Link to="./End">
          <button>
            Go to End
          </button>
        </Link>
      </div>
    );
  }
}

export default Get;