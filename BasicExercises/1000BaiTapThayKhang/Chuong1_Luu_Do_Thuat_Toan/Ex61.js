// Bài 61: Hãy kiểm tra các chữ số của số nguyên dương n có giảm dần từ trái sang phải hay không

function isDeCreasingNumber(number) {
  if (typeof number !== 'number' || number <= 0) {
    return undefined;
  }

  let remaining = number;
  let prevNumber = Number.MIN_SAFE_INTEGER;

  while (remaining > 0) {
    let lastNumber = remaining % 10;
    if (prevNumber >= lastNumber) {
      return false;
    }
    prevNumber = lastNumber;
    remaining = Math.trunc(remaining / 10);
  }
  return true;
}

console.log(isDeCreasingNumber(123));
console.log(isDeCreasingNumber(321));
console.log(isDeCreasingNumber(222));
console.log(isDeCreasingNumber(111));
