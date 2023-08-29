import React, { useEffect, useState } from "react";

import axios from "axios";
import "./MyProfilePage.css";

import { FaUser, FaEnvelope, FaMobile, FaCat, FaDog } from "react-icons/fa";
import UserNavbar from "./usernavbar";
import Img1 from "./images/travelyf.png";
import Vid1 from "./images/TravelVid.mp4";

const MyProfilePage = () => {
  const [userDetails, setUserDetails] = useState({});

  const [editMode, setEditMode] = useState(false);

  const [editedUser, setEditedUser] = useState({});

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if (token) {
      // Decode the token to get the user ID

      const decodedToken = decodeToken(token);

      if (decodedToken) {
        const userId = decodedToken.userId;

        // Fetch user details using the user ID

        axios

          .get(`http://localhost:4000/user/MyProfilePage`, {
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

  const handleEditClick = () => {
    setEditMode(true);

    setEditedUser({
      username: userDetails.Username,

      email: userDetails.email,

      mobile: userDetails.mobile,

      answer: userDetails.answer,
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEditedUser((prevUser) => ({
      ...prevUser,

      [name]: value,
    }));
  };

  const handleSaveClick = () => {
    // Update user details in the backend using an API call

    console.log(editedUser);

    axios

      .put(
        "http://localhost:4000/user/update-profile",

        editedUser,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      .then((response) => {
        console.log("Profile updated successfully:", response.data);

        setUserDetails(response.data); // Update userDetails with new data

        setEditMode(false); // Exit edit mode
      })

      .catch((error) => {
        console.error("Error updating profile:", error);
      });
  };

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
    <>
      <UserNavbar />

      <div className="Profilemargin">
        

        
      
      
      
        {editMode ? (
            <div >
                <h3 className="edit-profile-title">Edit Profile</h3>
                
          <div className="profiledetails">
            <div className="left-card1">
              <img src={Img1} width={360} />
              <p>
                Experience the world with ease and comfort through TraveLyf,
                where every click opens the door to exceptional stays. Discover
                a symphony of destinations and accommodations tailored to your
                desires, ensuring your journey is as remarkable as the
                destination itself.
              </p>
            </div>
            <div className=" right-card">
              
            
            <div className="form-group-card">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                className="input"
                value={editedUser.username}
                onChange={handleInputChange}
              />
              <label>Email:</label>
              <input
                type="text"
                name="email"
                className="input"
                value={editedUser.email}
                onChange={handleInputChange}
              />
              <label>Mobile:</label>
              <input
                type="text"
                name="mobile"
                className="input"
                value={editedUser.mobile}
                onChange={handleInputChange}
              />
              <label>Security Answer:</label>
              <input
                type="password"
                name="answer"
                className="input"
                value={editedUser.answer}
                onChange={handleInputChange}
              />
            </div>
            <div className="save-button">
            <button
              className="btn btn-secondary"
              onClick={() => setEditMode(false)}
            >
              Cancel
            </button>
            <button className="btn btn-primary" onClick={handleSaveClick}>
              Save
            </button>
            </div>
            </div>
          </div>
          </div>
        ) : userDetails.Username ? (
          <div className="body">
            <h3>
              <center>My Profile</center>
            </h3>
            <div className="main">
              <div className="left-card">
                <img src={Img1} width={360} />
                <p>
                  Experience the world with ease and comfort through TravLife,
                  where every click opens the door to exceptional stays.
                  Discover a symphony of destinations and accommodations
                  tailored to your desires, ensuring your journey is as
                  remarkable as the destination itself.
                </p>
              </div>
              <div className="profile-card">
                <div>
                  <div className="profile-details">
                    <p>
                      <FaUser className="icon" />
                      Username: {userDetails.Username}
                    </p>

                    <p>
                      {" "}
                      <FaEnvelope className="icon" />
                      Email: {userDetails.email}
                    </p>
                    <p>
                      <FaMobile className="icon" />
                      Mobile: {userDetails.mobile}
                    </p>
                    {/* 
      <p>
        <FaDog className="icon" />
        Answer: {userDetails.answer}
      </p> */}

                    <center>
                      <button
                        className="btn btn-primary"
                        onClick={handleEditClick}
                      >
                        Edit Profile
                      </button>
                    </center>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading profile...</p>
        )}
      </div>
    </>
  );
};

export default MyProfilePage;
