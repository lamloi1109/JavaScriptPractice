// Bài 136: Tìm số chẵn cuối cùng trong mảng 1 chiều các số nguyên. Nếu mảng không có giá trị chẵn thì trả về -1

// Phần tích:
// Mảng 1 chiều các số nguyên: All item > 0
// Có nhiều số chẵn -> số chẵn cuối cùng
// ko có số chẵn -> -1

// Mảng toàn số âm -> -1
// Mảng nguyên có 1 số chẵn
// Mảng nguyên ko có só chẵn
// Mảng nguyên có nhiều số chẵn
// Mảng nguyên toàn số chẵn

// Mảng nguyên toàn số lẻ -1

function findLastPositiveEvenNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return -1;
  }

  let lastEvenNumber = -1;

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    const needToFindPositiveEvenNumber = number > 0 && number % 2 === 0;
    if (needToFindPositiveEvenNumber) {
      lastEvenNumber = number;
    }
  }

  return lastEvenNumber;
}

function findLastPositiveEvenNumberV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return -1;
  }

  let lastEvenNumber = -1;

  for (let number of numberList) {
    const needToFindPositiveEvenNumber = number > 0 && number % 2 === 0;
    if (needToFindPositiveEvenNumber) {
      lastEvenNumber = number;
    }
  }

  return lastEvenNumber;
}

function findLastPositiveEvenNumberV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return -1;
  }

  let lastEvenNumber = -1;

  numberList.forEach((number) => {
    const needToFindPositiveEvenNumber = number > 0 && number % 2 === 0;
    if (needToFindPositiveEvenNumber) {
      lastEvenNumber = number;
    }
  });

  return lastEvenNumber;
}

function findLastPositiveEvenNumberV4(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    const needToFindPositiveEvenNumber = number > 0 && number % 2 === 0;

    return -1;
  }

  let lastEvenNumber = numberList.reduce((evenNumber, number) => {
    const needToFindPositiveEvenNumber = number > 0 && number % 2 === 0;

    if (needToFindPositiveEvenNumber) {
      evenNumber = number;
    }
    
    return evenNumber;
  }, -1);

  return lastEvenNumber;
}

console.log(findLastPositiveEvenNumberV4([1, 3, 5, 4, 6, 8]));
