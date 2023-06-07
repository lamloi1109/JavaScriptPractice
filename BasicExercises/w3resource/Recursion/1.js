// Write a JavaScript program to calculate the factorial of a number.
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
// For example, 5! = 5 x 4 x 3 x 2 x 1 = 120

// Factorial = Giai thừa
// Mathematics = Toán học

export function calculateFactorial(number) {
  if (typeof number !== 'number' || number < 0) {
    return undefined;
  }
  return factorial(number);
}

function factorial(number) {
  if (number === 0) {
    return 0;
  }

  if (number === 1) {
    return 1;
  }

  return number * factorial(number - 1);
}

console.log(calculateFactorial(5));
