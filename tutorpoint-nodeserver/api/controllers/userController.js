/* The code below was referred from [Tutorial-6 V3 recording (T6V3: NodeJS and Express [Option 2 How-To Video])](https://dal.brightspace.com/d2l/le/content/143362/viewContent/2243534/View) and modified further to complete the activity.*/
const tutorApplicationData = require("../model/tutorApplicationModel");
const mongoose = require("mongoose");

const uploadFile = (req, res) => {
  console.log("body here");
  console.log(req.body);
  console.log("fullname" + req.body.fullName);
  console.log("files here");
  console.log("destination" + req.files[0].destination);
  var fileDestination = req.files[0].destination;
  var i;
  var fileNames = [];

  for (i = 0; i < req.files.length; i++) {
    fileNames.push(req.files[i].filename);
  }
  console.log("filenames" + fileNames);
  var responseObject = {
    formData: {
      fullName: req.body.fullName,
      email: req.body.email,
      department: req.body.department,
      course: req.body.course,
      description: req.body.description,
      availability: req.body.availability,
      faculty_email: req.body.facultyEmail,
      course_id: req.body.courseId,
    },
    fileNames: fileNames,
    fileDestination: fileDestination,
  };
  //res.status(200).json(responseObject);
  var new_tutor_application_id;
  tutorApplicationData
    .find()
    .sort({ _id: -1 })
    .limit(1)
    .exec()
    .then((data) => {
      var jsonData = data;
      console.log("dasda" + jsonData);
      if (data.length == 0) {
        console.log(typeof data);
        console.log(data.tutor_application_id);
        new_tutor_application_id = "T111111";
        console.log("neww" + new_tutor_application_id);
      } else {
        console.log(jsonData[0].tutor_application_id.substring(2));
        new_tutor_application_id =
          "T" +
          (parseInt(jsonData[0].tutor_application_id.substring(2), 10) + 1);
        console.log("neww" + new_tutor_application_id);
      }

      console.log("resp" + responseObject.formData.course_id);
      let tutorApplication = new tutorApplicationData({
        _id: new mongoose.Types.ObjectId(),
        tutor_application_id: new_tutor_application_id,
        applied_by: {
          student_name: responseObject.formData.fullName,
          email: responseObject.formData.email,
          username: responseObject.formData.fullName,
        },
        applied_for: {
          course_name: responseObject.formData.course,
          course_id: responseObject.formData.course_id,
          department_name: responseObject.formData.department,
          approver_email: responseObject.formData.faculty_email,
        },
        application_status: {
          status: "pending",
          to_be_approved_by: responseObject.formData.faculty_email,
          reason: "blank",
        },
        application_details: {
          files_destination: responseObject.fileDestination,
          student_description: responseObject.formData.description,
          attachment_file_names: responseObject.fileNames,
        },
      });
      tutorApplication.save().then((result) => {
        console.log(result);
      });
      res.status(200).json(responseObject);
    });
};

module.exports.uploadFile = uploadFile;
