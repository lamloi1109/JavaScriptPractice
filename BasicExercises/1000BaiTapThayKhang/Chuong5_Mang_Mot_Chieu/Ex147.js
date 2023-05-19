// Bài 147: Tìm số dương cuối cùng trong mảng số thực. Nếu mảng không có giá trị dương thì trả về  -1

function findLastPositiveNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return numberList.reduce((positiveNumber, number) => {
    if (number > 0) positiveNumber = number;
    return positiveNumber;
  }, -1);
}
console.log(findLastPositiveNumber([-0.1, -0.3, 0.4, 0.5]));
