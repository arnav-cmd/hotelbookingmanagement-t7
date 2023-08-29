import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Outputa from "./output";
import "./searchbar.css";
import {useDispatch} from "react-redux";
import { dates } from "../store/BookSlice";

export default function Search2() {
  const [city, setCity] = useState("");
  const [checkindate, setCheckindate] = useState("");
  const [checkoutdate, setCheckoutdate] = useState("");
  const [rooms, setRooms] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch=useDispatch();

  const minDate = () => {
    const today = new Date().toISOString().split("T")[0];
    return today;
  };

  const handleCheckoutFocus = () => {
    if (checkindate) {
      const checkinDateObj = new Date(checkindate);
      checkinDateObj.setDate(checkinDateObj.getDate() + 1);
      return checkinDateObj.toISOString().split("T")[0];
    }
    return minDate();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!city || !checkindate || !checkoutdate || !rooms) {
      setError(true);
      return;
    }

    if (new Date(checkoutdate) <= new Date(checkindate)) {
      setError(true);
      return;
    }

    const checkinDateObj = new Date(checkindate);
    const checkoutDateObj = new Date(checkoutdate);

    if (checkoutDateObj <= checkinDateObj) {
      setError(true);
      return;
    }

    try {
      const response = await axios.get(`http://localhost:4000/search`, {
        params: { city, checkindate, checkoutdate, rooms },
      });

      navigate("/output", { state: { matchedRoutes: response.data } });
      dispatch(dates({checkin:checkindate,checkout:checkoutdate}))
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  };

  return (
    <div className="container booking-area">
      <form className="row" onSubmit={handleSubmit}>
        <div className="col-lg mb-3 mb-lg-0">
          <input
            className={`form-control city ${error ? "error" : ""}`}
            type="text"
            value={city}
            onChange={(e) => {
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
            list="citylist"
          />
          <datalist id="citylist">
            <option value="Chennai">Chennai</option>
            <option value="Jaipur">Jaipur</option>
          </datalist>
        </div>

        <div className="col-lg mb-3 mb-lg-0">
          <input
            className="form-control checkindate"
            type="date"
            value={checkindate}
            min={minDate()}
            onChange={(e) => {
              setCheckindate(e.target.value);
              setCheckoutdate(""); // Reset checkout date when check-in date changes
              setError(false); // Reset error
            }}
            required
          />
        </div>

        <div className="col-lg mb-3 mb-lg-0">
          <input
            className="form-control checkoutdate"
            type="date"
            value={checkoutdate}
            min={handleCheckoutFocus()} // Set min attribute dynamically
            onChange={(e) => {
              setCheckoutdate(e.target.value);
              setError(false); // Reset the error when checkout date changes
            }}
            required
          />
        </div>

        <div className="col-lg mb-3 mb-lg-0">
          <input
            className="form-control guests"
            type="text"
            placeholder="Rooms"
            value={rooms}
            onChange={(e) => setRooms(e.target.value)}
            required
          />
        </div>

        <div className="col-lg mb-3 mb-lg-0">
          <button type="submit" className="main-btn rounded-2 px-sm-2">
            Search Hotels
          </button>
        </div>
      </form>
    </div>
  );
}
