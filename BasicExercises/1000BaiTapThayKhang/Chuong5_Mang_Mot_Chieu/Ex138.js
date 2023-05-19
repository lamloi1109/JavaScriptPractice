// Bài 138: Tìm vị trí của giá trị chẵn đầu tiên trong mảng 1 chiều các số nguyên. Nếu mảng không có giá trị chẵn thì sẽ trả về -1

// Input: Mảng số nguyên
// Output: Vi trí đầu tiên của số có giá trị chẵn trong mảng

function findFirstEvenNumberIndex(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return -1;
  }

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (number > 0 && number % 2 === 0) return index;
  }

  return -1;
}

function findFirstEvenNumberIndexV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return -1;
  }

  for (let number of numberList) {
    if (number > 0 && number % 2 === 0) return index;
  }

  return -1;
}

// Đối với các dạng cần tìm thằng đầu tiêm thoả điều kiện thì không nên sử dụng forEach
// Vì forEach không thể break vòng lặp giữa chừng như for hay for of được

// function findFirstEvenNumberIndexV3(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) {
//     return -1;
//   }

//   let evenNumberIndex = -1;

//   numberList.forEach((number, index) => {
//     if (number > 0 && number % 2 === 0) {
//       evenNumberIndex = index;
//     }
//   });

//   return evenNumberIndex;
// }

function findFirstEvenNumberIndexV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return -1;
  }

  return numberList.findIndex((number) => number > 0 && number % 2 === 0) ?? -1;
}
