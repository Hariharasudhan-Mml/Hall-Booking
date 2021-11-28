const mongoose=require('mongoose');


const connectDB=async function (){
try {
    const con =await mongoose.connect('mongodb+srv://hari:19caa2705@cluster0.dgtns.mongodb.net/Hall_Booking?retryWrites=true&w=majority');
    console.log('Database connected to '+con.connection.host)

} catch (error) {
    console.log(error);
}

}


module.exports=connectDB;


