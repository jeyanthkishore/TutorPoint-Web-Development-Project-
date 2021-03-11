/* The code below was referred from [Tutorial-7 V3 recording (T673: NodeJS and Express [Option 2 How-To Video])](https://dal.brightspace.com/d2l/le/content/143362/viewContent/2243537/View) and modified further to complete the activity.*/
const mongoose = require("mongoose");

const users = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // mongoose Type objectId is used for generating unique ID's
  username: String,
  email: String,
});

module.exports = mongoose.model("users", users);
