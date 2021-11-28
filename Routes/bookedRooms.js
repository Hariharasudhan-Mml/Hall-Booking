const app=require('express').Router();
const Booking = require('../models/booking');
const Room=require('../models/RoomModel');


app.get('/',async(req,res)=>{

const bookedRooms=await Booking.find({}).populate('customer').populate('rooms');
console.log(bookedRooms);
res.render('bookedRooms',{
    rooms:bookedRooms
})

})

module.exports=app;