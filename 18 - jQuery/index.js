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
