import React from "react";
import LandingPage from './Components/landingpage';
import ContactPage from './Components/contactus';
import FAQSection from './Components/FAQ';
import AboutSection from './Components/aboutsection';
import {Routes,Route,Navigate} from 'react-router-dom';
import LoginPage from "./Components/login";
import UserHome from "./Components/userhome";
import EventCardList from "./Components/bookinghistory";
import HotelBookingConfirmation from "./Components/bookingconfirmation";
import SignupPage from "./Components/signup";
import UserNavbar from "./Components/usernavbar";
import MyProfilePage from "./Components/MyProfilePage";
import ForgotPasswordPage from "./Components/ForgotPasswordPage";

function PrivateRoute({element:Element,isAuthenticated}){
    return isAuthenticated?Element:<Navigate to='/login'/>;
}
function Login({isAuthenticated,setAuthenticated}){
    return isAuthenticated ? <Navigate to='/'/>:<LoginPage setAuthenticated={setAuthenticated}/>;
}

export default function Approutes({isAuthenticated,setAuthenticated}){
    return(
        <>
        <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/aboutus" element={<AboutSection/>}/>
        <Route path="/contactus" element={<ContactPage/>}/>
        <Route path="/FAQ" element={<FAQSection/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="login" element={<Login isAuthenticated={isAuthenticated} setAuthenticated={setAuthenticated}/>}/>
        <Route path="/userhome" element={<PrivateRoute isAuthenticated={isAuthenticated} element={<UserHome/>}/>}/>
        <Route path="/bookingconfirmation" element={<HotelBookingConfirmation/>}/>
        <Route path="/bookinghistory" element={<EventCardList/>}/>
        <Route path="/MyProfilePage" element={<MyProfilePage/>}/>
        <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage/>}/>
        </Routes>
        </>
    )
}