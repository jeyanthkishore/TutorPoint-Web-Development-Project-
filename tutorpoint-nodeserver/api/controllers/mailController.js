/* mail style adapted from nodemailer package documentation*/
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const mailSender = (req, res) => {
  const toEmail = req.body.formData.faculty_email;
  const studentMail = req.body.formData.email;
  const studentName = req.body.formData.fullName;
  const courseId = req.body.formData.course_id;
  const courseName = req.body.formData.course;
  const description = req.body.formData.description;
  const availability = req.body.formData.availability;
  const fileNames = req.body.fileNames;
  const fileDestination = req.body.fileDestination;
  const tutorApplicationId = req.body.tutorApplicationId;
  const attachmentsMail = [];
  var i;
  for (i = 0; i < fileNames.length; i++) {
    var jsonObjTemp = {
      filename: fileNames[i],
      path: fileDestination + "/" + fileNames[i],
      contentType: "application/pdf",
    };
    attachmentsMail.push(jsonObjTemp);
  }

  console.log(studentMail);
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
      to: toEmail, // list of receivers
      subject:
        "Tutor Application " +
        "- " +
        tutorApplicationId +
        " received for the course " +
        courseId +
        "- " +
        courseName, // Subject line
      // text:
      //   "Respected Faculty, \n This is regarding an application submitted by " +
      //   studentName +
      //   " for tutoring for one of your courses " +
      //   courseId +
      //   ". \n Please go through the attached documents and the application to make a decision. \n Also, you can directly contact the student at " +
      //   studentMail +
      //   "for futher information. \n Please make a decision on this application by clicking   ", // plain text body
      html:
        "<h3>Respected Faculty,</h3><br><h4>This is regarding an application submitted by the student " +
        studentName +
        " to tutor for one of your courses " +
        courseName +
        " - " +
        courseId +
        ".<br> <br>Application Details<br> ----------------- <br> Student Name: " +
        studentName +
        "<br> E-mail: " +
        studentMail +
        "<br> Message: " +
        description +
        "<br> Availability: " +
        availability +
        "<br> <br> Please go through the attached documents and the application to make a decision. <br> Also, you can directly contact the student at " +
        studentMail +
        "for futher information. <br> <b>Please make a decision on this application by clicking <a href='http://localhost:3000/#/manage-tutor-application'>Here</a></b> </h4> ", // html body
      attachments: attachmentsMail,
      // {
      //   // utf-8 string as an attachment
      //   filename: "sample.pdf",
      //   path:
      //     "/Users/yash/tutorpoint-becomtutorfeature/tutorpoint-nodeserver/api/routes/uploads/uploadDocuments-1616024823295.pdf",
      //   contentType: "application/pdf",
      // },
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  }

  main().catch(console.error);
  res.status(200).json({ message: "email sent!!" });
};

module.exports.mailSender = mailSender;
