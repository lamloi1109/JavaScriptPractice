// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n

export function getSumOneToNumber(number) {
  if (typeof number !== 'number') return undefined;
  if (number <= 0) {
    return 0;
  }

  let sum = 0;

  for (let index = 1; index <= number; index++) {
    sum += index;
  }

  return sum;
}

// Công thức
export function getSumOneToNumberV2(number) {
  if (typeof number !== 'number') return undefined;
  if (number <= 0) {
    return 0;
  }

  return (number * (number + 1)) / 2;
}

export function getSumOneToNumberV3(number) {
  if (typeof number !== 'number') return undefined;
  if (number <= 0) {
    return 0;
  }

  return Array.from({ length: number })
    .map((number, index) => index + 1)
    .reduce((sum, curr) => sum + curr, 0);
}

export function getSumOneToNumberV4(number) {
  if (typeof number !== 'number') return undefined;
  if (number <= 0) {
    return 0;
  }

  return Array.from({ length: number })
    .map((number, index) => index + 1)
    .reduce((sum, curr) => {
      sum = sum + curr;
      return sum;
    });
}

