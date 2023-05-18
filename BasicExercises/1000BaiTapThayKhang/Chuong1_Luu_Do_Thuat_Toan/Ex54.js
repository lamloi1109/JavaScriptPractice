// Bài 54: Hãy đếm số lượng chữ số nhỏ nhất của số nguyên dương n

function countMinNumberOfN(number) {
  if (typeof number !== 'number' || number <= 0) return undefined;

  let remaining = number;
  let MinNumber = Number.MAX_SAFE_INTEGER;
  let count = 0;

  while (remaining > 0) {
    let lastNumber = remaining % 10;

    if (MinNumber > lastNumber) {
      MinNumber = lastNumber;
      count = 0;
    }

    if (lastNumber === MinNumber) {
      count++;
    }

    remaining = Math.trunc(remaining / 10);
  }
  return count;
}

console.log(countMinNumberOfN(1233520545));
console.log(countMinNumberOfN(5555));
console.log(countMinNumberOfN(8751802580));
