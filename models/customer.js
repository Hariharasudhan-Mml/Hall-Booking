const mongoose=require('mongoose');

const customerSchema=mongoose.Schema({
    customer_name:{
        type:String,
        required:true
    },
    
   address:{
        type:String,
        required:true
    },
    
    
})


const Customer=mongoose.model("customers",customerSchema);

module.exports=Customer;