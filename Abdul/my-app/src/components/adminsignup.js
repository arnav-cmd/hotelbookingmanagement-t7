import React, { useState } from "react";

import axios from "axios";
import "./adminsignup.css";
import { Link, NavLink,useNavigate } from "react-router-dom";


// Then you can use the useNavigate hook in your component


const AdminSignupPage = () => {
  const [AdminsignupUsername, setSignupUsername] = useState("");
  const [AdminsignupPassword, setSignupPassword] = useState("");
  const [AdminsignupRepeatPassword, setSignupRepeatPassword] = useState("");
  const [AdminsignupEmail, setSignupEmail] = useState("");
  const [AdminsignupError, setSignupError] = useState("");
//   const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (
      !AdminsignupUsername ||
      !AdminsignupPassword ||
      !AdminsignupRepeatPassword ||
      !AdminsignupEmail
    ) {
      setSignupError("Please fill in all fields for signup.");
    } else if (signupPassword !== AdminRepeatPassword) {
      setSignupError("Passwords do not match.");
    } else {
      setSignupError("");
      console.log("Signup submitted.");
      console.log("Username:", AdminsignupUsername);
      console.log("Password:", AdminsignupPassword);
      console.log("Email:", AdminsignupEmail);

      // Send the signup data to the backend
      axios
        .post("http://127.0.0.1:8001/adminsignup", {
          email: AdminsignupEmail,
          password: AdminsignupPassword,
          Username: AdminsignupUsername
        })
        .then((response) => {
          console.log(response.data);
          if (response.data === "exist") {
            // User already exists, show an error message
            setSignupError("User already exists with the provided email.");
          } else {
            // navigate('/login');
            // User signup successful, do something (e.g., redirect to profile page)

          }
        })
        .catch((error) => {
          console.error("Error during signup:", error);
          setSignupError("Failed to signup. Please try again later.");
        });
        
    }

  };

  return (
    <>
      <h1 className="custom">Sign Up To Access EasyBus</h1>

      <div className="custom">
        <div className="row">
          <div className="col-md-6 mx-auto p-0">
            <div className="card">
              <div className="login-box">
                <div className="login-snip">
                  <NavLink to="/login" className="tab" activeClassName="active">
                    <h3>Login</h3>
                  </NavLink>
                  <NavLink
                    to="/adminsignup"
                    className="tab"
                    activeClassName="active"
                  >
                    <h3>Sign Up</h3>
                  </NavLink>
                  <div className="login-space">
                    <div className="sign-up-form">
                      <form onSubmit={handleSignupSubmit}>
                        <div className="group">
                          <label htmlFor="signup-username" className="label">
                            Username
                          </label>
                          <input
                            id="signup-username"
                            type="text"
                            name="signupUsername"
                            className="input"
                            placeholder="Create your Username"
                            value={signupUsername}
                            onChange={(e) => setSignupUsername(e.target.value)}
                          />
                        </div>
                        <div className="group">
                          <label htmlFor="signup-password" className="label">
                            Password
                          </label>
                          <input
                            id="signup-password"
                            type="password"
                            name="signupPassword"
                            className="input"
                            data-type="password"
                            placeholder="Create your password"
                            value={AdminsignupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                          />
                        </div>
                        <div className="group">
                          <label
                            htmlFor="signup-repeat-password"
                            className="label"
                          >
                            Repeat Password
                          </label>
                          <input
                            id="signup-repeat-password"
                            type="password"
                            name="signupRepeatPassword"
                            className="input"
                            data-type="password"
                            placeholder="Repeat your password"
                            value={AdminsignupRepeatPassword}
                            onChange={(e) =>
                              setSignupRepeatPassword(e.target.value)
                            }
                          />
                        </div>
                        <div className="group">
                          <label htmlFor="signup-email" className="label">
                            Email Address
                          </label>
                          <input
                            id="signup-email"
                            type="text"
                            name="signupEmail"
                            className="input"
                            placeholder="Enter your email address"
                            value={AdminsignupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                          />
                        </div>
                        <div className="group">
                          <button type="submit" className="button">
                            Sign Up
                          </button>
                        </div>
                        {signupError && (
                          <div className="error">{signupError}</div>
                        )}
                      </form>
                      <div className="hr"></div>
                      <div className="foot">
                        <label htmlFor="tab-1">Already Member?</label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupPage;
