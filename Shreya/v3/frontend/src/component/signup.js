import React, { useState } from "react";
import axios from "axios";
import { Link, NavLink,useNavigate } from "react-router-dom";
// Then you can use the useNavigate hook in your component
import '../App.css'

const SignupPage = () => {
  const [signupUsername, setSignupUsername] = useState("");
  const [signupPassword, setSignupPassword] = useState("");
  const [signupRepeatPassword, setSignupRepeatPassword] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupMobile, setSignupMobile] = useState("");
  const [signupError, setSignupError] = useState("");
  const navigate=useNavigate();
  
  
//   const navigate = useNavigate();

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    if (
      !signupUsername ||
      !signupPassword ||
      !signupRepeatPassword ||
      !signupEmail ||
      !signupMobile
    ) {
      setSignupError("Please fill in all fields for signup.");
    } else if (signupPassword !== signupRepeatPassword) {
      setSignupError("Passwords do not match.");
    } else {
      setSignupError("");
      console.log("Signup submitted.");
      console.log("Username:", signupUsername);
      console.log("Password:", signupPassword);
      console.log("Email:", signupEmail);
      console.log("Mobile:",signupMobile)

      // Send the signup data to the backend
      axios
        .post("http://localhost:4000/users/signup", {
          Username: signupUsername,
          email: signupEmail,
          password: signupPassword,
          mobile: signupMobile
        })
        .then((response) => {
          console.log(response.data);
            setSignupError("successfully signedup u can login now");
            navigate('/login');
        })
        .catch((error) => {
          console.error("Error during signup:", error);
          setSignupError("Failed to signup. Please try again later.");
        });
        
    }

  };

  return (
    <div className='signupdiv'>
      <h1 className="custom">Sign Up To TravLyf</h1>

      <div className="custom">
        <div className="row">
          <div className="col-md-10 mx-auto p-0">
            <div className="card">
              <div className="login-box">
                <div className="login-snip">
                  <NavLink to="/login" className="tab" activeClassName="active">
                    <h3>Login</h3>
                  </NavLink>
                  <NavLink
                    to="/SignupPage"
                    className="tab active"
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
                            value={signupPassword}
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
                            value={signupRepeatPassword}
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
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                          />
                        </div>
                        <div className="group">
                          <label htmlFor="signup-mobile" className="label">
                            Mobile number
                          </label>
                          <input
                            id="signup-mobile"
                            type="number"
                            name="signupMobile"
                            className="input"
                            placeholder="Enter your mobile number"
                            value={signupMobile}
                            onChange={(e) => setSignupMobile(e.target.value)}
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
    </div>
  );
};

export default SignupPage;