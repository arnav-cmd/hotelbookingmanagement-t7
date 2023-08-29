let express = require("express");
let mongoose = require("mongoose");
let cors = require("cors");
let bcrypt = require("bcrypt");
let bodyParser = require("body-parser");
let jwt = require("jsonwebtoken");
const createEror = require("http-errors");

const usermyprofile = require("../backend/routes/user.route");
const ForgotPasswordPage = require("../backend/routes/user.route");
const hotelRoute = require('./routes/search.routes');
const hotRoute=require('./routes/Hotels.Routes');
const searchRoute=require('./routes/search.routes');
const bookinghistory=require('./routes/userbooking.routes');
// const Contact = require("./models/contact");
const contactRoute = require('./routes/contactus.route');


 
const secretkey = "12345";
//const HotelRoute = require("./routes/hotel.route");
const userRoute = require("./routes/user.route");
// const adminRoute=require("./routes/admin.route");
const User = require("./models/user");

//const Hotel = require("../models/hotels");
// const Admin=require("./models/admin");
mongoose
  .connect("mongodb://127.0.0.1:27017/HotelsInfo")
  .then((x) => {
    console.log("Connected to MongoDb!");
  })
  .catch((error) => {
    console.log("Error connecting to mongo", error.reason);
  });

app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cors());
//app.use("/Hotels", HotelRoute);
app.use("/users", userRoute);
app.use("/user", usermyprofile);
app.use("/forgotpassword", ForgotPasswordPage);
app.use('/search', hotelRoute);
app.use('/userbookings', bookinghistory)
app.use('/Hotels',hotRoute)
app.use('/contact', contactRoute);

 

const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log("Connected to port", port);
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  console.log("Login attempt for:", email);

  try {
    const user = await User.findOne({ email: email });
    console.log(user);
    if (!user) {
      console.log("User not found:", email);
      return res.json("notexist");
    }
    console.log("Stored hashed password:", user.password);
    const isPasswordValid = await bcrypt.compare(password, user.password);
    console.log(isPasswordValid);
    if (isPasswordValid) {
      console.log(user.isAdmin);
      const token = jwt.sign(
        { userId: user._id, isAdmin: user.isAdmin },

        secretkey,
        { expiresIn: "1h" }
      );

      res.json({ token, user: { email: user.email, isAdmin: user.isAdmin,name:user.Username,mobile:user.mobile } });

      console.log(token);
    } else {
      console.log("Invalid password for:", email);

      return res.json({ token: null });
    }
  } catch (e) {
    console.error("Login error:", e.message);

    return res.json("fail");
  }
});
// app.post("/adminlogin", async (req, res) => {
//   const { email, password } = req.body;
//   console.log(email);
//   try {
//     const user = await Admin.findOne({ email: email });
//     if (!user) {
//       console.log("Admin not found:", email);
//       return res.json("notexist");
//     }
//     const isPasswordValid = await bcrypt.compare(password, user.password);
//     console.log("Password Valid:", isPasswordValid);
//     if (isPasswordValid) {
//       res.json("success");
//     } else {
//       res.json("invalid");
//     }
//   } catch (e) {
//     console.error("Login error:", e.message);
//     res.json("fail");
//   }
// });
app.use((req, res, next) => {
  next(createError(404));
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});
