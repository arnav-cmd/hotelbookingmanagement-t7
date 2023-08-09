import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import { FaGoogle } from 'react-icons/fa';

const handleGoogleLogin = () => {
    // Implement your Google login logic here
    // This function should redirect the user to the Google OAuth2 authentication page
  };
  


const LoginPage = () => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const history = useHistory();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginUsername || !loginPassword) {
      setLoginError('Please fill in all fields for login.');
    } else {
      setLoginError('');
      console.log('Login submitted.');
      console.log('Username:', loginUsername);
      console.log('Password:', loginPassword);


      // Send the login data to the backend
      axios
        .post('http://localhost:8000/login', {
          email: loginUsername,
          password: loginPassword,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data === 'success') {
            // User login successful, redirect to profile page and pass user's email as a prop
            history.push('/profile', { userEmail: loginUsername, });
          } else {
            // User login failed, show an error message
            setLoginError('Invalid credentials. Please try again.');
          }
        })
        .catch((error) => {
          console.error('Error during login:', error);
          setLoginError('Failed to login. Please try again later.');
        });
    }
  };
  return (
    <>
    
      <h1 className='custom'>Login To Access EasyBooking</h1>
      <div className='custom'>
        <div className="row">
          <div className="col-md-6 mx-auto p-0">
            <div className="card">
              <div className="login-box">
                <div className="login-snip">
                  <Link to="/login" className={`tab active`}>
                    <h3>Login</h3>
                  </Link>
                  <Link to="/signup" className={`tab`}>
                    <h3>Sign Up</h3>
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
                          <input id="check" type="checkbox" className="check" defaultChecked />
                          <label htmlFor="check">
                            <span className="icon"></span> Keep me Signed in
                          </label>
                        </div>
                        <div className="group">
                        <div className="group">
                            <button type="submit" className="btn btn-primary mb-3">
                                Log In
                            </button><br/>
                           

                        </div>
                        <div className="mt-1">
                            <Link to="/signup">Forgot Password?</Link>
                        </div>

                        </div>
                        {loginError && <div className="error">{loginError}</div>}
                      </form>
                      <div className="group">
                        <button type="button" className="button" onClick={handleGoogleLogin}>
                        <FaGoogle className="google-icon" />
                        Login through Google
                        </button>
                        </div>
                      <div className="hr"></div>
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

  // Rest of your JSX code remains the same...
};

export default LoginPage;