// Bài 59: Hãy kiểm tra số nguyên dương n có phải là số đối xứng hay không
function isSymmetricNumber(number) {
  if (typeof number !== 'number' || number <= 0) {
    return undefined;
  }

  let remaining = number;
  let prevNumber = 0;

  while (remaining > 0) {
    let lastNumber = remaining % 10;
    prevNumber = prevNumber * 10 + lastNumber;
    remaining = Math.trunc(remaining / 10);
  }
  console.log(prevNumber, number);
  return prevNumber === number;
}

console.log(isSymmetricNumber(1221));
console.log(isSymmetricNumber(123321));
console.log(isSymmetricNumber(12121));
console.log(isSymmetricNumber(12123));

function isSymmetricNumberV2(number) {
  if (typeof number !== 'number' || number <= 0) {
    return undefined;
  }

  const numberList = number.toString().split('');

  let i = 0;
  let j = numberList.length - 1;
  while (i < j) {
    if (numberList[i] !== numberList[j]) {
      return false;
    }
  }
  return true;
}

console.log(isSymmetricNumberV2(1221));
console.log(isSymmetricNumberV2(123321));
console.log(isSymmetricNumberV2(12121));
console.log(isSymmetricNumberV2(12123));
