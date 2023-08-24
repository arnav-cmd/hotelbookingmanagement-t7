import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaMobile } from "react-icons/fa"; // Import FontAwesome icons



const MyProfilePage = () => {
  const [userDetails, setUserDetails] = useState({});
  const token = sessionStorage.getItem("token"); // Make sure the token is stored after login/signup

  useEffect(() => {
    if (token) {
      axios
        .get("http://localhost:4000/users/MyProfilePage", {
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
  }, [token]);

  return (
    <div className="MyProfilePage">
      <h2 className="profile-title">My Profile</h2>
      {userDetails.Username ? (
        <div className="profile-details">
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
        </div>
      ) : (
        <p>Loading profile...</p>
      )}
    </div>
  );
};

export default MyProfilePage;
