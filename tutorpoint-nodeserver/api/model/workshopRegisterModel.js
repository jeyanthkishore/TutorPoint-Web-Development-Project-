const mongoose = require("mongoose");

const registerWorkshop = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  workshopid:String,
  email: String,
  
});

module.exports = mongoose.model("registerWorkshop",registerWorkshop ,'registerWorkshop');