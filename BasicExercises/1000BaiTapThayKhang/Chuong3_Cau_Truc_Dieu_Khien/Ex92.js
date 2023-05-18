// Bài 92: Tìm ước số chung lớn nhất của 2 số nguyên dương

function findDivisorHighest(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') return undefined;

  const numberSize = a >= b ? a : b;

  let max = Number.MIN_SAFE_INTEGER;

  for (let index = 1; index <= numberSize; index++) {
    if (a % index === 0 && b % index === 0 && index > max) {
      max = index;
    }
  }

  return max;
}

console.log(findDivisorHighest(12, 30));
