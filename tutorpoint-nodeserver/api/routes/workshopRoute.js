/* The code below was referred from [Tutorial-6 V3 recording (T6V3: NodeJS and Express [Option 2 How-To Video])](https://dal.brightspace.com/d2l/le/content/143362/viewContent/2243534/View) and modified further to complete the activity.*/
const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();
const { getWorkshops,addWorkshops} =require('../controllers/workshopController');
const workshopModel = require("../model/workshopModel");


router.get('/', getWorkshops)

router.post("/", (req, res) => {
    workshopModel
        .find({ name: req.body.name})
        .exec()
        .then((data) => {
            console.log(data);
            if (!data.length) {
                const response = addWorkshops(req,res);
                res.status(200).json({
                    success: true,
                    message: "Workshop created successfully!",
                })
            } else {
                res.status(407).json({
                    success: false,
                    message: "Workshop already exists",
                });
            }
        });
});

module.exports = router;