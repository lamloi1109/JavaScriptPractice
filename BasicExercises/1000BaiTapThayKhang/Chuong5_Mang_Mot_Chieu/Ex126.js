// Bài 126: Viết hàm tính tổng các giá trị âm trong mảng 1 chiều các số thực

function totalFloatNumberLessThanZero(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  let total = 0;

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (number < 0) {
      total += number;
    }
  }

  return total;
}
