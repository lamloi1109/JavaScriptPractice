// 5. Write a JavaScript program to compute the exponent of a number.
// Note : The exponent of a number says how many times the base number is used as a factor.
// 82 = 8 x 8 = 64. Here 8 is the base and 2 is the exponent.

function exponent(number, compute) {
  if (compute === 0) {
    return 1;
  }
  return number * exponent(number, compute - 1);
}
console.log(exponent(8, 2));
