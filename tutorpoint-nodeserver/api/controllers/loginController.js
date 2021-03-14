const loginModel = require("../model/loginModel");
const mongoose = require("mongoose");

async function registerUser(req) {
    loginModel.countDocuments().then((count_documents) => {
        console.log(count_documents);
        const newDocument = count_documents + 1;
        const user = new loginModel({
            _id: new mongoose.Types.ObjectId(),
            pointId:newDocument,
            username: req.body.fullname,
            password: req.body.password,
            email: req.body.email,
            contact: req.body.contact,
            dept: req.body.dept,
        });
        console.log("Working!!!!!");
        user.save();
        return user;
  }).catch((err) => {
      console.log(err.Message);
      return err;
  })
}

module.exports.registerUser = registerUser;