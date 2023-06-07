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