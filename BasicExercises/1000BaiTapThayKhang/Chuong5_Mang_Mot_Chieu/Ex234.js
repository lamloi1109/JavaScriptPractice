// Bài 234: Cho 2 mảng a, b. Đếm số lượng giá trị chỉ xuất hiện 1 trong 2 mảng

export function countValueInAorB(arrA, arrB) {
  if (!Array.isArray(arrA) || arrA.length === 0) {
    return undefined;
  }

  if (!Array.isArray(arrB) || arrB.length === 0) {
    return undefined;
  }

  let count = 0;

  const length = arrA.length > arrB.length ? arrA.length : arrB.length;

  for (let index = 0; index < arrA.length; index++) {
    if (arrB.includes(arrA[index])) {
      count++;
    }
  }

  return length - count;
}
