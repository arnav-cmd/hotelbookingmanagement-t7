const { json } = require('body-parser');
const mongoose=require('mongoose')
const Schema=mongoose.Schema;

// let RoomSchema=new Schema({
//     singlebed:{
//         type:Number,
//         default:0
//     },
//     doublebed:{
//         type:Number,
//         default:0
//     }
// })
let HotelSchema=new Schema({
    Imageurl:{
        type: String,
        unique:true
    },
    City:{
        type:String,
        required:true
    },
    HotelName:{
        type:String,
        unique:true
    },
    Area:{
        type:String,
    },
    Cost:{
        type: String,
        required:true
    },
    Rooms:{
        type:JSON,
        required:true
    }
},{
    collection:'Hotels'
})
const Hotel=mongoose.model('Hotel',HotelSchema)
module.exports=Hotel;