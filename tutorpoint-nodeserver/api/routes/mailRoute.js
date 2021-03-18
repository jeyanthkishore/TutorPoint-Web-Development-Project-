/*Author: Yash Jaiswal, BannerID: B00873246*/
const express = require("express");
const router = express.Router();
const mailController = require("../controllers/mailController");

router.post("/send", mailController.mailSender);

module.exports = router;
