/*Author: Manpreet Singh, BannerID: B00853930*/
const mongoose = require("mongoose");

const workshop = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  id:String,
  name:{ type : String,
    required : true },

  department: { type : String,
    required : true },
  time: { type : String,
    required : true },
  date: { type : String,
    required : true },
 tutor: { type : String,
  required : true }
  
});

module.exports = mongoose.model("workshop",workshop ,'workshop');