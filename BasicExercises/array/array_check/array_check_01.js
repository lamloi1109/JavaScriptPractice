// Xử lý mảng (array): kiểm tra phần tử có trong mảng không?
// ARRAY-CHECK-01: Kiểm tra có số chẵn lớn hơn n trong mảng không
// Viết hàm hasEvenNumberGreaterThanN(numberList, n) để kiểm tra trong mảng số numberList truyền
// vào có số chẵn mà lớn hơn n hay không?

// Array is empty
// number âm
// number === 0

export function hasEvenNumberGreaterThanN(numberList, number) {
  if (numberList.length === 0 || typeof number !== "number") {
    return false;
  }
  for (let index = 0; index < numberList.length; index++) {
    const element = numberList[index];
    if (element % 2 === 0 && element > number) return true;
  }
  return false;
}

export function hasEvenNumberGreaterThanNV2(numberList, number) {
  if (numberList.length === 0 || typeof number !== "number") {
    return false;
  }
  return numberList.some((n) => n % 2 === 0 && n > number);
}

export function hasEvenNumberGreaterThanNV3(numberList, number) {
  if (numberList.length === 0 || typeof number !== "number") {
    return false;
  }
  let result = false;
  numberList.forEach((element) => {
    if (element % 2 === 0 && element > number) result = true;
  });
  return result;
}
