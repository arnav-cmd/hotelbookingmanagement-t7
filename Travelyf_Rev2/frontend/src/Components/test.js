const express = require("express");

const router = express.Router();

const hotelSchema = require("../models/hotel");

const UserBooking = require("../models/UserBooking");

router.get("/", async (req, res) => {
  try {
    const { city, checkindate, checkoutdate, rooms } = req.query;

    const hotels =  hotelSchema.find({
      City: city,
    });

    const bookings =  UserBooking.find({
      City: city,
    });

    let bookedRoomsCountPerHotel = {};

    bookings.forEach((booking) => {
      if (!bookedRoomsCountPerHotel[booking.Hotelname]) {
        bookedRoomsCountPerHotel[booking.Hotelname] = parseInt(booking.rooms);
      } else {
        bookedRoomsCountPerHotel[booking.Hotelname] += parseInt(booking.rooms);
      }
    });

    let bookedRooms;

    const availableHotels = hotels.filter((hotel) => {
      if (bookedRoomsCountPerHotel[hotel.HotelName] >= 0) {
        bookedRooms = parseInt(bookedRoomsCountPerHotel[hotel.HotelName]);
      } else {
        bookedRooms = 0;
      }

      const totalRooms = parseInt(hotel.Rooms);

      console.log("total rooms:", totalRooms);

      console.log("booked rooms:", bookedRooms);

      console.log("rooms: ", rooms);

      return totalRooms - bookedRooms >= parseInt(rooms);
    });

    if (availableHotels.length > 0) {
      res.json(availableHotels);
    } else {
      res.json({ message: "No rooms available in the specified hotels." });
    }
  } catch (error) {
    console.error(error);

    res
      .status(500)
      .json({ message: "Error fetching hotels from the database." });
  }
});

module.exports = router;
