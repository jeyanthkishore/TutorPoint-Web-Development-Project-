const workshopModel = require('../model/appointmentModel'); 
const mongoose = require("mongoose");


const getAppointmentsStudent=(req,data)=>{
    const studentemail=req.query.studentemail;
    
    let appointments = [];
    data.map(item=>
        {
            if(studentemail===item.studentemail){
                appointments.push(item);
            }
        })
    return appointments;
}

module.exports.getAppointmentsStudent = getAppointmentsStudent;
