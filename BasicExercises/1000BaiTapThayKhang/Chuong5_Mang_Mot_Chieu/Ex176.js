// Bài 176: Hãy liệt kê các số âm trong mảng 1 chiều các số thựcs

function statisticsNegativeNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return numberList.filter((number) => number < 0);
}
