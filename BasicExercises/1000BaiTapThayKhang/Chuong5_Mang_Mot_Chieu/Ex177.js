// Bài 177: Hãy liệt kê các số trong mảng 1 chiều các số thực thuộc đoạn [x, y] cho trước

function statisticsNumberInRange(numberList, a, b) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }
  if (a < 0 || b < 0) {
    return undefined;
  }
  if (a >= b) {
    return undefined;
  }

  return numberList.filter((number) => number >= a && number <= b);
}
