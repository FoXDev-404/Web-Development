// Simple Prompt and Alert program.
// prompt("Enter Your Name : ");
// alert("Hya there...");

// Random Number Generator.
/*
var n = Math.random();
n = n * 6;
n = Math.floor(n);
n = n + 1;
console.log(n);
*/

//Love Score Calculator
/*
prompt("Enter first name : ");
prompt("Enter second name : ");
var loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;
alert("The love score is " + loveScore + "%");
*/

// Control Statements Using If-Else Conditionals & Logic.
/*
prompt("Enter first name : ");
prompt("Enter second name : ");
var loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore >= 70) {
  alert(
    "The love score is " +
      loveScore +
      "%" +
      " You are the perfect match for each other.  💕"
  );
} else {
  alert("The love score is " + loveScore + "%");
}
*/

// Comparators and Equality/ ( ===, >=, <=, !==, >, < )
// Combining Comparators ( && AND, || OR, ! NOT )
/*
prompt("Enter first name : ");
prompt("Enter second name : ");
var loveScore = Math.random();
loveScore = loveScore * 100;
loveScore = Math.floor(loveScore) + 1;
if (loveScore > 70) {
  alert(
    "The love score is " +
      loveScore +
      "%" +
      " You are the perfect match for each other.  💕"
  );
} else if (loveScore > 30 && loveScore <= 70) {
  alert("The love score is " + loveScore + "%");
} else {
  alert(
    "The love score is " +
      loveScore +
      "%" +
      " You go together like oil and water."
  );
}
*/

//Introducing the Leap Year Code Challenge.
/*
let leapYear = prompt("Enter year : ");
if ((leapYear % 4 === 0 && leapYear % 100 !== 0) || leapYear % 400 === 0) {
  alert("The year " + leapYear + " is a leap year.");
} else {
  alert("The year " + leapYear + " is not a leap year.");
}
*/

// Leap Year Code Challenge.
/*
function isLeap(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return year + " is a leap year";
  } else {
    return year + " is not a leap year";
  }
}
*/

// Collections Working with Javascript Arrays
/*
let guestList = ["Alice", "Bob", "Charlie", "David", "Eve"];

let guestName = prompt("What is your name?");

if (guestList.includes(guestName)) {
  alert("Welcome, " + guestName + "!");
} else {
  alert("Sorry, maybe next time.");
}
*/

// Adding Elements and Intermediate Array Techniques
/*
var output = [];
var count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  } else if (count % 3 === 0) {
    output.push("Fizz");
  } else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count);
  }
  count++;

  console.log(output);
}

fizzBuzz();
*/
