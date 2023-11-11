// Control Statements While Loops
/*
var output = [];
var count = 1;

function fizzBuzz() {
  while (count <= 100) {
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
  }
  console.log(output);
}

fizzBuzz(); // Function Call..
*/

//Printing the lyrics of the song "99 Bottles of Beer" using while loop.
let bottles = 99;

while (bottles > 0) {
  if (bottles === 1) {
    console.log(bottles + " bottle of beer on the wall,");
    console.log(bottles + " bottle of beer.");
  } else {
    console.log(bottles + " bottles of beer on the wall,");
    console.log(bottles + " bottles of beer.");
  }

  console.log("Take one down, pass it around,");

  bottles--;

  if (bottles === 1) {
    console.log(bottles + " bottle of beer on the wall.\n");
  } else if (bottles === 0) {
    console.log("No more bottles of beer on the wall.");
  } else {
    console.log(bottles + " bottles of beer on the wall.\n");
  }
}
