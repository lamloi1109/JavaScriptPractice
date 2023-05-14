// Bài 13: Tính S(n) = x^2 + x^4 + … + x^2n
function sumPow(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 0;

  if (number === 1) return number;

  let sum = 0;

  for (let index = 1; index <= number; index++) {
    sum = sum + Math.pow(number, 2 * index);
  }

  return sum;
}

