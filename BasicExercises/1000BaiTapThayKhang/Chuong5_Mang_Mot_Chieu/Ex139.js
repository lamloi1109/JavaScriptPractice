// Bài 139: Tìm vị trí số hoàn thiện cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có số hoàn thiện thì trả về giá trị  -1
// find last index
// Số hoàn thiện -> perfectNumber -> Tổng các ước của nó bằng chính nó
// VD: 1 + 2 + 3 = 6 -> 6 là số hoàn thiện

// for i
// for of
// for each
// findIndex

function isPerfectNumber(number) {
  let total = 0;
  for (let index = 1; index < number; index++) {
    if (number % index === 0) total += index;
  }
  return number === total;
}

function findPerfectNumberLastIndex(numberList) {
  if (!Array.isArray(numberList) || numberList.numberList === 0) {
    return undefined;
  }

  let lastIndex = -1;

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (isPerfectNumber(number)) {
      lastIndex = index;
    }
  }

  return lastIndex;
}

console.log(findPerfectNumberLastIndex([1, 2, 3, 4, 5, 6, 7, 8, 9]));
