// Bài 174 (*): Cho mảng số thực có nhiều hơn 2 giá trị và các giá trị trong mảng khác nhau từng đôi một.
// Hãy viết hàm liệt kê tất cả các cặp giá trị (a, b) trong mảng thỏa điều kiện a <= b

// numberList.length > 2
// [a, b, c, d] -> a != b, a != c, a != d, b != c, b != d, c != d

function statisticsCoupleNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 3) {
    return undefined;
  }

  const result = [];

  for (let i = 0; i < numberList.length - 1; i++) {
    for (let j = i + 1; j < numberList.length; j++) {
      if (numberList[i] <= numberList[j]) result.push([numberList[i], numberList[j]]);
    }
  }
  return result;
}

console.log(statisticsCoupleNumber([1, 2, 3, 4, 5]));
