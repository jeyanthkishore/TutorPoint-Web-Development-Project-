/* The code below was referred from [Tutorial-6 V3 recording (T6V3: NodeJS and Express [Option 2 How-To Video])](https://dal.brightspace.com/d2l/le/content/143362/viewContent/2243534/View) and modified further to complete the activity.*/
const express = require("express");
const router = express.Router();
const multer = require("multer");
const userController = require("../controllers/userController");

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, __dirname + "/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "-" + Date.now() + ".pdf");
  },
});

var upload = multer({ storage: storage });

router.post(
  "/uploadfile",
  upload.array("uploadDocuments", 12),
  userController.uploadFile
);

module.exports = router;
