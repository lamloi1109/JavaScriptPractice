// Bài 178: Hãy liệt kê các số chẵn trong mảng 1 chiều các số nguyên thuộc đoạn [x, y] cho trước (x, y là các số nguyên)

function statisticsEvenNumberInRange(numberList, a, b) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  if (a < 0 || b < 0) {
    return undefined;
  }

  if (a >= b) {
    return undefined;
  }

  return numberList.filter((number) => number >= a && number <= b && number % 2 === 0);
}
