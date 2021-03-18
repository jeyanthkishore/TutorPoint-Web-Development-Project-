/* The code below was referred from [Tutorial-7 V3 recording (T673: NodeJS and Express [Option 2 How-To Video])](https://dal.brightspace.com/d2l/le/content/143362/viewContent/2243537/View) and modified further to complete the activity.*/
const mongoose = require("mongoose");

const tutorapplications = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId, // mongoose Type objectId is used for generating unique ID's
  tutor_application_id: String,
  applied_by: {
    student_name: String,
    email: String,
    username: String,
  },
  applied_for: {
    course_name: String,
    course_id: String,
    department_name: String,
    approver_email: String,
  },
  application_status: {
    status: String,
    to_be_approved_by: String,
    reason: String,
    updated_at: Date,
  },
  application_details: {
    files_destination: String,
    student_description: String,
    attachment_file_names: Array,
    created_at: Date,
  },
});

module.exports = mongoose.model("tutorapplications", tutorapplications);
