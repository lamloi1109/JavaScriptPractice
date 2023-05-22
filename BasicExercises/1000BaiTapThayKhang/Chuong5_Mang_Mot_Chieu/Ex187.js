// Bài 187: Hãy liệt kê các vị trí mà giá trị tại các vị trí đó bằng giá trị dương nhỏ nhất trong mảng 1 chiều các số thực

export function statisticsIndex(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  let minPositiveNumber = Number.MAX_SAFE_INTEGER;
  let minPositiveNumberIndexList = [];

  numberList.forEach((number, index) => {
    if (minPositiveNumber === number) minPositiveNumberIndexList.push(index);
    if (number > 0 && number < minPositiveNumber) {
      minPositiveNumber = number;
      minPositiveNumberIndexList.push(index);
    }
  });

  return minPositiveNumberIndexList;
}
console.log(statisticsIndex([1, 2, 3, 1, 1]));
