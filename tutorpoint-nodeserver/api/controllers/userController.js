/* The code below was referred from [Tutorial-6 V3 recording (T6V3: NodeJS and Express [Option 2 How-To Video])](https://dal.brightspace.com/d2l/le/content/143362/viewContent/2243534/View) and modified further to complete the activity.*/

const uploadFile = (req, res) => {
  console.log("body here");
  console.log(req.body);
  console.log("files here");
  console.log(req.files);
};

module.exports.uploadFile = uploadFile;
