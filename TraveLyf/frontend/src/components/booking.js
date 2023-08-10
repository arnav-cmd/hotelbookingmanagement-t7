import React,{useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import Navbar from "./nav";
import ImgMediaCard from "./bookinglist";

export default function Booking(){
    const[searchCity,setsearchCity]=useState('');
    const navigate=useNavigate();
    const handlebookingsearch=(e)=>{
        setsearchCity(e.target.value);
        navigate('/hotellist');
    }
        return(
            <div>
                <Navbar/>
                <div className="bookingdiv">
                <form className="bookingbg" onSubmit={handlebookingsearch}>
                    <input type='text' placeholder="City" value={searchCity} ></input>
                    <input type='date' placeholder="Check-in Date"></input>
                    <input type='date' placeholder="Check-out Date"></input>
                    <input type='number' placeholder="Guests"></input>
                    <button>Search</button>
                </form>
            </div>
            </div>
            
        );
    }