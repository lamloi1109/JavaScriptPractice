// Bài 51: Tìm chữ số lớn nhất của số nguyên dương n

function findMaxNumberOfN(number) {
  if (typeof number !== 'number' || number <= 0) return undefined;

  let remaining = number;
  let maxNumber = Number.MIN_SAFE_INTEGER;

  while (remaining > 0) {
    let lastNumber = remaining % 10;

    if (maxNumber < lastNumber) {
      maxNumber = lastNumber;
    }

    remaining = Math.trunc(remaining / 10);
  }
  return maxNumber;
}

console.log(findMaxNumberOfN(12345));
console.log(findMaxNumberOfN(14512));
console.log(findMaxNumberOfN(54231));

function findMaxNumberOfNV2(number) {
  if (typeof number !== 'number' || number <= 0) return undefined;

  let maxNumber = Number.MIN_SAFE_INTEGER;

  const numberList = number.toString().split('');

  return numberList.reduce((max, number) => {
    const n = Number.parseInt(number);
    if (max < n) {
      max = n;
    }
    return max;
  }, 0);
}

console.log(findMaxNumberOfNV2(12345));
console.log(findMaxNumberOfNV2(14512));
console.log(findMaxNumberOfNV2(54231));
