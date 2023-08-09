let express = require("express");

let mongoose = require("mongoose");

let cors = require("cors");

let bodyParser = require("body-parser");

 

const HotelRoute=require('./routes/hotel.route');

const Hotel=require('./models/hotels');

mongoose

.connect('mongodb://127.0.0.1:27017/HotelsInfo')

.then((x)=>{

    console.log(`Connected to MongoDb! Database Name:"${x.connections[0].name}"`);

})

.catch((error)=>{

    console.log("Error connecting to mongo",error.reason)

});

const app=express();

app.use(bodyParser.json());

app.use(

    bodyParser.urlencoded({

        extended:true,

    })

);

app.use(cors())

app.use("/Hotels",HotelRoute);

const port=process.env.PORT || 4000;

const server=app.listen(port,()=>{

    console.log("Connected to port",port);

});

 

app.use((req, res, next) => {

    next(createError(404));

  });

 

  app.use(function (err, req, res, next) {

    console.error(err.message);

    if (!err.statusCode) err.statusCode = 500;

    res.status(err.statusCode).send(err.message);

  });