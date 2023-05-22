// Bài 189: Hãy liệt kê các giá trị trong mảng 1 chiều các số nguyên có chữ số đầu tiên là chữ số lẻ

function getFirstNumber(number) {
  number = Math.abs(number);

  let numberToString = number.toString().split('');
  return Number.parseInt(numberToString[0]);
}

export function statisticsFirstOddNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const firstOddNumberList = [];

  numberList.forEach((number, index) => {
    if (getFirstNumber(number) % 2 !== 0) {
      firstOddNumberList.push(index);
    }
  });

  return firstOddNumberList;
}
