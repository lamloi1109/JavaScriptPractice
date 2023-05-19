// Bài 175 (*): Cho mảng số thực có nhiều hơn 2 giá trị và các giá trị trong mảng khác nhau từng đôi một. Hãy viết hàm tìm 2 giá trị gần nhau nhất trong mảng (Lưu ý: Mảng có các giá trị khác nhau từng đôi một còn có tên là mảng phân biệt)

// Chênh lệch giữa các giá trị >= 0

function statisticsNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  let min = Number.MAX_SAFE_INTEGER;
  let result;
  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      const targetNumber = Math.abs(numberList[i] - numberList[j]);
      if (targetNumber < min) {
        min = targetNumber;
        result = [numberList[i], numberList[j]];
      }
    }
  }
  return result;
}

console.log(statisticsNumber([1, 2, 3, 5, 4, 10]));
