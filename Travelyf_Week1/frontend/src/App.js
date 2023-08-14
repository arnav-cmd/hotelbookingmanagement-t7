import "./App.css";
import Home from "./components/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { Component } from "react";
import Aboutus from "./components/aboutus";
import Booking from "./components/booking";
import Adminlogin from "./components/adminlogin";
import Adminhome from "./components/adminhome";
import SignupPage from "./components/signup";
import LoginPage from "./components/login";
import AdminForm from './components/adminform';
import ImgMediaCard from './components/bookinglist';
import UpdateAdminForm from './components/updateadminform';
import UserBooking from "./components/userbooking";
import PaymentForm from "./components/payment";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import UserHome from "./components/userhome";
import RoomSelectionForm from "./components/roomselection";
import AdminHotel from "./components/adminhotels";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userhome" element={<UserHome/>}/>
          <Route path="/aboutus" element={<Aboutus/>}/>
          <Route path="/booking" element={<Booking/>}/>
          <Route path="/adminlogin" element={<Adminlogin/>}/>
          <Route path="/adminhome" element={<Adminhome/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path='/addhotel' element={<AdminForm/>}/>
          <Route path='/hotellist' element={<ImgMediaCard/>}/>
          <Route path="/updatehotel/:id" element={<UpdateAdminForm/>}/>
          <Route path='/userbooking' element={<UserBooking/>}/>
          <Route path='/roombooking' element={<RoomSelectionForm/>}/>
          <Route path='/payment' element={<PaymentForm/>}/>
          <Route path='/adminhotels' element={<AdminHotel/>}/>
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