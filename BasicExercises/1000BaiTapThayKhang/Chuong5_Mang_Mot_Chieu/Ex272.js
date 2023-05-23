// Bài 272: Hãy xóa tất cả số lớn nhất trong mảng các số thực

function deleteMaxNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  let max = numberList.reduce((maxNumber, number) => {
    if (number > maxNumber) {
      maxNumber = number;
    }
    return maxNumber;
  }, Number.MIN_SAFE_INTEGER);

  const newArray = [];

  for (let index = 0; index < numberList.length; index++) {
    if (numberList[index] !== max) {
      newArray.push(numberList[index]);
    }
  }
  return newArray;
}

function deleteMaxNumberV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  let max = numberList.reduce((maxNumber, number) => {
    if (number > maxNumber) {
      maxNumber = number;
    }
    return maxNumber;
  }, Number.MIN_SAFE_INTEGER);

  return numberList.filter((number) => number !== max);
}

console.log(deleteMaxNumber([1, 2, 3, 3, 3, 3, 2, 1]));
console.log(deleteMaxNumberV2([1, 2, 3, 3, 3, 3, 2, 1]));

