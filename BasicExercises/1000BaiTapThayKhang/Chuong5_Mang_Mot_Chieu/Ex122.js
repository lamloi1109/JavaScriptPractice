// Bài 122: Viết hàm tìm giá trị lớn nhất trong mảng 1 chiều các số thực

export function findMaxFloatNumberInList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let maxNumber = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (number > maxNumber) maxNumber = number;
  }

  return maxNumber;
}

export function findMaxFloatNumberInListV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let maxNumber = Number.MIN_SAFE_INTEGER;

  for (let number of numberList) {
    if (number > maxNumber) maxNumber = number;
  }
  return maxNumber;
}

export function findMaxFloatNumberInListV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let maxNumber = Number.MIN_SAFE_INTEGER;

  numberList.forEach((number) => {
    if (number > maxNumber) maxNumber = number;
  });

  return maxNumber;
}

export function findMaxFloatNumberInListV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  return numberList.reduce((maxNumber, number) => {
    if (number > maxNumber) maxNumber = number;
    return maxNumber;
  }, Number.MIN_SAFE_INTEGER);
}
