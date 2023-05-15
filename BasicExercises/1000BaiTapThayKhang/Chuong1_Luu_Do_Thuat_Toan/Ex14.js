// Bài 14: Tính S(n) = x + x^3 + x^5 + … + x^2n + 1

function sumPow(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 0;

  if (number === 1) return number;

  let sum = 0;

  for (let index = 0; index <= number; index++) {
    sum = sum + Math.pow(number, 2*index + 1 );
  }

  return sum;
}

console.log(sumPow(3));
// 3 + 3^3 + 3^5 + 3^7