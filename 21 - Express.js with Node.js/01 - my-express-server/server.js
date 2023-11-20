const express = require("express");

const app = express();

app.get("/", function (req, res) {
  //   console.log(req);
  res.send("<h1>Hello, world!</h1> <p>My name is <b>@FoXDev-404</b>.</p>");
});

app.get("/contact", function (req, res) {
  res.send(
    "Contact me at: <a href='mailto:  https://t.me/FoXDev_404'>FoXDev_404</a>"
  );
});

app.get("/about", function (req, res) {
  //   console.log(req); // It will print the request object in the console for you to see.
  res.send("<h1>About me</h1> <p>My name is <b>@FoXDev-404</b>.</p>");
});

app.get("/hobbies", function (req, res) {
  res.send("<h1>My Hobbies</h1> <ul><li>Code</li><li>Play</li></ul>");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000.");
});
