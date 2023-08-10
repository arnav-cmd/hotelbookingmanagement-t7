let mongoose = require("mongoose"),
bcrypt=require('bcrypt'),
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

    
//     try{
//         userSchema.findOne({email:email},(err,user)=>{
//         if(!user){
//             console.log('User not found',email);
//             return res.json('notexist');
//         }
//         else{
//             bcrypt.compare(password,user.password,(err,ispassvalid)=>{
//                 if(ispassvalid){
//                     res.json('success');
//                 }
//                 else{
//                     res.json('invalid');
//                 }
//             })
//         }
        

//     })
// }
// catch(e){
//     console.error('Login error:',e.message);
//     res.json('fail');
// }
//  }
// )

// try {

//     const user = userSchema.findOne({ email: email});

//     if (!user) {

//       console.log('User not found:', email);

//       return res.json('notexist');

//     }

 

//     const isPasswordValid =  bcrypt.compare(password, user.password);

//     console.log('Password Valid:', isPasswordValid);

//     if (isPasswordValid) {

//       res.json('success');

//     } else {

//       res.json('invalid');  

//     }

//   } catch (e) {

//     console.error('Login error:', e.message);

//     res.json('fail');

//   }


module.exports=router
