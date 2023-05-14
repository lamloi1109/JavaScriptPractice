// Bài 12: Tính S(n) = x + x^2 + x^3 + … + x^n

function sumPow(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 0;

  if (number === 1) return number;

  let sum = 0;

  for (let index = 1; index <= number; index++) {
    sum = sum + Math.pow(number, index);
  }

  return sum;
}

function sumPowV2(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 0;

  if (number === 1) return number;

  return Array.from({ length: number })
    .map((number, index) => index + 1)
    .reduce((sum, n) => sum + Math.pow(number, n), 0);
}

console.log(sumPowV2(3));
