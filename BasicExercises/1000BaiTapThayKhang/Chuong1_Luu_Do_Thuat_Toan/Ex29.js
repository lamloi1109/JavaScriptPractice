// Bài 29: Tìm ước số lẻ lớn nhất của số nguyên dương n. Ví dụ n = 100 ước lẻ lớn nhất là 25

export function findDivisorOddNumberHighest(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return undefined;

  let maxDivisorOddNumber = Number.MIN_SAFE_INTEGER;

  for (let index = 1; index <= number; index++) {
    if (index % 2 !== 0 && number % index === 0 && index > maxDivisorOddNumber) {
      maxDivisorOddNumber = index;
    }
  }

  return maxDivisorOddNumber;
}
