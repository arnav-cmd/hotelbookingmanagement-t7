// search.routes.js

const express = require('express');
const router = express.Router();
const hotelSchema = require('../models/hotel');
const UserBooking = require('../models/UserBooking');

router.get('/', async (req, res) => {
  try {
    const { city, checkindate, checkoutdate, rooms } = req.query;

    const hotels = await hotelSchema.find({ City: { $regex: new RegExp(city, 'i') } });

    const bookings = await UserBooking.find({
      City: city,
      Checkindate: { $lte: new Date(checkoutdate) },
      Checkoutdate: { $gte: new Date(checkindate) }
    });

    const bookedHotelIds = bookings.map(booking => booking.Hotelname);

    const availableHotels = hotels.filter(hotel => !bookedHotelIds.includes(hotel.Hotelname));

    res.json(availableHotels);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching hotels from the database.' });
  }
});

module.exports = router;
