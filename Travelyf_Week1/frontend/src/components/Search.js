// Search.js

import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import Output from "./Output";

 const Search=()=> {
  const [city, setCity] = useState("");
  const [checkindate, setCheckindate] = useState("");
  const [checkoutdate, setCheckoutdate] = useState("");
  const [rooms, setRooms] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const minDate = () => {
    const today = new Date().toISOString().split('T')[0];
    return today;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(`http://localhost:4000/Hotels`, {
        params: { city, checkindate, checkoutdate, rooms },
      });

      navigate('/Output', { state: { matchedRoutes: response.data } });
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={`ip ${error ? 'error' : ''}`}
          type="text"
          value={city}
          onChange={e => {
            const inputText = e.target.value;
            if (/^[a-zA-Z]+$/.test(inputText) || inputText === "") {
              setCity(inputText);
              setError(false);
            } else {
              setError(true);
            }
          }}
          placeholder="Enter city"
          required
        />
        <input 
          className="checkindate"
          type="date"
          value={checkindate}
          min={minDate()}
          onChange={e => setCheckindate(e.target.value)}
          required
        />
        <input 
          className="checkoutdate"
          type="date"
          value={checkoutdate}
          min={checkindate}
          onChange={e => setCheckoutdate(e.target.value)}
          required
        />
        <input 
          className="rooms"
          type="number"
          value={rooms}
          onChange={e => setRooms(e.target.value)}
          placeholder="Number of rooms"
          required
        />
        <button type="submit">Search Hotels</button>
      </form>
    </div>
  );
}

export default Search;