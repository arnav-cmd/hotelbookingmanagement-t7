let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

let adminSchema=require('../models/admin');
router.route("/adminsignup").post((req, res,next) => {
    adminSchema.create(req.body)
    .then((admin)=>{
        console.log(admin);
        res.json(admin);
    })
    .catch((error)=>{
        next(error);
    })
});