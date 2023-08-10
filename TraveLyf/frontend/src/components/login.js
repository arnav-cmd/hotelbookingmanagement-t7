import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

import { FaGoogle } from "react-icons/fa";

const handleGoogleLogin = () => {
  // Implement your Google login logic here
  // This function should redirect the user to the Google OAuth2 authentication page
};

const LoginPage = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const handleLoginSubmit = (e) => {
    e.preventDefault();

    if (!loginUsername || !loginPassword) {
      setLoginError("Please fill in all fields for login.");
    } else {
      setLoginError("");
      console.log("Login submitted.");
      console.log("Username:", loginUsername);
      console.log("Password:", loginPassword);
      axios
        .post("http://localhost:4000/login", {
          email: loginUsername,
          password: loginPassword,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data === "success") {
            console.log("success");
            alert("Logged In Successfully");
            // Redirect to the profile page with user's email as a search parameter
            navigate("/userhome");
          } else {
            // User login failed, show an error message
            setLoginError("Invalid credentials. Please try again.");
            alert("Invalid Credentials.Please try again")
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
          setLoginError("Failed to login. Please try again later.");
        });
    }
  };

  return (
    <div className="LoginPage">
      <h3 className="custom">Login To Access EasyBooking</h3>

      <div className="custom">
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="login-box">
                <div className="login-snip">
                  <Link to="/login" className={`tab active`}>
                    <h5>Login</h5>
                  </Link>

                  <Link to="/signup" className={`tab`}>
                    <h5>Sign Up</h5>
                  </Link>

                  <div className="login-space">
                    <div className="login">
                      <form onSubmit={handleLoginSubmit}>
                        <div className="group">
                          <label htmlFor="login-username" className="label">
                            Username/Email
                          </label>

                          <input
                            id="login-username"
                            type="text"
                            name="loginUsername"
                            className="input"
                            placeholder="Enter your username or email"
                            value={loginUsername}
                            onChange={(e) => setLoginUsername(e.target.value)}
                          />
                        </div>

                        <div className="group">
                          <label htmlFor="login-password" className="label">
                            Password
                          </label>

                          <input
                            id="login-password"
                            type="password"
                            name="loginPassword"
                            className="input"
                            data-type="password"
                            placeholder="Enter your password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                          />
                        </div>


                        <div className="group">
                          <button
                            type="submit"
                            className="btn btn-primary mb-3"
                          >
                            Log In
                          </button>

                          <br />
                        </div>

                        <div className="mt-1">
                          <Link to="/signup">Forgot Password?</Link>
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
  );
};
export default LoginPage;
