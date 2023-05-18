// Bài 53: Hãy đếm số lượng chữ số lớn nhất của số nguyên dương n

function countMaxNumberOfN(number) {
  if (typeof number !== 'number' || number <= 0) return undefined;

  let remaining = number;
  let maxNumber = Number.MIN_SAFE_INTEGER;
  let count = 0;

  while (remaining > 0) {
    let lastNumber = remaining % 10;

    if (maxNumber < lastNumber) {
      maxNumber = lastNumber;
      count = 0;
    }

    if (lastNumber === maxNumber) {
      count++;
    }

    remaining = Math.trunc(remaining / 10);
  }
  return count;
}

console.log(countMaxNumberOfN(1233520545));
console.log(countMaxNumberOfN(5555));
console.log(countMaxNumberOfN(875180258));
