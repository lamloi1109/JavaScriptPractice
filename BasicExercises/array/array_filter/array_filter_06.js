// Tìm tất cả các số mà bắt đầu bằng chữ số lẻ
// Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số có chữ số đầu tiên là chữ số lẻ

function isOddNumber(number) {
  return number % 2 !== 0;
}

function hasFirstOddNumber(number) {
  let remaining = number;

  while (remaining > 0) {
    if (remaining <= 9) break;
    remaining = Math.trunc(remaining / 10);
  }

  return isOddNumber(remaining);
}

export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  let result = [];

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (hasFirstOddNumber(number)) result.push(number);
  }

  return result;
}

export function findAllNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  return numberList.filter(hasFirstOddNumber);
}
