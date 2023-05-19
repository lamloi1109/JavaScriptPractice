// Bài 155: Hãy tìm giá trị trong mảng các số thực xa giá trị x nhất

// Giá trị xa nhất -> Hiệu của 2 số là lớn nhất bất kể a - b hay b - a

export function findFloatNumber(floatNumberList, x) {
  if (!Array.isArray(floatNumberList) || floatNumberList.length === 0) {
    return undefined;
  }

  let max = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < floatNumberList.length; index++) {
    floatNumberList[index] = Math.abs(x - floatNumberList[index]);

    if (floatNumberList[index] > max) {
      max = floatNumberList[index];
    }
  }
  // unary plus ~~ Number()
  return +(x - max).toFixed(1);
}

console.log(findFloatNumber([0.1, 0.2, 0.3, 0.1, 0.2, 0.4, 0.5], 0.4));
