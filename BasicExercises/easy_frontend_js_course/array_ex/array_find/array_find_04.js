// Tìm số âm lẻ cuối cùng trong mảng
// Viết hàm findLastNegativeOdd(numberList) để tìm ra số âm lẻ cuối cùng trong mảng numberList

// numberList is not an array
// numberList is empty array

// NumberList does not have positive number
// NumberList does not have even number
// NumberList has negative odd numbers

function isNegativeOddNumber(number) {
  return number < 0 && number % 2 !== 0;
}

export function findLastNegativeOdd(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let lastNegativeOddNumber;

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (isNegativeOddNumber(number)) lastNegativeOddNumber = number;
  }
  return lastNegativeOddNumber;
}

export function findLastNegativeOddV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let lastNegativeOddNumber;

  for (let number of numberList) {
    if (isNegativeOddNumber(number)) lastNegativeOddNumber = number;
  }
  return lastNegativeOddNumber;
}

export function findLastNegativeOddV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let lastNegativeOddNumber;

  numberList.forEach((number) => {
    if (isNegativeOddNumber(number)) lastNegativeOddNumber = number;
  });

  return lastNegativeOddNumber;
}

export function findLastNegativeOddV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  for (let index = numberList.length - 1; index > 0; index--) {
    const number = numberList[index];
    if (isNegativeOddNumber(number)) return number;
  }
  return undefined;
}

export function findLastNegativeOddV5(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  return numberList.reverse().find(isNegativeOddNumber);
}

export function findLastNegativeOddV6(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  return  numberList.reverse().filter(isNegativeOddNumber)[0];
}
