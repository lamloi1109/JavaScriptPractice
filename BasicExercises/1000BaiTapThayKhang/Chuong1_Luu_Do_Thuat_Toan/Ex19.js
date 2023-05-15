// Bài 19: Tính S(n) = 1 + x + x^3/3! + x^5/5! + … + x^(2n+1)/(2n+1)!
function sum(number, x) {
  if (typeof number !== 'number' || typeof x !== 'number') return undefined;

  if (number === 0) return 1;

  if (x === 0) return 0;

  let s = 1;

  for (let index = 1; index <= number; index++) {
    s = s + Math.pow(x, (2 * index + 1) / factorial(2 * index + 1));
  }

  return s;
}
