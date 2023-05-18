// Bài 27: Đếm số lượng “ước số chẵn” của số nguyên dương n

export function countDivisorEvenNumber(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return 0;

  let count = 0;

  for (let index = 1; index <= number; index++) {
    const isDivisorEvenNumber = index % 2 === 0 && number % index === 0;
    if (isDivisorEvenNumber) count++;
  }

  return count;
}

export function countDivisorEvenNumberV2(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return 0;

  return Array.from({ length: number })
    .map((number, index) => index + 1)
    .reduce((count, n) => {
      const isDivisorEvenNumber = n % 2 === 0 && number % n === 0;

      if (isDivisorEvenNumber) count++;
      return count;
    }, 0);
}
