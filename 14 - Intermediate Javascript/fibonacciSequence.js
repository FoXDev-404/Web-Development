// fibonacci sequence using loop

function fibonacciGenerator(n) {
  var output = [];
  if (n === 1) {
    output = [0];
  } else if (n === 2) {
    output = [0, 1];
  } else {
    output = [0, 1];
    for (var i = 2; i < n; i++) {
      output.push(output[output.length - 2] + output[output.length - 1]);
    }
  }
  //   return output;
  console.log(output);
}

fibonacciGenerator(10); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34] n=10
