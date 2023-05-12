// Thống kê số lần xuất hiện của các số trong mảng
// Viết hàm statisticsNumbers(numberList) để thống kê số lần xuất hiện của các số trong mảng
// numberList.
// Đã từng làm rồi

function statisticsNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return {};

  return numberList.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});
}

console.log(statisticsNumbers([1, 1, 1, 2, 2, 3]));
// should return
// {
// 1: 3,
// 2: 2,
// 3: 1
// }
