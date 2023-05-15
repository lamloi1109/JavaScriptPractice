// Bài 17: Tính S(n) = x + x^2/2! + x^3/3! + … + x^n/N!

function factorial(number) {
  if (number === 0) return 0;
  if (number === 1) return 1;

  return number * factorial(number - 1);
}

function sum(number, x) {
  if (typeof number !== 'number' || typeof x !== 'number') return undefined;

  if (x === 0) return 0;

  if (number === 0) return 1;

  let s = 0;

  for (let index = 1; index <= number; index++) {
    s = s + Math.pow(x, index/factorial(index));
  }

  return s;
}
console.log(sum(2, 2));
// 2^1 + 2^2/ (1 * 2)  