// Bài 24: Liệt kê tất cả các “ước số lẻ” của số nguyên dương n

export function statisticsDivisorOddNumber(number) {
  if (typeof number !== 'number') {
    return undefined;
  }

  if (number <= 0) {
    return [];
  }

  const divisorOddNumberList = [];

  for (let index = 1; index <= number; index++) {
    if (index % 2 !== 0 && number % index === 0) divisorOddNumberList.push(index);
  }

  return divisorOddNumberList;
}

export function statisticsDivisorOddNumberV2(number) {
  if (typeof number !== 'number') {
    return undefined;
  }

  if (number <= 0) {
    return [];
  }

  return Array.from({ length: number })
    .map((number, index) => index + 1)
    .filter((n) => n % 2 !== 0 && number % n === 0);
}
