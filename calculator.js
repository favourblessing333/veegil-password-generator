const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function calculator3(numbers, op) {
  const nums = numbers.map(Number);

  switch (op) {
    case 'addition':
      return nums.reduce((a, b) => a + b, 0);
    case 'subtraction':
      return nums.reduce((a, b) => a - b);
    case 'multiplication':
      return nums.reduce((a, b) => a * b, 1);
    case 'division':
      return nums.reduce((a, b) => a / b);
    case 'average':
      return nums.reduce((a, b) => a + b, 0) / nums.length;
    case 'min':
      return Math.min(...nums);
    case 'max':
      return Math.max(...nums);
    case 'square':
      return nums[0] * nums[0]; // only first number
    case 'factorial':
      let n = nums[0]; // only first number
      if (n < 0) return "Error: Negative numbers don’t have factorial";
      let fact = 1;
      for (let i = 1; i <= n; i++) fact *= i;
      return fact;
    default:
      return 'Unsupported operation';
  }
}

rl.question("Enter numbers separated by space: ", function(input) {
  const numbers = input.trim().split(" ");
  rl.question("Enter your operator (addition, subtraction, multiplication, division, average, min, max, square, factorial): ", function(operation) {
    const result = calculator3(numbers, operation);
    console.log("Result: " + result);
    rl.close();
  });
});

