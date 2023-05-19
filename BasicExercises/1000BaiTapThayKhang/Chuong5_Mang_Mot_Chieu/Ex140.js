// Bài 140: Hãy tìm giá trị dương nhỏ nhất trong mảng 1 chiều các số thực. Nếu mảng không có giá trị dương thì sẽ trả về -1

// find element
// positive
// min
// float number List

function findMinPositiveFloatNumber(floatNumberList) {
  if (!Array.isArray(floatNumberList) || floatNumberList.length === 0) {
    return undefined;
  }
  return floatNumberList.reduce((minNumber, number) => {
    if (number > 0 && minNumber > number) {
      minNumber = number;
    }
    return minNumber;
  }, Number.MAX_SAFE_INTEGER) ?? -1;
}
