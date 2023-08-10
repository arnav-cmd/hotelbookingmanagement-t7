const mongoose=require('mongoose')
const Schema=mongoose.Schema;
let HotelSchema=new Schema({
    username:{
        type: String,
        unique:true
    },
    password:{
        type:String,
        unique:true
    }
})
const Hotel=mongoose.model('Adminlogin',HotelSchema)
module.exports=Hotel;