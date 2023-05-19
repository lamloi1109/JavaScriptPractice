// Bài 156: Hãy tìm giá trị trong mảng các số thực gần giá trị x nhất

function findFloatNumber(floatNumberList, x) {
  if (!Array.isArray(floatNumberList) || floatNumberList.length === 0) {
    return undefined;
  }

  let min = Number.MAX_SAFE_INTEGER;

  for (let index = 0; index < floatNumberList.length; index++) {
    floatNumberList[index] = Math.abs(x - floatNumberList[index]);

    if (floatNumberList[index] < min) {
      min = floatNumberList[index];
    }
  }
  // unary plus ~~ Number()
  return +(x - min).toFixed(1);
}

console.log(findFloatNumber([0.1, 0.2, 0.3, 0.1, 0.2, 0.4, 0.5], 0.4));
