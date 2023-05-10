// Tìm tất cả các số bằng với số dương chẳn đầu tiên trong mảng
// Viết hàm findAllNumbers(numberList) để tìm ra tất cả các số bằng với số dương chẳn đầu tiên trong
// mảng.
// Trường hợp mảng không có số dương chẳn thì trả về mảng rỗng.
// Mảng kết quả không bao gồm số dương chẵn đầu tiên.

export function findAllNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return [];
  }
  let evenNumberList = [];
  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (number > 0 && number % 2 === 0) {
      evenNumberList.push(number);
    }
  }
  return [...evenNumberList.slice(1, evenNumberList.length)];
}

export function findAllNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return [];
  }
  let evenNumberList = [];
  for (var index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (number > 0 && number % 2 === 0) {
      index++;
      break;
    }
  }
  for (; index < numberList.length; index++) {
    const number = numberList[index];
    if (number > 0 && number % 2 === 0) {
      evenNumberList.push(number);
    }
  }
  return evenNumberList;
}

export function findAllNumbersV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return [];
  }

  let firstEvenNumberIndex = numberList.findIndex((number) => number > 0 && number % 2 === 0);

  return numberList.filter(
    (number, index) => number > 0 && number % 2 === 0 && index !== firstEvenNumberIndex
  );
}
