// const nodemailer = require('nodemailer');

// const sendConfirmationEmail = async (toEmail, bookingDetails) => {
//   const transporter = nodemailer.createTransport({
//     service: 'Gmail', // You can use other services or provide SMTP details
//     auth: {
//       user: 'your-email@gmail.',
//       pass: 'your-email-password',
//     },
//   });

//   const mailOptions = {
//     from: 'your-email@gmail.com',
//     to: toEmail,
//     subject: 'Booking Confirmation',
//     html:
//      <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto' }}>
//     <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
//       <img
//         src={travelyflogo}
//         alt="Hotel Logo"
//         style={{ width: '150px', display: 'block', margin: '0 auto' }}
//       />
//     </div>
//     <div style={{ backgroundColor: '#ffffff', padding: '20px', borderTop: '5px solid #FF9F00' }}>
//       <h2 style={{ color: '#333333' }}>Booking Confirmation</h2>
//       {bookingData && (
//         <p style={{ color: '#666666' }}>
//           Dear {sessionStorage.getItem('name')},
//           <br />
//           "Your exploration with TravelLyf has warmed our hearts. Thank you for choosing us to be part of your journey, and we look forward to continuing to inspire your travels with unforgettable experiences and exceptional service. Here's to many more adventures together! 🌍✨"
//         </p>
//       )}
//       <table style={{ width: '100%', marginBottom: '20px' }}>
//         <tbody>
//           <tr>
//             <td style={{ width: '50%', verticalAlign: 'top' }}>
//               <h3 style={{ color: '#333333' }}>Booking Details</h3>
//               {bookingData && (
//                 <div style={{ color: '#666666' }}>
//                   <p><strong>Booking Reference:</strong> {bookingData.bookingReference}</p>
//                   <p><strong>Check-in:</strong> {bookingData.checkInDate}</p>
//                   <p><strong>Check-out:</strong> {bookingData.checkOutDate}</p>
//                   <p><strong>Guests:</strong> {bookingData.numGuests} Adults</p>
//                   <p><strong>Amount Paid:</strong> {bookingData.amountpaid}</p>
//                 </div>
//               )}
//             </td>
//             <td style={{ width: '50%', verticalAlign: 'top' }}>
//               <h3 style={{ color: '#333333' }}>Contact Information</h3>
//               {bookingData && (
//                 <div style={{ color: '#666666' }}>
//                   <p><strong>Name:{sessionStorage.getItem('name')}</strong> </p>
//                   <p><strong>Email:{sessionStorage.getItem('email')}</strong></p>
//                   <p><strong>Phone:{sessionStorage.getItem('mobile')}</strong> </p>
//                 </div>
//               )}
//             </td>
//           </tr>
//         </tbody>
//       </table>
//       <hr style={{ border: '1px solid #ccc', margin: '20px 0' }} />
//       <p style={{ color: '#666666' }}>
//         If you have any questions or need to make changes to your booking, please contact our customer service.
//       </p>
//       <p style={{ color: '#666666' }}>We look forward to serve you even more!</p>
//     </div>
//     <div style={{ backgroundColor: '#f5f5f5', padding: '20px' }}>
//       <p style={{ color: '#666666', textAlign: 'center' }}>
//         © 2023 Travelyf. All rights reserved.
//       </p>
//     </div>
//   </div>
  
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// };

// export default sendConfirmationEmail
// // module.exports = {
// //   sendConfirmationEmail,
// // };