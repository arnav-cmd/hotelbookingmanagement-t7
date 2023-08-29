const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserBookingSchema = new Schema({
  Bid: String,
  Hotelname: String,
  City: String,
  rooms: Number,
  Checkindate: String,
  Checkoutdate: String,
  Bookedby: String,
  Mobile:String,
  RoomType:String
});

module.exports = mongoose.model("UserBooking", UserBookingSchema);
