// Bài 150: Hãy tìm giá trị âm lớn nhất trong mảng 1 chiều các số thực. Nếu mảng không có giá trị âm thì trả về  -1

function findMaxNegativeFloatNumber(floatNumberList) {
  if (!Array.isArray(floatNumberList) || floatNumberList.length === 0) {
    return undefined;
  }

  return floatNumberList.reduce((maxNegativeNumber, number) => {
    if (number < 0 && number > maxNegativeNumber) maxNegativeNumber = number;
    return maxNegativeNumber;
  }, Number.MIN_SAFE_INTEGER) ?? -1;
}
