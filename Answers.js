import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RadioUserDetails = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:8081/api/v1/user/api/showUserDetails')
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Combined Radio and User Details</h1>
      <ul>
        {data.map((item) => (
          <li key={item.questionid}>
            <h3>Question: {item.radioModel.question}</h3>
            <p>Option 1: {item.radioModel.option1}</p>
            <p>Option 2: {item.radioModel.option2}</p>
            <p>Option 3: {item.radioModel.option3}</p>
            <p>Option 4: {item.radioModel.option4}</p>
            <p>User's Selected Option: {item.selectedoption}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RadioUserDetails;
