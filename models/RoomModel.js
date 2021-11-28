const mongoose = require("mongoose");

const roomSchema = mongoose.Schema({
  room_id: {
    type: Number,
    required: true,
  },
  room_name: {
    type: String,
    required: true,
  },
  no_of_seats: {
    type: Number,
    required: true,
  },
  amenities: {
    type: Array,
    required: true,
  },
  booked_status: {
    type: Boolean,
    required: true,
    default: false,
  },
  price: {
    type: Number,
    required: true,
  }
});
const Room = mongoose.model("rooms", roomSchema);




module.exports=Room;

