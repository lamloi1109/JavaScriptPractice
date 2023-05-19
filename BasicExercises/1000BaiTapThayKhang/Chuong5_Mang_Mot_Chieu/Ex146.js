// Bài 146: Tìm giá trị âm đầu tiên trong mảng 1 chiều các số thực. Nếu mảng không có giá trị âm thì trả về -1

function findNegativeNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return numberList.find((number) => number < 0) ?? -1;
}
