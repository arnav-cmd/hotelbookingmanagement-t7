const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserBookingSchema = new Schema({
  Bid: String,
  Bookiedby: String,
  Hotelname: String,
  City: String,
  rooms: String,
  Checkindate: Date,          // Store as Date object
  Checkoutdate: Date          // Store as Date object
});

module.exports = mongoose.model('UserBooking', UserBookingSchema);
