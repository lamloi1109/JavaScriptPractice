// Bài 26: Tính tích tất cả các “ước số lẻ” của số nguyên dương n

export function totalAllDivisorOddNumber(number) {
  if (typeof number !== 'number') {
    return undefined;
  }

  if (number <= 0) {
    return 0;
  }

  let total = 0;

  for (let index = 1; index <= number; index++) {
    const isDivisorOddNumber = index % 2 !== 0 && number % index === 0;
    if (isDivisorOddNumber) total += index;
  }

  return total;
}

export function totalAllDivisorOddNumberV2(number) {
  if (typeof number !== 'number') {
    return undefined;
  }

  if (number <= 0) {
    return 0;
  }

  return Array.from({ length: number })
    .map((number, index) => index + 1)
    .reduce((total, n) => {
      if (n % 2 !== 0 && number % n === 0) {
        total += n;
      }
      return total;
    }, 0);
}
