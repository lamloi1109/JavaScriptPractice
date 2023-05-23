// Bài 271: Xóa các phần tử có chỉ số k trong mảng

function deleteElementByIndex(numberList, index) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  if (index < 0 || index > numberList.length) {
    return undefined;
  }

  for (let i = index + 1; i < numberList.length; i++) {
    numberList[i - 1] = numberList[i];
  }
  numberList.length = numberList.length - 1;
  return numberList;
}

function deleteElementByIndexV2(numberList, index) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  if (index < 0 || index > numberList.length) {
    return undefined;
  }
  numberList.splice(index, 1);
  return numberList;
}

console.log(deleteElementByIndex([1, 2, 3, 4, 5], 4));
console.log(deleteElementByIndexV2([1, 2, 3, 4, 5], 4));
