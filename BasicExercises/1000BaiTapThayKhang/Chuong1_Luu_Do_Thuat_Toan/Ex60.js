// Bài 60: Hãy kiểm tra các chữ số của số nguyên dương n có tăng dần từ trái sang phải hay không
function isInCreasingNumber(number) {
  if (typeof number !== 'number' || number <= 0) {
    return undefined;
  }

  let remaining = number;
  let prevNumber = Number.MAX_SAFE_INTEGER;

  while (remaining > 0) {
    let lastNumber = remaining % 10;
    if (prevNumber <= lastNumber) {
      return false;
    }
    prevNumber = lastNumber;
    remaining = Math.trunc(remaining / 10);
  }
  return true;
}

console.log(isInCreasingNumber(123));
console.log(isInCreasingNumber(321));
console.log(isInCreasingNumber(222));
console.log(isInCreasingNumber(111));
