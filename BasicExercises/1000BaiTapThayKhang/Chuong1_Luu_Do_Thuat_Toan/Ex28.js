// Bài 28: Cho số nguyên dương n. Tính tổng các ước số nhỏ hơn chính nó

export function countDivisorLessThanNumber(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return 0;

  let count = 0;

  for (let index = 1; index < number; index++) {
    if (number % index === 0) count++;
  }

  return count;
}
