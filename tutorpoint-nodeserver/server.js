const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
const userRoute = require("./api/routes/userRoute");
const mailRoute = require("./api/routes/mailRoute");
const bodyParser = require("body-parser");

mongoose.connect(
  "mongodb+srv://root:5709password@websample.1hjg2.mongodb.net/sampledb?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

app.use(express.static(__dirname + "/build"));
app.use(bodyParser.json());
app.use("/api/user", userRoute);
app.use("/api/mail", mailRoute);
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname + "/build/index.html"));
});

console.log("runnning server now");

app.listen(process.env.PORT || 8080);
