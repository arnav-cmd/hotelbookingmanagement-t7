import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { FaUser, FaEnvelope, FaCalendarAlt, FaMobile } from 'react-icons/fa';

const ProfilePage = () => {
  const history = useHistory();
  const location = useLocation();
  const userEmail = location.state?.userEmail;
  const userMobile = location.state?.userMobile

  // Extract the username from the email (assuming email is in the format "username@example.com")
  const usernameFromEmail = userEmail ? userEmail.split('@')[0] : '';

  // Dummy user details and bookings data
  const userDetails = {
    name: usernameFromEmail || 'Guest', // Use 'Guest' if username is not available
    email: userEmail || 'john@example.com',
    mobile: userMobile ||123445
  };

  const bookings = [
    { id: 1, date: '2023-08-01', destination: 'Chennai' },
    { id: 2, date: '2023-08-05', destination: 'Goa' },
    // Add more bookings here
  ];

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card">
        <div className="card-body text-center">
          <h4 className="card-title">Profile</h4>
          <FaUser size={80} />
          <p className="mt-3">{userDetails.name}</p>
          <p>
            <FaEnvelope className="mr-2" />
            {userDetails.email}
          </p>
          <p>
            <FaMobile className="mr-2" />
            {userDetails.mobile}
          </p>
          <button className="btn btn-primary mb-3" onClick={() => history.push('/signup')}>
            Edit Profile
          </button>
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">My Bookings</h4>
              <ul className="list-group">
                {bookings.map((booking) => (
                  <li key={booking.id} className="list-group-item d-flex justify-content-between align-items-center">
                    <span>
                      <FaCalendarAlt className="mr-2" />
                      {booking.date} - {booking.destination}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button className="btn btn-primary mt-3" onClick={() => history.push('/login')}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
