// create server
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.get("/", function (req, res) {
  var today = new Date();

  if (today.getDay() === 6 || today.getDay() === 0) {
    res.write("<h1>Yay it's the weekend!</h1>");
  } else {
    res.sendFile(__dirname + "/index.html");
  }
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
