const router=require('express').Router();
const Room=require('../models/RoomModel');

router.get('/',(req,res)=>{
    res.render('CreateRoomForm');
    
})

router.post('/',async(req,res)=>{
    console.log(req.body)
    try {
        const room=new Room(req.body);
        await room.save()
        res.render('success',{
            type:'Created'
        })
        } catch (error) {
            res.send(error.message)
        console.log(error)
    }
    
})

module.exports=router;
