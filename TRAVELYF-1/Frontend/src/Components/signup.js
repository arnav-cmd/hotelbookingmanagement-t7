import React, { useState } from "react";
import axios from "axios";
import { Link, NavLink, useNavigate } from "react-router-dom";
// Then you can use the useNavigate hook in your component
import "../App.css";
import Navbar from "./navbar";
import "./signup.css";

const SignupPage = () => {
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupRepeatPassword, setSignupRepeatPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupMobile, setSignupMobile] = useState("");
  const [signupAnswer, setSignupAnswer] = useState(""); // New field

  const [signupError, setSignupError] = useState("");
  const navigate = useNavigate();
  const mobileRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //   const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (
      !signupUsername ||
      !signupPassword ||
      !signupRepeatPassword ||
      !signupEmail ||
      !signupMobile ||
      !signupAnswer
    ) {
      setSignupError("Please fill in all fields for signup.");
    } else if (signupPassword !== signupRepeatPassword) {
      setSignupError("Passwords do not match.");
    } else if (!mobileRegex.test(signupMobile)) {
      setSignupError("Invalid mobile number.");
    } else if (!emailRegex.test(signupEmail)) {
      setSignupError("Invalid email address.");
    } else {
      setSignupError("");
      console.log("Signup submitted.");
      console.log("Username:", signupUsername);
      console.log("Password:", signupPassword);
      console.log("Email:", signupEmail);
      console.log("Mobile:", signupMobile);
      console.log("Answer:", signupAnswer);

      // Send the signup data to the backend
      axios
        .post("http://localhost:4000/users/signup", {
          Username: signupUsername,
          email: signupEmail,
          password: signupPassword,
          mobile: signupMobile,
          answer: signupAnswer,
        })
        .then((response) => {
          console.log(response.data);
          setSignupError("successfully signedup u can login now");
          alert("successfully signedup u can login now");
          navigate("/login");
        })
        .catch((error) => {
          console.error("Error during signup:", error);
          setSignupError("User already exists");
        });
    }
  };

  return (
    <div className="SignupPage">
      <Navbar />
      <div className="homediv">
        <div>
          <h3 className="custom2">Sign Up To TravLyf</h3>
          <div className="custom1">
            <div className="row">
              <div className="col-10">
                <div className="login-box2">
                  <div className="login-snip">
                    <div className="login-space">
                      <div className="sign-up-form">
                        <form
                          onSubmit={handleSignupSubmit}
                          className="transparent-form1"
                        >
                          <div className="group">
                            <h4>Fill your details</h4>
                            <input
                              id="signup-username"
                              type="text"
                              name="signupUsername"
                              className="input"
                              placeholder="Enter your FullName"
                              value={signupUsername}
                              onChange={(e) =>
                                setSignupUsername(e.target.value)
                              }
                            />
                          </div>
                          <div className="group">
                            <input
                              id="signup-email"
                              type="text"
                              name="signupEmail"
                              className="input"
                              placeholder="Enter your email address"
                              value={signupEmail}
                              onChange={(e) => setSignupEmail(e.target.value)}
                            />
                          </div>
                          <div className="group">
                            <input
                              id="signup-mobile"
                              type="tel"
                              name="signupMobile"
                              className="input"
                              placeholder="Enter your mobile number"
                              value={signupMobile}
                              onChange={(e) => setSignupMobile(e.target.value)}
                            />
                          </div>
                          <div className="group">
                            <input
                              id="signup-password"
                              type="password"
                              name="signupPassword"
                              className="input"
                              data-type="password"
                              placeholder="Create your password"
                              value={signupPassword}
                              onChange={(e) =>
                                setSignupPassword(e.target.value)
                              }
                            />
                          </div>
                          
                          <div className="group">
                            <input
                              id="signup-repeat-password"
                              type="password"
                              name="signupRepeatPassword"
                              className="input"
                              data-type="password"
                              placeholder="Confirm password"
                              value={signupRepeatPassword}
                              onChange={(e) =>
                                setSignupRepeatPassword(e.target.value)
                              }
                            />
                          </div>
                          <p>
                            We need the below details in case you forget the
                            password
                          </p>

                          <div className="group">
                            <input
                              id="signup-answer"
                              type="text"
                              name="signupAnswer"
                              className="input"
                              placeholder="what is your favourite pet ?"
                              value={signupAnswer}
                              onChange={(e) => setSignupAnswer(e.target.value)}
                            />
                          </div>

                          <div className="group">
                            <button
                              type="submit"
                              className="btn btn-primary mb-3"
                            >
                              Sign Up
                            </button>
                          </div>
                          {signupError && (
                            <div className="error">{signupError}</div>
                          )}
                          <div className="foot">
                            <label htmlFor="tab-1">
                              Already Member?
                              <a href="/login">Click here to login</a>
                            </label>
                          </div>
                        </form>
                        <div className="hr"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
