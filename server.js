const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
require('dotenv').config();
const Room=require('./models/RoomModel')
const connectDB=require('./config/db');
const createRoomRoute=require('./Routes/CreateRoom');
const selectRoom=require('./Routes/SelectRoom');
const createCustomer=require('./Routes/createCustomer');
const bookedRooms=require('./Routes/bookedRooms');
const customers=require('./Routes/customers');

const app=express();
app.set('view engine','ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.use('/static' ,express.static('static'));

connectDB();
app.use('/booking',selectRoom);
app.use('/CreateRoom',createRoomRoute)
app.use('/createcustomer',createCustomer);
app.use('/bookedRooms',bookedRooms);
app.use('/customers',customers);
app.get('/',async(req,res)=>{
res.render('home')
})

const port=process.env.PORT ||  5000 ;
app.listen(port,(err)=>{
  if(err)console.log(err);
  console.log('Server is up and running');
});

