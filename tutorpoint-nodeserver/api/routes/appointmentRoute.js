const express = require("express");
const nodemailer = require("nodemailer");
const { getAppointmentsStudent } = require("../controllers/appointmentController");
const router = express.Router();

const appointmentModel = require("../model/appointmentModel");


//get workshop details for workshop ids
router.get('/', (req, res) => {

    appointmentModel.find().exec().then((data)=>{
        console.log(data);
        const appointments= getAppointmentsStudent(req,data);
        if(appointments.length==0)
        {
            res.status(200).json({
                success: false,
                message: "No Appointments"

            })
        }
        else{
        res.status(200).json(appointments);
        }
    })


});
module.exports = router;