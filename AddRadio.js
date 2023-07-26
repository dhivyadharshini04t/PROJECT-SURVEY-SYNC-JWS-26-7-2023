import React, { useState } from 'react';
import './AddRadio.css';
import { Link } from 'react-router-dom';
import axios from 'axios'; // Make sure axios is installed and imported

const Post = () => {
  const [formData, setFormData] = useState({
    userid: '', // Add userId field to the stat
    question: '',
    option1: '',
    option2: '',
    option3: '',
    option4: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const isDataValid = (data) => {
    // Implement your data validation logic here
    // For example, check if all required fields are filled
    return true; // Return true if data is valid, otherwise return false
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      userid: formData.userid, 
      question: formData.question,
      option1: formData.option1,
      option2: formData.option2,
      option3: formData.option3,
      option4: formData.option4
    };

    if (isDataValid(data)) {
      axios.post('http://localhost:8081/api/v1/user/addRadioDetails', data)
        .then((response) => {
          // Handle success if needed
          console.log("Question added successfully!");
        })
        .catch((error) => {
          // Handle error if needed
          console.error("Error adding Question:", error);
        });
    } else {
      console.error("Invalid data, please fill in all fields.");
    }
  };

  return (
    <div className="Stefhina">
      <div className="feedbackFormContainer1">
        <h1 className="formTitle1">SURVEY</h1>
        <form id="form" onSubmit={handleSubmit}>
          {/* Input field for the User ID */}
          <div className="formField1">
            <input
              type="text"
              name="userid"
              className="input-userid" // You can add appropriate CSS class for styling
              placeholder="Enter User ID"
              value={formData.userid}
              onChange={handleChange}
            />
          </div>
          <div className="formField1">
            <input
              type="text"
              name="question"
              className="input-name1"
              placeholder="Enter your question here"
              value={formData.question}
              onChange={handleChange}
            />
          </div>
          <div className="formField1">
            <input
              type="text"
              name="option1"
              className="input-email1"
              placeholder="Enter your option1"
              value={formData.option1}
              onChange={handleChange}
            />
          </div>
          <div className="formField1">
            <input
              type="text"
              name="option2"
              className="input-email1"
              placeholder="Enter your option2"
              value={formData.option2}
              onChange={handleChange}
            />
          </div>
          <div className="formField1">
            <input
              type="text"
              name="option3"
              className="input-email1"
              placeholder="Enter your option3"
              value={formData.option3}
              onChange={handleChange}
            />
          </div>
          <div className="formField1">
            <input
              type="text"
              name="option4"
              className="input-email1"
              placeholder="Enter your option4"
              value={formData.option4}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submitButton1">
            Submit
          </button>
        </form>
        <Link to="./End">Go to End</Link>
      </div>
      
    </div>
  );
};

export default Post;
