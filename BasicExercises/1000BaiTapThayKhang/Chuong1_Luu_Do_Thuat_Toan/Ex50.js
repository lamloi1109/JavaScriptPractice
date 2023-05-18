// Bài 50: Hãy tìm số đảo ngược của số nguyên dương n

function findReverseNumberOfN(number) {
  if (typeof number !== 'number' || number <= 0) return undefined;

  let remaining = number;
  let prevNumber = 0;

  while (remaining > 0) {
    let lastNumber = remaining % 10;
    prevNumber = prevNumber * 10 + lastNumber;
    remaining = Math.trunc(remaining / 10);
  }
  return prevNumber;
}

console.log(findReverseNumberOfN(54321));
console.log(findReverseNumberOfN(12345));
console.log(findReverseNumberOfN(1221));
console.log(findReverseNumberOfN(12123));

function findReverseNumberOfNV2(number) {
  if (typeof number !== 'number' || number <= 0) return undefined;

  const numberList = number.toString().split('').reverse();
  const reverseNumber = numberList.join('');
  
  return Number.parseInt(reverseNumber);
}

console.log(findReverseNumberOfNV2(54321));
console.log(findReverseNumberOfNV2(12345));
console.log(findReverseNumberOfNV2(1221));
console.log(findReverseNumberOfNV2(12123));
