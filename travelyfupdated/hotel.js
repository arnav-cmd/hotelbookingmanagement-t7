const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let hotelSchema = new Schema(
  {
    Imageurl: {
      type: String,
    },

    City: {
      type: String,
    },

    HotelName: {
      type: String,
    },

    Area: {
      type: String,
    },

    Cost: {
      type: String,
    },

    Rooms: {
      type: Number,
    },
  },

  {
    collection: "Hotels",
  }
);

module.exports = mongoose.model("Hotel", hotelSchema);
