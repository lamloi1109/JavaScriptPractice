// Bài 137: Tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1 chiều các số thực

// Phân tích:
// Input: Mảng số thực
// Output -> min float number index in list

// Mảng toàn số nguyên
// Mảng số thực nhưng tất cả đều có giá trị giống nhau
// Mảng số thực: Số nhỏ nhất ở cuối
// Mảng số thực: Số nhỏ nhất ở đầu
// Mảng số thực: số nhỏ nhất ở giữa

function findMinFloatNumberIndex(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return -1;
  }

  let minFloatNumberIndex = -1;
  let minFloatNumber = Number.MAX_SAFE_INTEGER;

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (number < minFloatNumber) {
      minFloatNumber = number;
      minFloatNumberIndex = index;
    }
  }

  return minFloatNumberIndex;
}

function findMinFloatNumberIndexV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return -1;
  }

  let minFloatNumberIndex = -1;
  let minFloatNumber = Number.MAX_SAFE_INTEGER;
  let index = 0;
  for (let number of numberList) {
    if (number < minFloatNumber) {
      minFloatNumber = number;
      minFloatNumberIndex = index;
    }
    index++;
  }

  return minFloatNumberIndex;
}

function findMinFloatNumberIndexV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return -1;
  }

  let minFloatNumberIndex = -1;
  let minFloatNumber = Number.MAX_SAFE_INTEGER;

  numberList.forEach((number, index) => {
    if (number < minFloatNumber) {
      minFloatNumber = number;
      minFloatNumberIndex = index;
    }
  });

  return minFloatNumberIndex;
}

function findMinFloatNumberIndexV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return -1;
  }

  let minFloatNumberIndex = -1;
  let index = 0;
  numberList.reduce((minFloatNumber, number) => {
    if (number < minFloatNumber) {
      minFloatNumber = number;
      minFloatNumberIndex = index;
    }
    index++;
    return minFloatNumber;
  }, Number.MAX_SAFE_INTEGER);

  return minFloatNumberIndex;
}

console.log(findMinFloatNumberIndex([0.2, 0.2, 0.2, 0.2, 0.2]));
console.log(findMinFloatNumberIndexV2([0.3, 0.4, 0.5, 0.1, 0.2]));
console.log(findMinFloatNumberIndexV3([0.3, 0.4, 0.5, 0.1, 0.2]));
console.log(findMinFloatNumberIndexV4([0.3, 0.4, 0.5, 0.1, 0.2]));
