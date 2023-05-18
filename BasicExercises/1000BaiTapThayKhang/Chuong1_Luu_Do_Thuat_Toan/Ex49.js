// Bài 49: Cho số nguyên dương n. Hãy tìm chữ số đầu tiên của n

function findFirstNumberOfN(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return 1;

  let remaining = number;
  let prevNumber = 0;

  while (remaining > 0) {
    prevNumber = remaining % 10;
    remaining = Math.trunc(remaining / 10);
  }

  return prevNumber;
}

console.log(findFirstNumberOfN(5421));

function findFirstNumberOfNV2(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return 1;

  const numberList = number.toString().split('');
  return Number.parseInt(numberList[0]);
}

console.log(findFirstNumberOfNV2(5421));
