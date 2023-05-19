// Bài 169 (*): Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm số chẵn nhỏ nhất lớn hơn mọi giá trị có trong mảng

// [1,2,3,4,5,6,7,8]
// find Max -> Max Even -> Max + 2
// find Max -> Max Odd -> Max + 1

function findLowestEvenNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }
  let maxNumber = numberList.reduce((max, number) => {
    if (number > max) max = number;
    return max;
  }, Number.MIN_SAFE_INTEGER);
  return maxNumber % 2 === 0 ? maxNumber + 2 : maxNumber + 1;
}

console.log(findLowestEvenNumber([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Cho mảng 1 chiều các số nguyên. Hãy viết hàm tìm số chẵn lớn nhất nhỏ hơn mọi giá trị có trong mảng

function findHighestEvenNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }
  let minNumber = numberList.reduce((min, number) => {
    if (number < min) min = number;
    return min;
  }, Number.MAX_SAFE_INTEGER);
  return minNumber % 2 === 0 ? minNumber - 2 : minNumber - 1;
}

console.log(findHighestEvenNumber([3, 4, 5, 6, 7, 8, 9]));

