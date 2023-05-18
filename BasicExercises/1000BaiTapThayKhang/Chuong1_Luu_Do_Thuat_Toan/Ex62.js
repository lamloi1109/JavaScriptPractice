// Bài 62: Cho 2 số nguyên dương a và b. Hãy tìm ước chung lớn nhất của 2 số này.

// Khái niệm ước
// Khái niệm UCLN

function findUCLN(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return undefined;
  }

  let max = Number.MIN_SAFE_INTEGER;
  let length = a >= b ? a : b;
  for (let index = 1; index <= length; index++) {
    if (a % index === 0 && b % index === 0 && max < index) {
      max = index;
    }
  }
  return max;
}

console.log(findUCLN(18, 30));
console.log(findUCLN(174, 18));
console.log(findUCLN(124, 16));


