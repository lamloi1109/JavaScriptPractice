// Bài 23: Đếm số lượng “ước số” của số nguyên dương n

export function countDivisorNumber(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return 0;

  let count = 0;

  for (let index = 1; index <= number; index++) {
    if (number % index === 0) count++;
  }

  return count;
}

export function countDivisorNumberV2(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return 0;

  return Array.from({ length: number })
    .map((number, index) => index + 1)
    .reduce((count, n) => {
      if (number % n === 0) count++;
      return count;
    }, 0);
}
