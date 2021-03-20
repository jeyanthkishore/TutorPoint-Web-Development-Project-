/* The code below was referred from [Tutorial-6 V3 recording (T6V3: NodeJS and Express [Option 2 How-To Video])](https://dal.brightspace.com/d2l/le/content/143362/viewContent/2243534/View) and modified further to complete the activity.*/
const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const workshopRegisterModel = require("../model/workshopRegisterModel");
const { registerWorkshops, getWorkshopIdsByEmail} =require('../controllers/workshopRegisterController');


router.get('/specific', (req, res) => {

    workshopRegisterModel.find().exec().then((data)=>{
        const filteredWorkshopIds= getWorkshopIdsByEmail(req,data);
        console.log(filteredWorkshopIds);       
        if(filteredWorkshopIds.length==0)
        {
            res.status(200).json({
                success: false,
                message: "Workshops not found"

            })
        } else{
        res.status(200).json(filteredWorkshopIds);
        }
    })


});
router.post("/", (req, res) => {
    workshopRegisterModel
        .find()
        .exec()
        .then((data) => {
            console.log(data);
            const response = registerWorkshops(req,res);
            res.status(200).json({
                success: true,
                message: "Workshop registered successfully!",
            })
           
        });
});

module.exports = router;