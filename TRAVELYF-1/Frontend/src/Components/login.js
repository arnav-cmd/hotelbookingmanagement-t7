import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import axios from "axios";
import './login.css';
import UserNavbar from "./usernavbar";
import Navbar from "./navbar";

const LoginPage = ({setAuthenticated}) => {
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
      axios
        .post("http://localhost:4000/login", {
          email: loginUsername,
          password: loginPassword,
        })
        .then((response) => {
          console.log("res", response);
          if (response.data.token) {
            const token=response.data.token;
            const decodedtoken=jwt_decode(token);
            sessionStorage.setItem('email',response.data.user.email);
            sessionStorage.setItem('isAdmin',decodedtoken.isAdmin);
            if(decodedtoken.isAdmin){
            sessionStorage.setItem('token',response.data.token);
            setAuthenticated(true);
            navigate("/adminhome");
            }
            else{
              sessionStorage.setItem('token',response.data.token);
              setAuthenticated(true);
              navigate("/userhome");
            }
          } else {
            setLoginError("Invalid credentials. Please try again.");
            // alert("Invalid Credentials.Please try again")
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
      <Navbar/>
      <div className='homediv'>
     <div>
    

      <h3 className="custom1">Login To Access TraveLyf</h3>
      <div className="custom1">
        <div className="row">
          <div className="col-8">
              <div className="login-box1">
                  <div className="login-space">
                    <div className="login">
                      <form onSubmit={handleLoginSubmit} className="transparent-form">
                        <div className="group">
                          <label htmlFor="login-username" className="label">
                            Email
                          </label>

                          <input
                            id="login-username"
                            type="text"
                            name="loginUsername"
                            className="input"
                            placeholder="Enter your  email"
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
                          {loginError && (
                          <div className="error">{loginError}</div>
                        )}
                          <br />
                        </div>
                        <div>
                          <div className="mt-1">
                            <Link to='/signup'>Don't Have an Account?</Link>
                          </div>
                        </div>
                        <div className="mt-1">
                          <Link to="/ForgotPasswordPage">Forgot Password?</Link>
                        </div>
                      </form>
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
