/* The code below was referred from [Tutorial-6 V3 recording (T6V3: NodeJS and Express [Option 2 How-To Video])](https://dal.brightspace.com/d2l/le/content/143362/viewContent/2243534/View) and modified further to complete the activity.*/

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
    },

    fileNames: fileNames,
    fileDestination: fileDestination,
  };
  var jsonObject = [];
  res.status(200).json(responseObject);
  // res
  //   .status(200)
  //   .json({ success: false, message: "No users in the Database!!" });
};

module.exports.uploadFile = uploadFile;
