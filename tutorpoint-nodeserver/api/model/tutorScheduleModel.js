const mongoose = require("mongoose");

const tutorSchedule = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  day: String,
  scheduleId: String,
  time: String,
  duration: String,
  email: String
});

module.exports = mongoose.model("tutorSchedule",
	tutorSchedule ,'tutorSchedule');