// Tính S(n) = ½ + 2/3 + ¾ + …. + n / n + 1
export function sum(number) {
  if (typeof number !== 'number') return undefined;

  let sum = 0;

  for (let index = 1; index <= number; index++) {
    sum = sum + index / (index + 1);
  }

  return sum;
}

export function sumV2(number) {
  if (typeof number !== 'number') return undefined;

  return Array.from({ length: number })
    .map((number, index) => {
      index = index + 1;
      return index / (index + 1);
    })
    .reduce((s, curr) => s + curr, 0);
}
