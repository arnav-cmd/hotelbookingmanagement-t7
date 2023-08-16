import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../store/authslice";
import axios from "axios";

const LoginPage = () => {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
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
            // Redirect to the profile page with user's email as a search parameter
            navigate("/booking");
            dispatch(loginSuccess({ username: loginUsername }));
          } else {
            // User login failed, show an error message
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
      <div className='homediv'>
     <div>
    <navbar className="homenav">
    <nav><Link  to='/' style={{textDecoration: 'none',color:'white'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>Home</Link></nav>
        <nav><Link  to='/aboutus' style={{textDecoration: 'none',color:'white'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>AboutUs</Link></nav>
        <nav><Link  to='/signup' style={{textDecoration: 'none',color:'white'}}onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>User</Link></nav>
        <nav><Link  to='/adminlogin' style={{textDecoration: 'none',color:'white'}}onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'white'}>admin</Link></nav>
    </navbar>

      <h3 className="custom">Login To Access TraveLyf</h3>

      <div className="custom">
        <div className="row">
          <div className="col-8">
              <div className="login-box1">
                <div className="login-snip">
                  <Link to="/login" className={`tab active`}>
                    <h5>Login</h5>
                  </Link>

                  <Link to="/signup" className={`tab`}>
                    <h5>Sign Up</h5>
                  </Link>

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
    </div>
  );
};
export default LoginPage;
