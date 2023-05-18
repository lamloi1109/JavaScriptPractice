// Bài 52: Tìm chữ số nhỏ nhất của số nguyên dương n

function findMinNumberOfN(number) {
  if (typeof number !== 'number' || number <= 0) return undefined;

  let remaining = number;
  let MinNumber = Number.MAX_SAFE_INTEGER;

  while (remaining > 0) {
    let lastNumber = remaining % 10;

    if (MinNumber > lastNumber) {
      MinNumber = lastNumber;
    }

    remaining = Math.trunc(remaining / 10);
  }
  return MinNumber;
}

console.log(findMinNumberOfN(12345));
console.log(findMinNumberOfN(14512));
console.log(findMinNumberOfN(54231));

function findMinNumberOfNV2(number) {
  if (typeof number !== 'number' || number <= 0) return undefined;

  let MinNumber = Number.MAX_SAFE_INTEGER;

  const numberList = number.toString().split('');

  return numberList.reduce((Min, number) => {
    const n = Number.parseInt(number);
    if (Min > n) {
      Min = n;
    }
    return Min;
  }, MinNumber);
}

console.log(findMinNumberOfNV2(12345));
console.log(findMinNumberOfNV2(14512));
console.log(findMinNumberOfNV2(54231));
