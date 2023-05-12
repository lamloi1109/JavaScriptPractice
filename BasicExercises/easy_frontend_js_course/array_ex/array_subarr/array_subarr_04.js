// Tìm các mảng con có chứa số dương chẳn liên tiếp
// Viết hàm findAllPositiveEvenSubArr(numberList) để tìm ra tất cả các mảng con chỉ chứa các số dương
// chẳn

function isPositiveEvenNumber(number) {
  return number > 0 && number % 2 === 0;
}

// Lạc đề ~~!
// export function findAllPositiveEvenSubArr(numberList) {
//   if (!Array.isArray(numberList) || numberList.length === 0) {
//     return [];
//   }
//   const Arr = [];
//   let subArr = [];

//   for (let index = 1; index < numberList.length; index++) {
//     const afterNumber = numberList[index];
//     const number = numberList[index - 1];
//     if (isPositiveEvenNumber(number) && isPositiveEvenNumber(afterNumber)) {
//       subArr.push(number);
//     }

//     if (
//       isPositiveEvenNumber(number) &&
//       !isPositiveEvenNumber(afterNumber) &&
//       index - 2 > 0 &&
//       isPositiveEvenNumber(numberList[index - 2])
//     ) {
//       subArr.push(number);
//       Arr.push(subArr);
//       subArr = [];
//     }

//     if (index === numberList.length - 1 && isPositiveEvenNumber(afterNumber)) {
//       subArr.push(afterNumber);
//       Arr.push(subArr);
//     }
//   }

//   return Arr;
// }

export function findAllPositiveEvenSubArr(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const subArrList = [];
  let subArr = [];

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (isPositiveEvenNumber(number)) subArr.push(number);
    if ((subArr.length > 0 && !isPositiveEvenNumber(number)) || index === numberList.length - 1) {
      subArrList.push(subArr);
      subArr = [];
    }
  }

  return subArrList;
}
