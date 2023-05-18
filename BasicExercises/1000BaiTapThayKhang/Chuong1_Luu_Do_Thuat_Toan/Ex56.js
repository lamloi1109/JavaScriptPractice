// Bài 56: Hãy kiểm tra số nguyên dương n có toàn chữ số lẻ hay không
function isAllOddNumberOfN(number) {
  if (typeof number !== 'number' || number <= 0) return undefined;

  let remaining = number;

  while (remaining > 0) {
    let lastNumber = remaining % 10;
    if (lastNumber % 2 === 0) {
      return false;
    }

    remaining = Math.trunc(remaining / 10);
  }
  return true;
}

console.log(isAllOddNumberOfN(1233520545));
console.log(isAllOddNumberOfN(5555));
console.log(isAllOddNumberOfN(8751802580));
