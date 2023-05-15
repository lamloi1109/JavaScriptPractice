// Bài 16: Tính S(n) = x + x^2/1 + 2 + x^3/1 + 2 + 3 + … + x^n/1 + 2 + 3 + …. + N

function sum(number, x) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 0;

  let s = 0;
  let s2 = 0;

  for (let index = 1; index <= number; index++) {
    s2 = s2 + index;
    s = s + Math.pow(x, number / s2);
  }
  return s;
}

console.log(sum(2, 2));
console.log(4 + Math.pow(2, 2 / 3));
// 2^2/1 + 2^2/3
