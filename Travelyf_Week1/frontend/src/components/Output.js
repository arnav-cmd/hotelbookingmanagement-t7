// Output.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const Output = () => {
  const location = useLocation();
  const matchedRoutes = location.state?.matchedRoutes || [];

  return (
    <div>
      <h2>Available Hotels</h2>
      {matchedRoutes.length > 0 ? (
        <ul>
          {matchedRoutes.map((hotel, index) => (
            <li key={index}>
              <p>Hotel Name: {hotel.HotelName}</p>
              <p>City: {hotel.City}</p>
              <p>Area: {hotel.Area}</p>
              <p>Rating: {hotel.Rating}</p>
              <p>Rooms: {hotel.Rooms}</p>
              <p>Cost: {hotel.Cost}</p>
              <button className="btn btn-danger">Book</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching hotels found.</p>
      )}
    </div>
  );
};

export default Output;
