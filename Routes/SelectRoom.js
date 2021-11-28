const router=require('express').Router();
const Room = require('../models/RoomModel');



router.get('/',async(req,res)=>{
   const rooms= await Room.find({})
res.render('selectRooms',{
    rooms:rooms
})
});

module.exports=router;