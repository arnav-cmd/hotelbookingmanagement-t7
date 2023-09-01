import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './bookinghistory.css';
import AdminNavbar from './adminnavbar';

const EventCard = ({  Hotelname, City, Bookedby,Image }) => (
  
  <div className="card-media">
    <div className="card-media-object-container">
    <img src={Image}></img>
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

const AdminBookingList = () => {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    // Fetch booking data from the backend API
    axios.get('http://localhost:4000/userbookings/bookings') // Replace with your actual API endpoint
      .then(response => {
        setBookingData(response.data);
      })
      .catch(error => {
        console.log('Error fetching booking data:', error);
      });
  }, []);
  
  return (
   <>
   <AdminNavbar/>
    <div className="container-bookinghistory">
      {bookingData.map((booking, index) => (
        <EventCard
          key={index}
          Hotelname={booking.Hotelname}
          City={booking.City}
          Bookedby={booking.Bookedby}
          Image={booking.Image}
        />
      ))}
    </div>
    </>
  );
};

export default AdminBookingList;
