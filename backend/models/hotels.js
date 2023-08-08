const mongoose=require('mongoose')
const Schema=mongoose.Schema;

let HotelSchema=new Schema({
    Imageurl:{
        type: String,
        unique:true
    },
    City:{
        type:String,
        unique:true
    },
    HotelName:{
        type:String,
        unique:true
    },
    Rating:{
        type: String,
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
        type:String,
        required:true
    }
},{
    collection:'Hotels'
})
const Hotel=mongoose.model('Hotel',HotelSchema)
module.exports=Hotel;