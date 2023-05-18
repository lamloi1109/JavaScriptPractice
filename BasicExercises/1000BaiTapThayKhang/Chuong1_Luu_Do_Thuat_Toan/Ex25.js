// Bài 25: Tính tổng tất cả các “ước số chẵn” của số nguyên dương n

export function totalAllDivisorEvenNumber(number) {
  if (typeof number !== 'number') {
    return undefined;
  }

  if (number <= 0) {
    return 0;
  }

  let total = 0;

  for (let index = 1; index <= number; index++) {
    const isDivisorEvenNumber = index % 2 === 0 && number % index === 0;
    if (isDivisorEvenNumber) total += index;
  }

  return total;
}

export function totalAllDivisorEvenNumberV2(number) {
  if (typeof number !== 'number') {
    return undefined;
  }

  if (number <= 0) {
    return 0;
  }

  return Array.from({ length: number })
    .map((number, index) => index + 1)
    .reduce((total, n) => {
      if (n % 2 === 0 && number % n === 0) {
        total += n;
      }
      return total;
    }, 0);
}
