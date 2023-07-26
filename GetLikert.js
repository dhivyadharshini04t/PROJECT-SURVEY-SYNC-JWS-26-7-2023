import React, { Component } from 'react';
import './GetRadio.css';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

class Get extends Component {
  state = {
    data: []
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
                  <input type="checkbox" name={`option${user.id}`} value={user.option1} />
                  {user.likertoption1}
                  <br />
                  <input type="checkbox" name={`option${user.id}`} value={user.option2} />
                  {user.likertoption2}
                  <br />
                  <input type="checkbox" name={`option${user.id}`} value={user.option3} />
                  {user.likertoption3}
                  <br />
                  <input type="checkbox" name={`option${user.id}`} value={user.option4} />
                  {user.likertoption4}
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