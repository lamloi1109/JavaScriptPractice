// Bài 142: Tìm giá trị nhỏ nhất trong mảng 1 chiều số thực

function findMinFloatNumber(floatNumberList) {
  if (!Array.isArray(floatNumberList) || floatNumberList.length === 0) {
    return undefined;
  }

  let minNumber = Number.MAX_SAFE_INTEGER;

  for (let index = 0; index < floatNumberList.length; index++) {
    const number = floatNumberList[index];
    if (number < minNumber) minNumber = number;
  }

  return minNumber;
}
