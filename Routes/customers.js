const app=require('express').Router();
const Booking = require('../models/booking');
const Customer=require('../models/customer');


app.get('/',async(req,res)=>{
const customers= await Booking.find({}).populate('customer').populate('rooms');
res.render('customers',{
    customer:customers
})

})

module.exports=app;