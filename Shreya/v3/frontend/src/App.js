import "./App.css";
import Home from "./component/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Userhome from "./component/userhome";
import Aboutus from "./component/aboutus";
import Booking from "./component/booking";
import Adminlogin from "./component/adminlogin";
import Adminhome from "./component/adminhome";
import SignupPage from "./component/signup";
import LoginPage from "./component/login";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userhome" element={<Userhome/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/adminlogin" element={<Adminlogin />} />
          <Route path="/adminhome" element={<Adminhome/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          {/*
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/help" element={<Help/>}/>
          */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
