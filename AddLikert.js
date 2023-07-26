import React, { useState } from 'react';
import './AddLikert.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

const PostForm = () => {
  const [formData, setFormData] = useState({
    id: '',
    likertquestion: '',
    likertoption1: '',
    likertoption2: '',
    likertoption3: '',
    likertoption4: ''
  });

  const [questionCount, setQuestionCount] = useState(0);

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
      id: formData.id,
      likertquestion: formData.likertquestion,
      likertoption1: formData.likertoption1,
      likertoption2: formData.likertoption2,
      likertoption3: formData.likertoption3,
      likertoption4: formData.likertoption4
    };

    if (isDataValid(data)) {
      axios.post('http://localhost:8081/api/v1/user/addLikertDetails', data)
        .then((response) => {
          // Handle success if needed
          console.log("Likert Question added successfully!");
          setQuestionCount((prevCount) => prevCount + 1); // Increment question count after successful submission
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
    <div className="post-form-container">
      <div className="feedbackFormContainer1">
        <h1 className="formTitle1">LIKERT SURVEY</h1>
        {questionCount < 5 ? (
          <form id="form" onSubmit={handleSubmit}>
            <div className="formField1">
              <input
                type="text"
                name="id"
                className="input-name1"
                placeholder="Enter ID"
                value={formData.id}
                onChange={handleChange}
              />
            </div>
            <div className="formField1">
              <input
                type="text"
                name="likertquestion"
                className="input-name1"
                placeholder="Enter your question here"
                value={formData.likertquestion}
                onChange={handleChange}
              />
            </div>
            <div className="formField1">
              <input
                type="text"
                name="likertoption1"
                className="input-email1"
                placeholder="Enter your option1"
                value={formData.likertoption1}
                onChange={handleChange}
              />
            </div>
            <div className="formField1">
              <input
                type="text"
                name="likertoption2"
                className="input-email1"
                placeholder="Enter your option2"
                value={formData.likertoption2}
                onChange={handleChange}
              />
            </div>
            <div className="formField1">
              <input
                type="text"
                name="likertoption3"
                className="input-email1"
                placeholder="Enter your option3"
                value={formData.likertoption3}
                onChange={handleChange}
              />
            </div>
            <div className="formField1">
              <input
                type="text"
                name="likertoption4"
                className="input-email1"
                placeholder="Enter your option4"
                value={formData.likertoption4}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="submitButton1">
              Submit
            </button>
          </form>
        ) : (
          <p>You have reached the maximum limit of 5 questions.</p>
        )}
        <Link to="./End">Go to End</Link>
      </div>
    </div>
  );
};

export default PostForm;
