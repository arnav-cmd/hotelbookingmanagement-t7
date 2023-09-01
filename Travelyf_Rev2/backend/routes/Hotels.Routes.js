let mongoose = require("mongoose"),
  express = require("express"),
  router = express.Router();

//usermodel

let hotelSchema = require("../models/hotel");

router.route("/createhotel").post((req, res, next) => {
  hotelSchema
    .create(req.body)
    .then((createdHotel) => {
      console.log(createdHotel);
      res.json(createdHotel);
    })

    .catch((error) => {
      next(error);
    });
});
router.route('/').get((req,res)=>{
      hotelSchema.find()
      .then((hotel)=>{
          res.json(hotel);
      })
      .catch((error)=>{
          next(error);
      })
  })
router.route('/count')
  .get(async (req, res) => {
    try {
      const totalCount = await hotelSchema.countDocuments();
      res.json({ count: totalCount });
    } catch (error) {
      res.status(500).json({ error: 'An error occurred' });
    }
  });

module.exports = router;
