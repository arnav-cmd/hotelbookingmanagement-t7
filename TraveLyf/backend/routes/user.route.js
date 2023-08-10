let mongoose = require("mongoose"),
bcrypt=require("bcrypt"),
  express = require("express"),
  router = express.Router();

let userSchema=require('../models/user');
router.route("/signup").post((req, res,next) => {
    userSchema.create(req.body)
    .then((user)=>{
        console.log(user);
        res.json(user);
    })
    .catch((error)=>{
        next(error);
    })
});
router.route('/').get((req,res)=>{
    userSchema.find()
    .then((user)=>{
        res.json(user);
    })
    .catch((error)=>{
        next(error);
    })
})
router.route('/get-user/:id').get((req,res,next)=>{
    userSchema.findById(req.params.id)
    .then((user)=>{
        res.json(user);
    })
    .catch((error)=>{
        next(error);
    })
});
router.route('/update-user/:id').put((req,res,next)=>{
    userSchema.findByIdAndUpdate(
        req.params.id,{
            $set: req.body,
        },
    )
    .then((hotel)=>{
        res.json(hotel)
        console.log("Hotel data updated!!!")
    })
    .catch((error)=>{
        next(error)
    })
})
router.route('/delete-user/:id').put((req,res,next)=>{
    userSchema.findByIdAndRemove(  req.params.id)
    .then((user)=>{
        console.log("User deleted!!!")
    })
    .catch((error)=>{
        next(error)
    })
})
module.exports=router
