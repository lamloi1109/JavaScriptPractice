// Bài 86: Tính S(n) = 1^3 + 2^3 + … + N^3

// for i
// for of
// for each
// reduce
function calcS(number) {
  if (typeof number !== 'number') {
    return undefined;
  }

  let sum = 0;

  if (number === 0) return sum;

  for (let index = 1; index <= number; index++) {
    sum += Math.pow(index, 3);
  }

  return sum;
}
