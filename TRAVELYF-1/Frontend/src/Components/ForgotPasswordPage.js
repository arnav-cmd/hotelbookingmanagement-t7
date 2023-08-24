import React, { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";

import "../App.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");

  const [securityAnswer, setSecurityAnswer] = useState("");

  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleForgotPasswordSubmit = (e) => {
    e.preventDefault();

    axios

      .post("http://localhost:4000/users/forgot-password", {
        email,

        answer: securityAnswer,
      })

      .then((response) => {
        setMessage(response.data.message);
        navigate("/FAQ");
      })

      .catch((error) => {
        console.error("Error during forgot password:", error);

        setMessage("An error occurred. Please try again later.");
      });
  };

  return (
    <div className="ForgotPasswordPage">
      <h2>Forgot Password</h2>

      <form onSubmit={handleForgotPasswordSubmit}>
        <div className="group">
          <input
            id="email"
            type="email"
            name="email"
            className="input"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="group">
          <input
            id="security-answer"
            type="text"
            name="securityAnswer"
            className="input"
            placeholder="Enter the answer to the security question"
            value={securityAnswer}
            onChange={(e) => setSecurityAnswer(e.target.value)}
          />
        </div>

        <div className="group">
          <button type="submit" className="btn btn-primary"  href="/FAQ">
            Submit
          </button>
        </div>
      </form>

      {message && <div className="message">{message}</div>}
    </div>
  );
};

export default ForgotPasswordPage;
