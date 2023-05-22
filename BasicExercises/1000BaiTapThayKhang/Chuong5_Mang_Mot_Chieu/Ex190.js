// Bài 190: Hãy liệt kê các giá trị có toàn chữ số lẻ trong mảng 1 chiều các số nguyên

function isAllOddNumber(number) {
  number = Math.abs(number);

  let numberToString = number.toString().split('');
  return numberToString.every((number) => Number.parseInt(number) % 2 !== 0);
}

export function statisticsAllOddNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }
  return numberList.filter((number) => isAllOddNumber(number));
}
