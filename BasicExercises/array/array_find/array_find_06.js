// Tìm số chính phương cuối cùng trong mảng
// Viết hàm findLastPerfectSquare(numberList) để tìm ra số chính phương cuối cùng trong mảng
// numberList

// numberList is not an array
// numberList is empty array
// numberList does not have perfect square number
// numberList has perfect square number

function isPerfectSquareNumber(number) {
  // Số chính phương là số lấy căn bậc 2 -> số tự nhiên -> kiểm tra số có phải là số tự nhiên hay không
  const perfectSquareNumber = Math.sqrt(number) * 10;
  return perfectSquareNumber % 10 === 0;
}

export function findLastPerfectSquare(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let lastPerfectSquare;

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (isPerfectSquareNumber(number)) lastPerfectSquare = number;
  }

  return lastPerfectSquare;
}

export function findLastPerfectSquareV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let lastPerfectSquare;

  for (let number of numberList) {
    if (isPerfectSquareNumber(number)) lastPerfectSquare = number;
  }

  return lastPerfectSquare;
}

export function findLastPerfectSquareV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  for (let index = numberList.length - 1; index > 0; index--) {
    const number = numberList[index];
    if (isPerfectSquareNumber(number)) return number;
  }

  return undefined;
}
export function findLastPerfectSquareV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  return numberList.reverse().find(isPerfectSquareNumber);
}
