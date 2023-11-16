/* 
// Selecting element in jQuery
$("h1"); // Selects all h1 elements
$("button"); // Selects all button elements

// Selecting by ID and Class
$("#heading"); // Selects the element with id="heading"
$(".btn"); // Selects all elements with class="btn"

// Manipulating Style
$("h1").css("color", "blue"); // Changes the color of all h1 elements to blue

// Manipulating Text
$("h1").text("Bye"); // Changes the text of all h1 elements to Bye

$("button").text("Don't Click Me"); // Changes the text of all button elements to Don't Click Me

// Manipulating Attributes
$("img").attr(
  "src",
  "https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
); // Changes the source of all img elements to the Google logo
*/

/*
// Adding Event Listeners using jQuery
$("h1").click(function () {
  $("h1").css("color", "purple");
});

// Adding Event Listeners using JavaScript
document.querySelector("h1").addEventListener("click", function () {
  document.querySelector("h1").style.color = "purple";
});
*/

/* 
// Adding Event Listeners to all buttons using JavaScript
for (var i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "purple";
  });
}

// Adding Event Listeners to all buttons using jQuery
$("button").click(function () {
  $("h1").css("color", "purple");
});
*/

/*
// Detecting Button Press
$("input").keypress(function (event) {
  console.log(event.key);
});

// Changing h1 text to the key pressed
$(document).keypress(function (event) {
  $("h1").text(event.key);
  console.log(event.key);
});

// Add an event listener for the 'mouseover' event on all h1 elements
$("h1").on("mouseover", function () {
  // When a mouseover event occurs, change the color of all h1 elements to purple
  $("h1").css("color", "purple");
});
*/
