const tutorScheduleModel = require('../model/tutorScheduleModel'); 
const mongoose = require("mongoose");

const getTutorSchedule = (req,data)=>{
    const email = req.query.email;
    let schedules = [];
    data.map(item => {
        if(item.email === email) {
            schedules.push(item);
        }
    })
    return schedules;
}


module.exports.getTutorSchedule = getTutorSchedule;