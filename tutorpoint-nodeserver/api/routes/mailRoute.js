/* The code below was referred from [Tutorial-6 V3 recording (T6V3: NodeJS and Express [Option 2 How-To Video])](https://dal.brightspace.com/d2l/le/content/143362/viewContent/2243534/View) and modified further to complete the activity.*/
const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.get("/send", (req, res) => {
  async function main() {
    // create reusable transporter object using the default SMTP transport
    const transport = nodemailer.createTransport({
      service: "gmail", // true for 465, false for other ports
      auth: {
        user: "tutorpointmailer@gmail.com", // generated ethereal user
        pass: "tutor@123", // generated ethereal password
      },
    });

    // send mail with defined transport object
    let info = await transport.sendMail({
      from: '"TutorPoint" <tutorpointmailer@gmail.com>', // sender address
      to: "yashjaiswalofficial@gmail.com, yashjaiswalofficial@gmail.com", // list of receivers
      subject: "Tutor Application #1234 received for the course CXXXXX", // Subject line
      text:
        "Respected Faculty/Approver, \n This is regarding an application submitted by student - ABCDE ID - xxxx for tutoring for one of your courses CSXXX. \n Please go through the attached documents and the application to make a decision. \n Also, you can directly contact the student @studentemail fof futher information. \n Please make a decision on this application by clicking Here  ", // plain text body
      html:
        "<h1>Respected Faculty/Approver,</h1> <br> <h2>This is regarding an application submitted by student - ABCDE ID - xxxx for tutoring for one of your courses CSXXX. <br> Please go through the attached documents and the application to make a decision. <br> Also, you can directly contact the student @studentemail fof futher information. <br> <b>Please make a decision on this application by clicking <a href='http://localhost:8080/manage-tutor-application'>Here</a></b> </h2> ", // html body
      attachments: {
        // utf-8 string as an attachment
        filename: "sample.pdf",
        path:
          "/Users/yash/Documents/Academics MACS/Winter 2021/CSCI 5709 - Web Dev./nodejs-api sample/sample.pdf",
        contentType: "application/pdf",
      },
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);
  res.status(200).json({ message: "email sent!!" });
});

module.exports = router;
