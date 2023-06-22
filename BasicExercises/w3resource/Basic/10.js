// 10. Write a JavaScript program to calculate multiplication and division of two numbers (input from the user).
// multiplication
// division

function multiplication(a, b) {
  return a * b;
}

function division(a, b) {
  if (b === 0) {
    throw new Error('Exception Division by 0');
  }
  return a / b;
}

function calc(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return undefined;
  }
  console.log(multiplication(a, b));
  console.log(division(a, b));
}
calc(10, 0);
