// Tìm tất cả các số mà nó lớn hơn số đứng trước nó
// Viết hàm findNumbers(numberList) để tìm ra các số thoả điều kiện là lớn hơn số đứng trước nó (không
// tính số đầu tiên)

export function findNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length < 2) return [];

  let result = [];
  for (let index = 1; index < numberList.length; index++) {
    const afterNumber = numberList[index];
    const beforeNumber = numberList[index - 1];
    if (afterNumber > beforeNumber) result.push(afterNumber);
  }
  return result;
}

// export function findNumbersV2(numberList) {
//   if (!Array.isArray(numberList) || numberList.length < 2) return [];

//   return numberList.filter(
//     (number, index, numberList) => index++ < numberList.length &&  numberList[index] < numberList[++index]
//   );
// }
// console.log(findNumbersV2([2, 5, 3 ,7]));