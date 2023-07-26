import React from "react";
import "./ButtonMain.css";
import { Link } from 'react-router-dom';

const ButtonComponent = () => {
  return (
    <div className="buttonMainer-container">
      <Link to='./AddRadio'>
      <button className="buttondd">Add Question</button></Link>
      <Link to='./GetRadio'>
      <button className="buttondd1">Get  Question</button></Link>
      <Link to='./UpdateRadio'>
      <button className="buttondd2">Update Question</button></Link>
      <Link to='./DeleteRadio'>
      <button className="buttondd3">Delete Question</button></Link>
    </div>
  );
};

export default ButtonComponent;
