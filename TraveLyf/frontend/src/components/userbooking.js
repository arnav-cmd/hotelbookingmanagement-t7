import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./bookingpage.css";
function UserBooking() {
  const [checkInDate, setCheckInDate] = useState(null);

  const [checkOutDate, setCheckOutDate] = useState(null);

  return (
    <div className="booking">
      <div className="booking-form">
        <form action="">
          <h2>BOOK YOUR ROOM</h2>

          <div className="datepicker">
            <div className="check-in">
              <label htmlFor="check-in">Check-in</label>
              <DatePicker
                className="datepicker1"
                selected={checkInDate}
                placeholderText="MM/DD/YYYY"
                required
                onChange={(date) => setCheckInDate(date)}
              />
            </div>

            <span className="line-check-in-out"></span>

            <div className="check-out">
              <label htmlFor="check-out">Check-out</label>

              <DatePicker
                className="datepicker2"
                selected={checkOutDate}
                placeholderText="MM/DD/YYYY"
                required
                onChange={(date) => setCheckOutDate(date)}
              />
            </div>
          </div>

          <div className="room-adult-kids">
            <div class="room1">
              <label for="room1">Room: </label>

              <input
                type="number"
                min="0"
                max="10"
                id="room1"
                placeholder="rooms"
                required
              />
            </div>

            <span class="line-room-adult"></span>

            <div class="adult">
              <label for="adult">Adult:</label>

              <input
                type="number"
                min="0"
                max="50"
                id="adult"
                placeholder="adults"
                required
              />
            </div>

            <span class="line-adult-kids"></span>

            <div class="kids">
              <label for="kids">Kids:</label>

              <input
                type="number"
                min="0"
                max="50"
                id="kids"
                placeholder="kids"
                required
              />
            </div>
          </div>
          <div>
            <span class="user-name">
              <input type="text" id="name" placeholder="Name*" required />
            </span>
            <input
              type="number"
              id="MobileNo"
              min={6666666666}
              max={9999999999}
              placeholder="Mobile No*"
              required
            />
          </div>
          <button class="submit">BOOK </button>
        </form>
      </div>
    </div>
  );
}

export default UserBooking  ;
