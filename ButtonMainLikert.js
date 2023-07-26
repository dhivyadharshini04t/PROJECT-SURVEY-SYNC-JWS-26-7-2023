import React from "react";
import "./ButtonMainLikert.css";
import { Link } from 'react-router-dom';

const ButtonComponent = () => {
  return (
    <div className="buttonMainerLikert-container">
      <Link to='./AddLikert'>
        <button className="buttonram post-comment-btn">Post Likert Question  </button>
      </Link>
      <Link to='./GetLikert'>
        <button className="buttonram1 get-comment-btn">Get Likert Question</button>
      </Link>
      <Link to='./UpdateLikert'>
        <button className="buttonram2 update-comment-btn">Update Likert Question</button>
      </Link>
      <Link to='./DeleteLikert'>
        <button className="buttonram3 delete-comment-btn">Delete Likert Question</button>
      </Link>
    </div>
  );
};

export default ButtonComponent;
