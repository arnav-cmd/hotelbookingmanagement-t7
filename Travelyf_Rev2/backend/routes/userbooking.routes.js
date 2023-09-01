const express = require("express");
const router = express.Router();

const hotelSchema = require("../models/hotel");
const UserBooking = require("../models/UserBooking");


router.post("/newbooking",async(req,res)=>{
  UserBooking.create(req.body)
  .then((booking)=>{
    console.log(booking);
    res.json(booking);
  })
  .catch((error)=>{
    next(error);
  })
})
router.get("/bookings", async (req, res) => {
  UserBooking.find()
  .then((booking)=>{
    console.log(booking);
    res.json(booking);
  })
  .catch((error)=>{
    next(error);
  })
});
// router.get("/bookingsbyuser",async(req,res)=>{
//   const name=sessionStorage.getItem('name');
//   UserBooking.findOne({})
// })

module.exports = router;
