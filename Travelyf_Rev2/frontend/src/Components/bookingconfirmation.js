import React, { useState, useEffect } from 'react';
import UserNavbar from './usernavbar';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';

const BookingConfirmation = () => {
  const dates=useSelector((state)=>state.book.date)
  const hotels=useSelector((state)=>state.book.hotel)
  const guest=useSelector((state)=>state.book.guest)
  const recipientEmail=sessionStorage.getItem('email');
  const handleEmailSend = () => {
    if (recipientEmail) {
      const emailContent = document.documentElement.outerHTML;
      const emailBody = document.querySelector('.email-content'); // Get the entire HTML content
      const emailData = {
        recipient: recipientEmail,
        subject: 'Booking Confirmation from TraveLyf',
        content: emailBody.outerHTML
      };

      axios.post('http://localhost:4000/send-email', emailData) // Replace with your API endpoint
        .then(response => {
          // console.log('Email sent successfully:', response.data);
          toast.success('Email Sent Successfully',{
            position:toast.POSITION.BOTTOM_RIGHT,
            autoClose:2000
          })
          // You can show a success message to the user here
        })
        .catch(error => {
          console.error('Error sending email:', error);
          // Handle error and show an error message to the user
        });
    }
  };



  return (
    <>
    <UserNavbar/>
    <div className='email-content'>
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <img
          src="https://drive.google.com/uc?id=1JeCRKcTqrYURnrzC2UF59PR34cbQ4gg-"
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
                    {/* <p><strong>Booking Reference:</strong>{guest.bid}</p> */}
                    <p><strong>Check-in:</strong> {dates.checkin}</p>
                    <p><strong>Check-out:</strong> {dates.checkout}</p>
                    <p><strong>HotelName:</strong> {hotels.hotelname}</p>
                    <p><strong>Rooms Booked:</strong> {guest.roomcount}</p>
                    <p><strong>Guests:</strong> {guest.Guests} </p>
                    <p><strong>Children:</strong> {guest.children} </p>
                    <p><strong>City:</strong> {hotels.city}</p>
                    <p><strong>Area:</strong> {hotels.area}</p>
                    <p><strong>Amount Paid:₹</strong> {guest.finalpay}</p>
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
                    
                  </div>
                }
              </td>
            </tr>
          </tbody>
        </table>
        <button className="btn btn-primary" onClick={handleEmailSend}>
        Send Email
      </button>
        
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
    </div>
    </>
  );
};


export default BookingConfirmation;
