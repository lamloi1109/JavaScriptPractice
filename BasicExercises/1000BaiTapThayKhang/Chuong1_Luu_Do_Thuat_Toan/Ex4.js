// Bài 4: Tính S(n) = ½ + ¼ + … + 1/2n

export function sum(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 0.5;

  let sum = 0;

  for (let index = 1; index <= number; index++) {
    sum = sum + 1 / (2 * index);
  }

  return sum;
}

export function sumV2(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 0.5;

  return Array.from({ length: number })
    .map((number, index) => 1 / (2 * (index + 1)))
    .reduce((s, curr) => s + curr, 0);
}
