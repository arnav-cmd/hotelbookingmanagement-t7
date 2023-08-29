import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { differenceInDays } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";
import "./bookingform.css";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import UserNavbar from "./usernavbar";

function UserBooking(props) {
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  const [roomNumber, setRoomNumber] = useState(1);
  const [roomtype,setroomType]=useState("");
  const currentDate = new Date();
  const navigate=useNavigate();
  const dates=useSelector((state)=>state.book.date)
  const hotels=useSelector((state)=>state.book.hotel)

  const location = useLocation();

  const handleCheckOutChange = (date) => {
    setCheckOutDate(date);

    if (checkInDate) {
      const daysDifference = differenceInDays(date, checkInDate);
      console.log("Difference in days:", daysDifference);
    }
  };

  const handleCheckInChange = (date) => {
    setCheckInDate(date);
    setCheckOutDate(null);
  };

  const pay = hotels.cost;
  console.log(pay);

  // Calculate days difference
  let daysDifference = 0;
  if (checkInDate && checkOutDate) {
    daysDifference = differenceInDays(checkOutDate, checkInDate);
  }

  // Calculate total payment
  let totalpay = 0;
  if (location.state && location.state.Cost) {
    totalpay = pay * roomNumber * daysDifference;
    console.log(totalpay);
  }
  const handleBookSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:4000/userbookings/newbooking",{
        
        Hotelname: hotels.hotelname,
        City: hotels.city,
        rooms: roomNumber,
        Checkindate: dates.checkin,
        Checkoutdate: dates.checkout,
        Bookedby: sessionStorage.getItem('name'),
        Mobile:sessionStorage.getItem('mobile'),
        RoomType: roomtype
    })
    .then((response)=>{
        console.log(response.data);
        alert("Booking Successful");
        navigate('/payment');
    })
    .catch((error)=>{
        console.error("error booking");
    })
    
  }
  return (
 
    <div className="homediv">
      <div className="booking">
        <div className="booking-form">
          <form className="" onSubmit={handleBookSubmit}>
            <h2>BOOK YOUR ROOM</h2>
            <h6>City: {hotels.city}</h6>
            <h6>Hotel Name:{hotels.hotelname} </h6>
            <div className="datepicker">
              <div className="check-in">
                <label htmlFor="check-in">Check-In</label>
                <DatePicker
                  className="form-control datepicker1"
                  selected={checkInDate}
                  placeholderText="DD/MM/YYYY" // Update the placeholder format
                  minDate={currentDate}
                  value={dates.checkin}
                  dateFormat="dd/MM/yyyy" // Set the desired Indian date format
                  onChange={(date) => setCheckInDate(date)}
                  required/>
              </div>
              <div className="check-out">
                <label htmlFor="check-out">Check-Out</label>
                <DatePicker
                  className="form-control datepicker2"
                  selected={checkOutDate}
                  value={dates.checkout}
                  placeholderText="DD/MM/YYYY" // Update the placeholder format
                  minDate={checkInDate}
                  dateFormat="dd/MM/yyyy" // Set the desired Indian date format
                  required
                  onChange={(date) => setCheckOutDate(date)}
                />
              </div>
            </div>
            <div className=" room-adult">
              <div className=" room1">
                <label htmlFor="room1">Room:</label>
                <input
                  type="number"
                  min="0"
                  max="10"
                  id="room1"
                  className="form-control"
                  placeholder="rooms"
                  value={roomNumber}
                  onChange={(e) => setRoomNumber(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="roomType" class="form-label">
                  Room Type
                </label>
                <select
                  class="form-select"
                  id="roomType"
                  name="roomType"
                  required
                  defaultValue=""
                  onChange={(e)=>setroomType(e.target.value)}
                >
                  <option value="" disabled>
                    Select a Room Type
                  </option>
                  <option value="Single Bed A/C">Single Bed A/C</option>
                  <option value="Double Bed A/C">Double Bed A/C</option>
                </select>
              </div>
              <div className="">
                <label htmlFor="adult">Persons:</label>
                <input
                  type="number"
                  min="0"
                  max="20"
                  id="adult"
                  className="form-control user-name"
                  placeholder="Persons"
                  required
                />
              </div>
            </div>
            <div className="">
              <input
                type="text"
                id="name"
                value={sessionStorage.getItem('name')}
                className="form-control user-name"
                placeholder="Name*"
                required
              />
              <input
                type="number"
                id="MobileNo"
                min="6666666666"
                max="9999999999"
                value={sessionStorage.getItem('mobile')}
                className="form-control"
                placeholder="Mobile_No*"
                required
              />
            </div>
            <br />
              <button className="btn btn-primary text submit">
                pay {totalpay}
              </button>
          </form>
        </div>
      </div>
    </div>
    
  
  );
}

export default UserBooking;
