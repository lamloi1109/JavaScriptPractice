// Bài 186: Hãy liệt kê các vị trí trong mảng 1 chiều các số thực mà giá trị tại đó bằng giá trị âm đầu tiên trong mảng

export function statisticsIndex(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  let firstNegativeNumber;
  const result = [];
  numberList.forEach((number, index) => {
    if (firstNegativeNumber < 0 && firstNegativeNumber === number) {
      result.push(index);
    }
    if (number < 0 && firstNegativeNumber === undefined) {
      firstNegativeNumber = number;
      result.push(index);
    }
  });
  return result;
}

console.log(statisticsIndex([1, 3, -2, 4, 5, -3, -4, 3, -2]));
