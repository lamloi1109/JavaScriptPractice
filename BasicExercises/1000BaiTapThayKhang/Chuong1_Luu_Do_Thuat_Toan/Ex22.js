// Bài 22:Tính tích tất cả các “ước số” của số nguyên dương n

export function calcMultipleDivisorOfNumber(number) {
  if (typeof number !== 'number') {
    return undefined;
  }
  if (number <= 0) return 0;

  let result = 1;

  for (let index = 1; index <= number; index++) {
    if (number % index === 0) total *= index;
  }

  return result;
}
