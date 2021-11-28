const router = require("express").Router();
const Booking = require("../models/booking");
const Customer = require("../models/customer");
const Room = require("../models/RoomModel");

router.get("/", async (req, res) => {
  const id = req.query.id;
  const date = new Date();
  res.render("createCustomerForm", {
    id: id,
    time: date.toLocaleTimeString(),
    date: date.toLocaleDateString(),
  });
});

async function check(req, res, next) {
  const start_time = req.body.start_time.padStart(11, 0);
  const end_time = req.body.end_time.padStart(11, 0);

  const validate = await Booking.find({});
  if (validate.length == 0) {
    const customer = new Customer({
      customer_name: req.body.customer_name,
      address: req.body.address,
    });
    await customer.save();
    const room = await Room.findOneAndUpdate(
      { room_id: req.body.room_id },
      { booked_status: true },
      { new: true }
    );
    const booking = await Booking.create({
      date: req.body.date,
      room_id: req.body.room_id,
      start_time: start_time,
      end_time: end_time,
      customer: customer._id,
      rooms: room._id,
    });
   next();
  } else {
    validate.forEach(async (room) => {
      if (
        room.room_id == req.body.room_id &&
        room.date == req.body.date &&
        !(room.start_time > end_time || room.end_time < start_time)
      ) {
        return res.render("failed", {
          string: "Room is Busy at this Timing",
        });
      } else {
        const customer = new Customer({
          customer_name: req.body.customer_name,
          address: req.body.address,
        });
        await customer.save();
        const rooms = await Room.findOneAndUpdate(
          { room_id: req.body.room_id },
          { booked_status: true },
          { new: true }
        );
        const booking = await Booking.create({
          date: req.body.date,
          start_time: start_time,
          end_time: end_time,
          room_id: req.body.room_id,
          customer: customer._id,
          rooms: rooms._id,
        });
        next();
      }
    });
  }
}

router.post("/", check, (req, res) => {
  res.render("success", {
    type: "Booked",
  });
});

module.exports = router;
