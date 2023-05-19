// Bài 123: Viết hàm tìm 1 vị trí mà giá trị tại vị trí đó là giá trị nhỏ nhất trong mảng 1 chiều các số nguyên

export function findMinNumberIndexInList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let minNumber = Number.MAX_SAFE_INTEGER;
  let minIndex = 0;

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (number < minNumber) {
      minNumber = number;
      minIndex = index;
    }
  }
  return minIndex;
}
export function findMinNumberIndexInListV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let minNumber = Number.MAX_SAFE_INTEGER;
  let minIndex = 0;
  let index = 0;
  for (let number of numberList) {
    if (number < minNumber) {
      minNumber = number;
      minIndex = index;
    }
    index++;
  }
  return minIndex;
}

export function findMinNumberIndexInListV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let minNumber = Number.MAX_SAFE_INTEGER;
  let minIndex = 0;

  numberList.forEach((number, index) => {
    if (number < minNumber) {
      minNumber = number;
      minIndex = index;
    }
  });

  return minIndex;
}

export function findMinNumberIndexInListV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let minIndex = 0;

  const minNumber = numberList.reduce((minNumber, number) => {
    if (number < minNumber) minNumber = number;
    return minNumber;
  }, Number.MAX_SAFE_INTEGER);

  return numberList.findIndex((number) => number === minNumber);
}
