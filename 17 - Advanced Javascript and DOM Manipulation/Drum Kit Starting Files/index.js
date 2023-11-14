// document.querySelector("button").addEventListener("click", function () {
//   alert("I got clicked.");
// });

for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
  // const element = array[i];
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    // alert("I got clicked.");

    var audio = new Audio("sounds/tom-1.mp3");
    audio.play();
  });
}
