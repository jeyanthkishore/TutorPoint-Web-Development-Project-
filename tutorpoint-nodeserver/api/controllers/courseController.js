/* The code below was referred from [Tutorial-6 V3 recording (T6V3: NodeJS and Express [Option 2 How-To Video])](https://dal.brightspace.com/d2l/le/content/143362/viewContent/2243534/View) and modified further to complete the activity.*/
const courseData = require("../model/courseModel");

const getCourses = (req, res) => {
  courseData
    .find()
    .exec()
    .then((data) => {
      console.log(data);
      if (data.length == 0) {
        console.log("empty");
        res
          .status(406)
          .json({ success: false, message: "No users in the Database!!" });
        console.log(err);
      } else {
        res.status(200).json(data);
      }
    });
};

module.exports.getCourses = getCourses;
