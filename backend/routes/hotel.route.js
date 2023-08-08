let mongoose=require('mongoose'),
express=require('express'),
router=express.Router()

let HotelSchema=require('../models/hotels')

router.route('/createhotel').post((req,res,next)=>{
    HotelSchema.create(req.body)
    .then((hotel)=>{
        console.log(hotel);
        res.json(hotel);
    })
    .catch((error)=>{
        next(error);
    })
})
module.exports=router