// Bài 8: Tính S(n) = ½ + ¾ + 5/6 + … + 2n + 1/ 2n + 2
export function sum(number) {
  if (typeof number !== 'number') return undefined;

  let sum = 0;

  for (let index = 0; index < number; index++) {
    sum = sum + (2 * index + 1) / (2 * index + 2);
  }

  return sum;
}

export function sumV2(number) {
  if (typeof number !== 'number') return undefined;

  return Array.from({ length: number })
    .map((number, index) => {
      return (2 * index + 1) / (2 * index + 2);
    })
    .reduce((s, curr) => s + curr, 0);
}
