// let mongoose=require('mongoose'),
// express=require('express'),
// router=express.Router()
// let HotelSchema=require('../models/adminlogin')
// router.route('/createadminlogin').get((req,res,next)=>{
//     HotelSchema.create(req.body)
//     .then((hotel)=>{
//         console.log(hotel);
//         res.json(hotel);
//     })
//     .catch((error)=>{
//         next(error);
//     })
// })
// module.exports=router

const express = require('express');
const router = express.Router();
const AdminLoginSchema = require('../models/adminlogin');

// Route for creating a new admin login (sign up)
router.route('/createadminlogin').post(async (req, res, next) => {
    try {
        const { username, password } = req.body;
        // Process username and password, e.g., validation, hashing password, etc.
        const admin = await AdminLoginSchema.create({ username, password });
        res.json(admin);
    } catch (error) {
        next(error);
    }
});

module.exports = router;





