const mongoose = require("mongoose");

const workshop = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id:String,
  name: String,
  department: String,
  time: String,
  date: String,
 tutor: String
  
});

module.exports = mongoose.model("workshop",workshop ,'workshop');