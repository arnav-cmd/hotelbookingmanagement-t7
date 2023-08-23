import React, { useEffect, useState } from "react";
import axios from "axios";




const MyProfilePage = () => {
  const [userDetails, setUserDetails] = useState({});
  const token = sessionStorage.getItem("token");

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
      <h2>My Profile</h2>      
      <p>Username: {userDetails.Username}</p>
      <p>Email: {userDetails.email}</p>
      <p>Mobile: {userDetails.mobile}</p>            
    </div>
  );
};
export default MyProfilePage;
