import React,{useState} from "react";
import { Link ,useNavigate} from "react-router-dom";
import ImgMediaCard from "./bookinglist";
import DemoCarousel from "./statusbar";

export default function Booking(){
    const[searchCity,setsearchCity]=useState('');
    const navigate=useNavigate();
    const handlebookingsearch=(e)=>{
        e.preventDefault();
        navigate('/hotellist',{searchCity});
    }
        return(
            <div className="userhomediv">
                <navbar onMouseOver={e => e.target.style.color = 'white'}onMouseOut={e => e.target.style.color = 'white'} className=' user-homenav homenav'>
                    <nav><Link  to='/login'style={{textDecoration: 'none',color:'white'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'black'}>Home</Link></nav>
                    <nav><Link  to='/booking'style={{textDecoration: 'none',color:'white'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'black'}>Book</Link></nav>
                    <nav><Link style={{textDecoration: 'none',color:'white'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'black'}>Booking History</Link></nav>
                    <nav><Link style={{textDecoration: 'none',color:'white'}} onMouseOver={e => e.target.style.color = 'black'}onMouseOut={e => e.target.style.color = 'black'}>Profile</Link></nav>
                </navbar>
                < DemoCarousel/>
                <div className="bookingdiv">
                <form className="bookingbg" onSubmit={handlebookingsearch}>
                    <input type='text' placeholder="City" value={searchCity} onChange={(e)=>setsearchCity(e.target.value)} required></input>
                    Check-in:<input type='date' placeholder="Check-in Date" required></input>
                    Check-out:<input type='date' placeholder="Check-out Date" required></input>
                    <input type='number' placeholder="Guests" required></input>
                    <button>Search</button>
                </form>
            </div>
            </div>
            
        );
    }