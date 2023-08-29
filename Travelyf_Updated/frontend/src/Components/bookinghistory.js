import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './bookinghistory.css';
import UserNavbar from './usernavbar';

const EventCard = ({  Hotelname, City, Bookedby }) => (
  
  <div className="card-media" >
    <div className="card-media-object-container">
      
      {/* <span className="card-media-object-tag subtle">{Hotelname}</span> */}
    </div>
    <div className="card-media-body">
      <div className="card-media-body-top">
        <span className="subtle"></span>
        <div className="card-media-body-top-icons u-float-right">
          {/* ... (SVG elements) ... */}
        </div>
      </div>
      <span className="card-media-body-heading">{Hotelname}</span>
      <div className="card-media-body-supporting-bottom">
        <span className="card-media-body-supporting-bottom-text subtle">City: {City}</span>
        <span className="card-media-body-supporting-bottom-text subtle u-float-right">Booked By: {Bookedby}</span>
      </div>
      <div className="card-media-body-supporting-bottom card-media-body-supporting-bottom-reveal">
      <button className="btn btn-primary">View Booking</button>
      </div>
    </div>
  </div>
);

const EventCardList = () => {
  const [bookingData, setBookingData] = useState([]);
  const [filteredBookingData, setFilteredBookingData] = useState([]);
  useEffect(() => {
    // Fetch booking data from the backend API
    axios.get('http://localhost:4000/userbookings/bookings') // Replace with your actual API endpoint
      .then(response => {
        const responsedata=response.data
        const name=sessionStorage.getItem('name');
        console.log(name);
        console.log(responsedata);
        const filteredData = responsedata.filter(booking => booking.Bookedby === name);
        setFilteredBookingData(filteredData);
      })
      .catch(error => {
        console.log('Error fetching booking data:', error);
      });
  }, []);
  
  return (
   <>
   <UserNavbar/>
    <div className="container-bookinghistory">
      {filteredBookingData.map((booking, index) => (
        <EventCard
          key={index}
          Hotelname={booking.Hotelname}
          City={booking.City}
          Bookedby={booking.Bookedby}
        />
      ))}
    </div>
    </>
  );
};

export default EventCardList;
