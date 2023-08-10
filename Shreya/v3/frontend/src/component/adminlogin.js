import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { FaGoogle } from "react-icons/fa";
import './home.js';

export default function Adminlogin() {
  const [AdminloginUsername, setAdminLoginUsername] = useState("");
  const [AdminloginPassword, setAdminLoginPassword] = useState("");
  const [loginError, setAdminLoginError] = useState("");
  const navigate = useNavigate();

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!AdminloginUsername || !AdminloginPassword) {
      setAdminLoginError("Please fill in all fields for login.");
    } else {
      setAdminLoginError("");
      console.log("Login submitted.");
      console.log("Username:", AdminloginUsername);
      console.log("Password:", AdminloginPassword);

      axios
        .post("http://localhost:4000/adminlogin", {
          email: AdminloginUsername,
          password: AdminloginPassword,
        })
        .then((response) => {
          console.log(response.data);
          if (response.data === "success") {
            console.log("success");
            navigate("/adminhome");
          } else {
            setAdminLoginError("Invalid credentials. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error during login:", error);
          setAdminLoginError("Failed to login. Please try again later.");
        });
    }
  };

  return (
    <div className="adminlogindiv">
      <div>
        <form onSubmit={handleLoginSubmit}>
          <div>
            <input
              type="text"
              placeholder="Username"
              required
              className="username"
              value={AdminloginUsername}
              onChange={(e) => setAdminLoginUsername(e.target.value)}
            />
          </div>
          <br />
          <div>
            <input
              type="password" // Change input type to password
              placeholder="Password"
              required
              className="password"
              value={AdminloginPassword}
              onChange={(e) => setAdminLoginPassword(e.target.value)}
            />
          </div>
          <br />
          <button type="submit" >Login</button>
        </form>
      </div>
    </div>
  );
}
