import React,{Component} from "react";
import { Link } from "react-router-dom";
import Navbar from "./nav";

export default class  Booking extends React.Component{
    render(){
        return(
            <div>
                <Navbar/>
                <div className="bookingdiv">
                <form className="bookingbg">
                    <input type='text' placeholder="City"></input>
                    <input type='date' placeholder="Check-in Date"></input>
                    <input type='date' placeholder="Check-out Date"></input>
                    <input type='number' placeholder="Guests"></input>
                    <button>Search</button>
                </form>
            </div>
            </div>
            
        );
    }
}