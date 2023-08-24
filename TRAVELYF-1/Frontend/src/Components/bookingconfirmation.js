import React, { useState, useEffect } from 'react';

const HotelBookingConfirmation = () => {
  const [bookingData, setBookingData] = useState({});
  
  useEffect(() => {
    fetch('your-api-endpoint-here')
      .then(response => response.json())
      .then(data => setBookingData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
        <img
          src="file:///c%3A/Users/arnav.sharma/Desktop/my-react-project/frontend/src/Components/images/travelyf.png"
          alt="Hotel Logo"
          style={{ width: '150px', display: 'block', margin: '0 auto' }}
        />
      </div>
      <div style={{ backgroundColor: '#ffffff', padding: '20px', borderTop: '5px solid #FF9F00' }}>
        <h2 style={{ color: '#333333' }}>Booking Confirmation</h2>
        {bookingData && (
          <p style={{ color: '#666666' }}>
            Dear {bookingData.guestName},
            <br />
            "Your exploration with TravelLyf has warmed our hearts. Thank you for choosing us to be part of your journey, and we look forward to continuing to inspire your travels with unforgettable experiences and exceptional service. Here's to many more adventures together! 🌍✨"
          </p>
        )}
        <table style={{ width: '100%', marginBottom: '20px' }}>
          <tbody>
            <tr>
              <td style={{ width: '50%', verticalAlign: 'top' }}>
                <h3 style={{ color: '#333333' }}>Booking Details</h3>
                {bookingData && (
                  <div style={{ color: '#666666' }}>
                    <p><strong>Booking Reference:</strong> {bookingData.bookingReference}</p>
                    <p><strong>Check-in:</strong> {bookingData.checkInDate}</p>
                    <p><strong>Check-out:</strong> {bookingData.checkOutDate}</p>
                    <p><strong>Guests:</strong> {bookingData.numGuests} Adults</p>
                    <p><strong>Amount Paid:</strong> {bookingData.amountpaid}</p>
                  </div>
                )}
              </td>
              <td style={{ width: '50%', verticalAlign: 'top' }}>
                <h3 style={{ color: '#333333' }}>Contact Information</h3>
                {bookingData && (
                  <div style={{ color: '#666666' }}>
                    <p><strong>Name:</strong> {bookingData.contactName}</p>
                    <p><strong>Email:</strong> {bookingData.contactEmail}</p>
                    <p><strong>Phone:</strong> {bookingData.contactPhone}</p>
                  </div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
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
  );
};

export default HotelBookingConfirmation;
