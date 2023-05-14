// Bài 5: Tính S(n) = 1 + 1/3 + 1/5 + … + 1/(2n + 1)
export function sum(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 2;

  let sum = 1;

  for (let index = 1; index <= number; index++) {
    sum = sum + 1 / (2 * index + 1);
  }

  return sum;
}

export function sumV2(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 2;

  return Array.from({ length: number })
    .map((number, index) => {
      index = index + 1;
      return 1 / (2 * index + 1);
    })
    .reduce((s, curr) => s + curr, 1);
}

