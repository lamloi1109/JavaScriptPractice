// Bài 135: Viết hàm tìm giá trị dương đầu tiên trong mảng 1 chiều các số thực. Nếu mảng không có giá trị dương thì trả về -1

// Mảng toàn số âm
// Mảng toàn số dương
// Mảng có số dương ở cuối
// Mảng có số dương ở dầu
// Mảng có số dương ở giữa
// Mảng có nhiều số dương liền nhau


function findFirstPositiveNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (number > 0) return number;
  }
  return -1;
}

function findFirstPositiveNumberV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;

  for (let number of numberList) {
    if (number > 0) return number;
  }
  return -1;
}

function findFirstPositiveNumberV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return -1;

  return numberList.find((number) => number > 0) ?? -1;
}

console.log(findFirstPositiveNumberV3([-1, -2, -3, -7]));
