// Bài 15: Tính S(n) = 1 + 1/1 + 2 + 1/ 1 + 2 + 3 + ….. + 1/ 1 + 2 + 3 + …. + N

function sum(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 1;

  let s = 0;
  let x = 0;
  for (let index = 1; index <= number; index++) {
    x = x + index;
    s = s + 1 / x;
  }
  return s;
}

console.log(sum(3));
console.log(1 + 1 / (1 + 2) + 1 / (1 + 2 + 3));
