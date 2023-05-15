// Bài 18: Tính S(n) = 1 + x^2/2! + x^4/4! + … + x^2n/(2n)!

function factorial(number) {
  if (number === 0) return 0;

  if (number === 1) return 1;

  return number * factorial(number - 1);
}

function sum(number, x) {
  if (typeof number !== 'number' || typeof x !== 'number') return undefined;

  if (number === 0) return 1;

  if (x === 0) return 0;

  let s = 1;

  for (let index = 1; index <= number; index++) {
    s = s + Math.pow(x, (2 * index) / factorial(2 * index));
  }

  return s;
}

console.log(sum(2, 2));
console.log(1 + 2 + Math.pow(2, 4 / 24));

// 1 + 2 ^ 2 / 2! + 2^4/4!