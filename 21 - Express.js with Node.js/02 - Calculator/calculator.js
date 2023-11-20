// require express
const express = require("express");
// require body-parser
const bodyParser = require("body-parser");

const app = express();
// use body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.get("/bmiCalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
// post requests for bmiCalculator
app.post("/bmiCalculator", function (req, res) {
  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height) / 100; // convert height from cm to m

  // BMI calculator when user enters weight and height in kg and cm
  var bmi = (weight / (height * height)).toFixed(3); // keep 3 digits after the decimal point

  res.send("Your BMI is " + bmi + " kg/m2");
});

app.post("/", function (req, res) {
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The sum of the two numbers is  " + result);
});

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
