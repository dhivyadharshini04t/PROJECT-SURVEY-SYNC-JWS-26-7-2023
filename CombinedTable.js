import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CombinedTable = () => {
  const [combinedData, setCombinedData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8081/api/v1/user/api/showRadioDetails');
      setCombinedData(response.data);
    } catch (error) {
      console.error('Error fetching combined data:', error);
    }
  };
  
  return (
    <div>
      <h1>Combined Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>User ID</th>
            <th>Question</th>
            <th>Option 1</th>
            <th>Option 2</th>
            <th>Option 3</th>
            <th>Option 4</th>
            <th>Selected Option</th>
          </tr>
        </thead>
        <tbody>
          {combinedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.userid}</td>
              <td>{item.question}</td>
              <td>{item.option1}</td>
              <td>{item.option2}</td>
              <td>{item.option3}</td>
              <td>{item.option4}</td>
              <td>{item.selectedoption}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CombinedTable;
