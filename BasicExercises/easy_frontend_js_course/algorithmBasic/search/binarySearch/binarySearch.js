// require: mảng đã được sắp xếp giảm dần hoặc tăng dần
// Chia đôi mảng cho đến khi tìm được phần tử
function binarySearch(numberList, targetNumber) {
  if (!Array.isArray(numberList) || numberList.length === 0 || !Number.isInteger(targetNumber)) {
    return -1;
  }

  let left = 0;
  let right = numberList.length - 1;

  while (left <= right) {
    let mid = left + Math.trunc((right - left) / 2);
    if (numberList[mid] === targetNumber) return mid;
    if (numberList[mid] < targetNumber) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

function binarySearchRecursion(numberList, targetNumber, left, right) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return -1;
  }

  if (left > right) {
    return -1;
  }

  let mid = left + Math.trunc((right - left) / 2);

  if (numberList[mid] === targetNumber) {
    return mid;
  }

  if (targetNumber > numberList[mid]) {
    return binarySearchRecursion(numberList, targetNumber, mid + 1, right);
  }

  return binarySearchRecursion(numberList, targetNumber, left, mid - 1);
}

const numberList = [1, 2, 3, 4, 5, 6, 7];
console.log(binarySearchRecursion(numberList, 5, 0, numberList.length - 1));
