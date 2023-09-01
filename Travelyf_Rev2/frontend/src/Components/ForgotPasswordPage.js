import React, { useState } from "react";
import axios from "axios";
import "./ForgotPassword.css";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [securityAnswer, setSecurityAnswer] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [verificationSuccess, setVerificationSuccess] = useState(false);

  const passwordRegex = /^(?=.*[A-Z])(?=.*[@!])(.{8,})$/;

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:4000/forgotpassword/forgot-password", {
        email,
        securityAnswer,
      });

      if (response.data.message === "Answer is correct.") {
        setVerificationSuccess(true);
        setMessage("Verification successful. Please reset your password.");
      } else {
        setMessage("Incorrect answer.");
      }
    } catch (error) {
      setMessage("Incorrect answer or an error occurred.");
    }
  };

  const handleResetPasswordSubmit = async (e) => {
    e.preventDefault();

    if (!passwordRegex.test(newPassword)) {
      setMessage("Password must have at least 8 characters including an uppercase letter and a special character (@ or !).");
      return;
    } else if (newPassword !== confirmNewPassword) {
      setMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4000/forgotpassword/reset-password", {
        email,
        newPassword,
      });

      setMessage("Password updated successfully. Redirecting to the login page...");

      setTimeout(() => {
        window.location.href = "/login";
      }, 3000); // Redirect after 3 seconds
    } catch (error) {
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>Forgot Password</h2>
      </div>
      <div className="card-body">
        {!verificationSuccess && (
          <form onSubmit={handleForgotPasswordSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="security-answer">Security Answer</label>
              <input
                id="security-answer"
                type="text"
                name="securityAnswer"
                className="form-control"
                placeholder="Enter the answer to the security question"
                value={securityAnswer}
                onChange={(e) => setSecurityAnswer(e.target.value)}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Verify Security Answer
            </button>
          </form>
        )}

        {verificationSuccess && (
          <div >
            <p>{message}</p>

            <form  onSubmit={handleResetPasswordSubmit}>
                <div className="form-group">
                <input
                type="password"
                placeholder="New Password"
                value={newPassword}
                className="form-control"
                
                onChange={(e) => setNewPassword(e.target.value)}
              />

                </div>
              <div className="form-group">
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmNewPassword}
                className="form-control"
                

                onChange={(e) => setConfirmNewPassword(e.target.value)}
              />

              </div>

              
                
              <button className="btn btn-primary" type="submit">Reset Password</button>
            </form>
          </div>
        )}

        {message && !verificationSuccess && <p>{message}</p>}
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
