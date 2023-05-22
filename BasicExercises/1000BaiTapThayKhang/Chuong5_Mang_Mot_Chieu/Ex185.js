// Bài 185: Hãy liệt kê các vị trí mà giá trị tại đó là số chính phương trong mảng 1 chiều các số nguyên

function isSquareNumber(number) {
  if (number === 1) return true;
  let squareNumber = Math.sqrt(number) * 10;
  return squareNumber % 10 === 0;
}

export function statisticsSquareNumberIndex(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const SquareNumberIndexList = [];

  numberList.forEach((number, index) => {
    if (isSquareNumber(number)) SquareNumberIndexList.push(index);
  });

  return SquareNumberIndexList;
}
