// Bài 301: Cho biết mảng a có phải là mảng con của mảng b không

export function isAInB(arrA, arrB) {
  if (!Array.isArray(arrB) || arrB.length === 0) {
    return undefined;
  }

  if (!Array.isArray(arrA) || arrA.length === 0) {
    return undefined;
  }

  if (arrA.length > arrB.length) {
    return false;
  }

  for (let index = 0; index < arrA.length; index++) {
    if (!arrB.includes(arrA[index])) {
      return false;
    }
  }
  return true;
}

export function isAInBV2(arrA, arrB) {
  if (!Array.isArray(arrB) || arrB.length === 0) {
    return undefined;
  }

  if (!Array.isArray(arrA) || arrA.length === 0) {
    return undefined;
  }

  if (arrA.length > arrB.length) {
    return false;
  }

  return !arrA.some((number) => !arrB.includes(number));
}
