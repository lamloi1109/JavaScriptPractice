// Bài 21: Tính tổng tất cả các “ ước số” của số nguyên dương n

export function totalDivisorOfNumber(number) {
  if (typeof number !== 'number') {
    return undefined;
  }
  if (number <= 0) return 0;

  let total = 0;

  for (let index = 1; index <= number; index++) {
    if (number % index === 0) total += index;
  }

  return total;
}

export function totalDivisorOfNumberV2(number) {
  if (typeof number !== 'number') {
    return undefined;
  }
  if (number <= 0) return 0;

  let total = 0;

  const numberList = Array.from({ length: number }).map((number, index) => index + 1);

  for (let n of numberList) {
    if (number % n === 0) total += n;
  }

  return total;
}

export function totalDivisorOfNumberV3(number) {
  if (typeof number !== 'number') {
    return undefined;
  }
  if (number <= 0) return 0;

  let total = 0;

  const numberList = Array.from({ length: number }).map((number, index) => index + 1);

  numberList.forEach((n) => {
    if (number % n === 0) total += n;
  });

  return total;
}

export function totalDivisorOfNumberV4(number) {
  if (typeof number !== 'number') {
    return undefined;
  }
  if (number <= 0) return 0;

  const numberList = Array.from({ length: number }).map((number, index) => index + 1);

  return numberList.reduce((sum, n) => {
    if (number % n === 0) sum += n;
    return sum;
  }, 0);
}
