const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
  date: {
    type: String,
    // default:Date.now(),
    required: true,
  },
  start_time: {
    type: String,
    required: true,
  },
  end_time: {
    type: String,
    required: true,
  },
  room_id: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Types.ObjectId,
    ref: "customers",
    required: true,
  },
  rooms: {
    type: mongoose.Types.ObjectId,
    ref: "rooms",
    required: true,
  },
});

const Booking = mongoose.model("booking", bookingSchema);

module.exports = Booking;
