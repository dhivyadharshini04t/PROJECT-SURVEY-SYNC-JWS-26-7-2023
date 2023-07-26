import React from "react";
import "./ButtonMainComment.css";
import { Link } from 'react-router-dom';

const ButtonComponent = () => {
  return (
    <div className="buttonMainerComment-container">
      <Link to='./AddComment'>
        <button className="buttonddd post-comment-btn">Post Comment</button>
      </Link>
      <Link to='./GetComment'>
        <button className="buttonddd1 get-comment-btn">Get Comment</button>
      </Link>
      <Link to='./UpdateComment'>
        <button className="buttonddd2 update-comment-btn">Update Comment</button>
      </Link>
      <Link to='./DeleteComment'>
        <button className="buttonddd3 delete-comment-btn">Delete Comment</button>
      </Link>
    </div>
  );
};

export default ButtonComponent;
