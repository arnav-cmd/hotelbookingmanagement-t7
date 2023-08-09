import "./App.css";
import Home from "./component/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Userhome from "./component/userhome";
import Aboutus from "./component/aboutus";
import Booking from "./component/booking";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userhome" element={<Userhome/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/booking" element={<Booking/>}/>
          {/*
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/contactus" element={<Contactus/>}/>
          <Route path="/help" element={<Help/>}/>
          */}

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
