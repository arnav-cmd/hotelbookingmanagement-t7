import React from "react";
import LandingPage from './Components/landingpage';
import ContactPage from './Components/contactus';
import FAQSection from './Components/FAQ';
import AboutSection from './Components/aboutsection';
import {Routes,Route,Navigate} from 'react-router-dom';
import LoginPage from "./Components/login";
import UserHome from "./Components/userhome";
import EventCardList from "./Components/bookinghistory";
import SignupPage from "./Components/signup";
import UserNavbar from "./Components/usernavbar";
import MyProfilePage from "./Components/MyProfilePage";
import ForgotPasswordPage from "./Components/ForgotPasswordPage";
import Outputa from "./Components/output";
import UserBooking from "./Components/bookingform";
import PaymentForm from "./Components/payment";
import AdminForm from "./Components/adminform";
import AdminHome from "./Components/adminhome";
import ImgMediaCard from "./Components/adminhotellist";
import AdminBookingList from "./Components/adminbookinghistory";
import CardGrid from "./Components/userquery";
import BookingConfirmation from "./Components/bookingconfirmation";
import UserContactPage from "./Components/usercontactus";
import UserAboutSection from "./Components/useraboutus";

// function PrivateRoute({element:Element,isAuthenticated}){
//     return isAuthenticated?Element:<Navigate to='/login'/>;
// }
// function Login({isAuthenticated,setAuthenticated}){
//     return isAuthenticated ? <Navigate to='/'/>:<LoginPage setAuthenticated={setAuthenticated}/>;
// }

export default function Approutes(){
    return(
        <>
        <Routes>
        <Route path="/" element={<LandingPage/>}/>
        <Route path="/aboutus" element={<AboutSection/>}/>
        <Route path="/contactus" element={<ContactPage/>}/>
        <Route path="/FAQ" element={<FAQSection/>}/>
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/userhome" element={<UserHome/>}/>
        <Route path="/bookingconfirmation" element={<BookingConfirmation/>}/>
        <Route path="/bookinghistory" element={<EventCardList/>}/>
        <Route path="/MyProfilePage" element={<MyProfilePage/>}/>
        <Route path="/ForgotPasswordPage" element={<ForgotPasswordPage/>}/>
        <Route path="/Output" element={<Outputa/>}/>
        <Route path="/bookingform" element={<UserBooking/>}/>   
        <Route path="/payment" element={<PaymentForm/>}/>
        <Route path="/adminform" element={<AdminForm/>}/>
        <Route path="/adminhome" element={<AdminHome/>}/>
        <Route path="/hotellist" element={<ImgMediaCard/>}/>
        <Route path="/adminbookinglist" element={<AdminBookingList/>}/>
        <Route path="/adminuserquery" element={<CardGrid/>}/>
        <Route path="/usercontactus" element={<UserContactPage/>}/>
        <Route path="useraboutus" element={<UserAboutSection/>}/>
        </Routes>
        </>
    )
}