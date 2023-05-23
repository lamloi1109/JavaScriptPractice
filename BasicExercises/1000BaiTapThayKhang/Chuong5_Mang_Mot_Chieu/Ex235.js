// Bài 235: Cho 2 mảng a, b. Liệt kê các giá trị chỉ xuất hiện 1 trong 2 mảng

// 1 2 3
// 1 4 5

function printValueInAorB(arrA, arrB) {
  if (!Array.isArray(arrA) || arrA.length === 0) {
    return undefined;
  }
  if (!Array.isArray(arrB) || arrB.length === 0) {
    return undefined;
  }

  for (let index = 0; index < arrA.length; index++) {
    if (!arrB.includes(arrA[index])) {
      console.log(arrA[index]);
    }
  }

  for (let index = 0; index < arrB.length; index++) {
    if (!arrA.includes(arrB[index])) {
      console.log(arrB[index]);
    }
  }
}

printValueInAorB([1, 2, 3], [1, 4, 5]);
