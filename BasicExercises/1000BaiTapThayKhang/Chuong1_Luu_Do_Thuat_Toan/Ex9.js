// Bài 9: Tính T(n) = 1 x 2 x 3…x N
export function factorial(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 0;

  let factorialNumber = 1;

  for (let index = 1; index <= number; index++) {
    factorialNumber = factorialNumber * index;
  }
  return factorialNumber;
}

// Đệ Quy
export function factorialV2(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) {
    return 0;
  }

  if (number === 1) {
    return 1;
  }

  return number * factorialV2(number - 1);
}

export function factorialV3(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) {
    return 0;
  }

  if (number === 1) {
    return 1;
  }

  return Array.from({ length: number })
    .map((number, index) => index + 1)
    .reduce((factorialNumber, number) => factorialNumber * number, 1);
}