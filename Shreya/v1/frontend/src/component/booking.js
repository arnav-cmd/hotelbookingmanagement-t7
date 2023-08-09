import React,{Component} from "react";

export default class  Booking extends React.Component{
    render(){
        return(
            <div className="bookingdiv">
                <form className="bookingbg">
                    <input type='text' placeholder="City"></input>
                    <input type='date' placeholder="Check-in Date"></input>
                    <input type='date' placeholder="Check-out Date"></input>
                    <input type='number' placeholder="Guests"></input>
                    <button>Search</button>
                    {/* City: <input type="text" required className="loc"/><br/>
                    Start date: <input type="date" required className="sd"/><br/>
                    End date: <input type="date" required className="ed"/><br/>
                    No. of persons: <input type="Number" required className="noofpersons"/><br/>
                    <button type="submit" className="findbtn">Find</button> */}
                </form>
            </div>
        );
    }
}