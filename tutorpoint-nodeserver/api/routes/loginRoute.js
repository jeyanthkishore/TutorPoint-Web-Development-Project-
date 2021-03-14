const express = require("express");
const router = express.Router();
const loginModel = require("../model/loginModel");
const mongoose = require("mongoose");
const { registerUser } = require("../controllers/loginController");

//Register the user
router.post("/register", (req, res) => {
    loginModel
        .find({ email: req.body.email })
        .exec()
        .then((data) => {
            if (!data.length) {
                const response = registerUser(req);
                res.status(200).json(response)
            } else {
                res.status(407).json({
                    success: false,
                    message: "Username already exists",
                });
            }
        });
});

//Login by user
router.post("/login", (req, res) => {
    loginModel
        .find({ email: req.body.email })
        .exec()
        .then((data) => {
            if (!data.length) {
                res.status(200).json({
                    success: false,
                    message: "username",
                });
            } else {
            if (data[0]['password']!==req.body.password) {
                res.status(200).json({
                    success: false,
                    message: "password",
                });
            } else {
                 res.status(200).json({
                    success: true,
                    message: "success",
                });
            }
        }
            }
        );
});

module.exports = router;