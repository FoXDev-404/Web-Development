// Source:
document.querySelectorAll(".drum").forEach((element) => {
  element.addEventListener("click", function () {
    makeSound(this.innerHTML);
    buttonAnimation(this.innerHTML);
  });
});

// Detecting Button Press
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

// Detecting Keyboard Press
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    // For uppercase letters
    case "W":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "A":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "S":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "D":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "J":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "K":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "L":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(key);
      break;
  }
}

// Button Animation
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 100);
}
