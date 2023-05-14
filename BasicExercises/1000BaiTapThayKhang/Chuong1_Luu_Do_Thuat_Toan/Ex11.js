// Bài 11: Tính S(n) = 1 + 1.2 + 1.2.3 + … + 1.2.3….N

function sumFactorialNumber(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 0;

  if (number === 1) return 1;

  let s = 0;
  let n = 1;
  for (let index = 1; index <= number; index++) {
    n = n * index;
    s = s + n;
  }
  return s;
}

function factorial(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 0;

  if (number === 1) return 1;

  return number * factorial(number - 1);
}

function sumFactorialNumberv2(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 0;

  if (number === 1) return 1;

  return Array.from({ length: number })
    .map((number, index) => index + 1)
    .reduce((s, number) => {
      return s + factorial(number);
    }, 0);
}

console.log(sumFactorialNumberv2(3));
