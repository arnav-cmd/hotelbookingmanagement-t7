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

router.route('/').get((req,res)=>{
    HotelSchema.find()
    .then((hotel)=>{
        res.json(hotel);
    })
    .catch((error)=>{
        next(error);
    })
})

router.route('/get-hotel/:id').get((req,res,next)=>{
    HotelSchema.findById(req.params.id)
    .then((hotel)=>{
        res.json(hotel);
    })
    .catch((error)=>{
        next(error);
    })
})

router.route('/update-hotel/:id').put((req,res,next)=>{
    HotelSchema.findByIdAndUpdate(
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

router.route('/delete-hotel/:id').delete((req,res,next)=>{
    
})
module.exports=router
