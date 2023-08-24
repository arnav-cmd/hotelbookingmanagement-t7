import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaMobile } from "react-icons/fa";
import "./MyProfilePage.css"; // Import your CSS file for styling

const MyProfilePage = () => {
  const [userDetails, setUserDetails] = useState({});

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (token) {
      // Decode the token to get the user ID
      const decodedToken = decodeToken(token);

      if (decodedToken) {
        const userId = decodedToken.userId;

        // Fetch user details using the user ID
        axios
          .get(`http://localhost:4000/users/MyProfilePage`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => {
            setUserDetails(response.data);
          })
          .catch((error) => {
            console.error("Error fetching user profile:", error);
          });
      }
    }
  }, [token]);

  // Decode a JWT token and return the payload
  const decodeToken = (token) => {
    try {
      const payloadBase64 = token.split(".")[1];
      const payload = JSON.parse(atob(payloadBase64));
      return payload;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  };

  return (
    <div className="MyProfilePage">
      <h2 className="profile-title">My Profile</h2>

      <div className="profile-details">
        {userDetails.Username ? (
          <>
            <p>
              <FaUser className="icon" />
              Username: {userDetails.Username}
            </p>
            <p>
              <FaEnvelope className="icon" />
              Email: {userDetails.email}
            </p>
            <p>
              <FaMobile className="icon" />
              Mobile: {userDetails.mobile}
            </p>
          </>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
    </div>
  );
};

export default MyProfilePage;
