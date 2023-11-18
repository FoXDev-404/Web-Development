// write javascript here

// next sequence function to generate random color and add to gamePattern array
function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4); // 0-3
  var randomChosenColour = buttonColours[randomNumber]; // red, blue, green, yellow
  gamePattern.push(randomChosenColour); // add random color to gamePattern
  $("#" + randomChosenColour)
    .fadeOut(100)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100); // flash button
  playSound(randomChosenColour); // play sound
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour) {
  // add pressed class
  $("#" + currentColour).addClass("pressed");
  // remove pressed class
  setTimeout(function () {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  // check if user's answer is same as gamePattern
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");
    // check if user finished sequence
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(function () {
        nextSequence();
      }, 1000);
    }
  }
  // if wrong
  else {
    console.log("wrong");
    // play wrong sound
    playSound("wrong");
    // add game-over class
    $("body").addClass("game-over");
    // remove game-over class
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    // change h1 to game over
    $("#level-title").text("Game Over, Press Any Key to Restart");
    // restart game
    startOver();
  }
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}

// array of colors
var buttonColours = ["red", "blue", "green", "yellow"];
// game pattern
var gamePattern = [];
// user pattern
var userClickedPattern = [];
// level
var level = 0;
// game started
var started = false;

// start game
$(document).keypress(function () {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

// user click
$(".btn").click(function () {
  // get id of button
  var userChosenColour = $(this).attr("id");
  // add to userClickedPattern
  userClickedPattern.push(userChosenColour);
  // play sound
  playSound(userChosenColour);
  // animate press
  animatePress(userChosenColour);
  // check answer
  checkAnswer(userClickedPattern.length - 1);
});
