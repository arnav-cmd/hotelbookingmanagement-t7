import React, { useState, useEffect } from 'react';
import UserNavbar from './usernavbar';
import travelyflogo from './images/travelyf.png';
import { sendConfirmationEmail } from './emailsender';
import { useSelector } from 'react-redux';

const BookingConfirmation = () => {
  const dates=useSelector((state)=>state.book.date)
  const hotels=useSelector((state)=>state.book.hotel)
  const guest=useSelector((state)=>state.book.guest)
  const handleBookingConfirmation = async () => {
    const bookingDetails = {
      userName: sessionStorage.getItem('name'),
      bookingInfo: 'Details of the booking',
    };
    try {
      await sendConfirmationEmail('recipient@example.com', bookingDetails);
      console.log('Booking confirmation email sent successfully');
    } catch (error) {
      console.error('Error sending booking confirmation email:', error);
    }
  };




  return (
    <>
    <UserNavbar/>
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <img
          src={travelyflogo}
          alt="Hotel Logo"
          style={{ width: '150px', display: 'block', margin: '0 auto' }}
        />
      </div>
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderTop: '5px solid #FF9F00' }}>
        <h2 style={{ color: '#333333' }}>Booking Confirmation</h2>
        {
          <p style={{ color: '#666666' }}>
            Dear {sessionStorage.getItem('name')},
            <br />
            "Your exploration with TravelLyf has warmed our hearts. Thank you for choosing us to be part of your journey, and we look forward to continuing to inspire your travels with unforgettable experiences and exceptional service. Here's to many more adventures together! 🌍✨"
          </p>
        }
        <table style={{ width: '100%', marginBottom: '20px' }}>
          <tbody>
            <tr>
              <td style={{ width: '50%', verticalAlign: 'top' }}>
                <h3 style={{ color: '#333333' }}>Booking Details</h3>
                {
                  <div style={{ color: '#666666' }}>
                    <p><strong>Booking Reference:</strong></p>
                    <p><strong>Check-in:</strong> {dates.checkin}</p>
                    <p><strong>Check-out:</strong> {dates.checkout}</p>
                    <p><strong>HotelName:</strong> {hotels.hotelname}</p>
                    <p><strong>Guests:</strong> {guest.guests} </p>
                    <p><strong>Area:</strong> {hotels.area}</p>

                  </div>
                }
              </td>
              <td style={{ width: '50%', verticalAlign: 'top' }}>
                <h3 style={{ color: '#333333' }}>Contact Information</h3>
                {
                  <div style={{ color: '#666666' }}>
                    <p><strong>Name:{sessionStorage.getItem('name')}</strong> </p>
                    <p><strong>Email:{sessionStorage.getItem('email')}</strong></p>
                    <p><strong>Phone:{sessionStorage.getItem('mobile')}</strong> </p>
                    <p><strong>Rooms Booked:</strong> {guest.roomcount}</p>
                    <p><strong>Amount Paid:</strong> </p>
                  </div>
                }
              </td>
            </tr>
          </tbody>
        </table>
        <button onClick={handleBookingConfirmation}>Send Confirmation Email</button>
        <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} />
        <p style={{ color: '#666666' }}>
          If you have any questions or need to make changes to your booking, please contact our customer service.
        </p>
        <p style={{ color: '#666666' }}>We look forward to serve you even more!</p>
      </div>
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <p style={{ color: '#666666', textAlign: 'center' }}>
          © 2023 Travelyf. All rights reserved.
        </p>
      </div>
    </div>
    </>
  );
};


export default BookingConfirmation;
