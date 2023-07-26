import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

export const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleRegisterSubmit = (e) => {
    e.preventDefault();

    // First Name validation
    if (firstName.trim() === "") {
      setErrorMessage("Please enter your first name.");
      return;
    }

    // Last Name validation
    if (lastName.trim() === "") {
      setErrorMessage("Please enter your last name.");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    // Password validation
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    // If all fields are valid
    setErrorMessage("");
    console.log("Register submitted:", {
      firstName,
      lastName,
      email,
      password,
    });
    // Perform further registration actions
  };

  return (
    <div className="login-register-container">
      <div className="form-container register-form-container">
        <h1>SURVEY SYNC</h1>
        <h2>REGISTER</h2>
        <form className="register-form" onSubmit={handleRegisterSubmit}>
          <label htmlFor="register-firstName">First Name</label>
          <input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            id="register-firstName"
            placeholder="First Name"
          />
          <label htmlFor="register-lastName">Last Name</label>
          <input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            id="register-lastName"
            placeholder="Last Name"
          />
          <label htmlFor="register-email">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Your email@gmail.com"
            id="register-email"
            name="register-email"
          />
          <label htmlFor="register-password">Password</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="********"
            id="register-password"
            name="register-password"
          /><br></br>
          <button type="submit" className="register-button"><Link to="./Home">
            Register</Link>
          </button>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
        </form>
        <Link to="/Login">
          <button className="link-button">Already have an account? Login here.</button>
        </Link>
      </div>
    </div>
  );
};
