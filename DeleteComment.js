import axios from "axios";
import React, { useState } from "react";
import './DeleteComment.css'

function Delete() {
  const [taskId, setSearch] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isDeleted, setIsDeleted] = useState(false); // New state for tracking deletion status
  
  const handleDelete = () => {
    axios.delete(`http://127.0.0.1:8081/api/v1/user/deleteComDetails/${taskId}`)
      .then(response => {
        console.log("Question deleted successfully!");
        setSearch("");
        setErrorMessage("");
        setIsDeleted(true); // Set isDeleted to true after successful deletion
      })
      .catch(err => {
        console.log(err);
        setErrorMessage("Error deleting the question. Please try again later.");
        setIsDeleted(false); // Set isDeleted to false in case of an error
      });
  }

  const searchid = (evt) => {
    if (evt.key === "Enter") {
      handleDelete();
    }
  }

  return (
    <div className="delete-tt">
      <div className="delete-container">
        <h1 className="delete-title">Delete a Question</h1>
        <div className="">
          <input
            type="text"
            className="delete-input"
            placeholder="Enter the Id"
            value={taskId}
            onChange={e => setSearch(e.target.value)}
            onKeyPress={searchid}
          />
          <button className="deleteButton" onClick={handleDelete}>
            Delete
          </button>
        </div>
        {errorMessage && <p className="delete-error">{errorMessage}</p>}
        {isDeleted && <p className="delete-success">Question deleted successfully!</p>} {/* Render success message */}
      </div>
    </div>
  );
}

export default Delete;
