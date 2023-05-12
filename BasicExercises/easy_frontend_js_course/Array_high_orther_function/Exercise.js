// Print number Even in array
// v1
function printEvenNumbers(array) {
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element % 2 === 0) console.log(element);
  }
}
printEvenNumbers([1, 2, 3, 4]);
// v2
function printEvenNumbers(array) {
  array.forEach((element) => {
    if (element % 2 === 0) console.log(element);
  });
}

printEvenNumbers([1, 2, 3, 4]);
// v3
function printEvenNumbers(array) {
  for (element of array) {
    if (element % 2 === 0) console.log(element);
  }
}

printEvenNumbers([1, 2, 3, 4]);
// v4

function printEvenNumbers(array) {
  array.map((element) => {
    if (element % 2 === 0) console.log(element);
  });
}

printEvenNumbers([1, 2, 3, 4]);
// v5

function printEvenNumbers(array) {
  array.filter((element) => {
    if (element % 2 === 0) console.log(element);
  });
}

printEvenNumbers([1, 2, 3, 4]);

// findMax
// for ... i
// forEach
// reduce
// v1
function findMax(array) {
  if (!Array.isArray(array) || array.length === 0) return undefined;

  let max = array[0];
  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (element > max) max = element;
  }
  return max;
}
console.log("Max", findMax([1, 2, 3, 4]));
// v2
function findMax(array) {
  if (!Array.isArray(array) || array.length === 0) return undefined;

  let max = array[0];
  array.forEach((element) => {
    if (element > max) max = element;
  });
  return max;
}
console.log("Max", findMax([1, 2, 3, 4]));

// v3
function findMax(array) {
  if (!Array.isArray(array) || array.length === 0) return undefined;

  let max = array[0];
  for (let element of array) {
    if (element > max) max = element;
  }
  return max;
}

console.log("Max", findMax([1, 2, 3, 4]));
// v4

function findMax(array) {
  if (!Array.isArray(array) || array.length === 0) return undefined;

  return array.reduce((max, curr) => (max < curr ? curr : max));
}

console.log("Max", findMax([1, 2, 3, 4]));

// Write a function to find the longest word
// for ... i
// forEach
// reduce
// ['easy','frontEnd','Developer','HTML']

// v1
function findTheLongestWord(array) {
  if (!Array.isArray(array) || array.length === 0) return undefined;
  let longestWord = array[0];
  for (let index = 1; index < array.length; index++) {
    const element = array[index];
    if (element.length > longestWord.length) longestWord = element;
  }

  return longestWord;
}
console.log(findTheLongestWordV2(["easy", "frontEnd", "Developer", "HTML"]));
// v2
function findTheLongestWordV2(array) {
  if (!Array.isArray(array) || array.length === 0) return undefined;
  let longestWord = array[0];

  for (let element of array) {
    if (element.length > longestWord.length) longestWord = element;
  }

  return longestWord;
}
console.log(
  "V2",
  findTheLongestWordV2(["easy", "frontEnd", "Developer", "HTML"])
);
// v3

function findTheLongestWordV3(array) {
  if (!Array.isArray(array) || array.length === 0) return undefined;

  return array.reduce((longestWord, currentWord) =>
    longestWord.length < currentWord.length ? currentWord : longestWord
  );
}
console.log(
  "V3",
  findTheLongestWordV3([
    "easy",
    "frontEnd",
    "Developer",
    "HTML",
    "dsadsdasdsadsads",
  ])
);

// Print number from a to b [a ... b]
// [1, 2, 3, 4, 5]
function printNumberInRange(array, a, b) {
  if (
    !Array.isArray(array) ||
    array.length === 0 ||
    Number.isNaN(a) ||
    Number.isNaN(b) ||
    b > array.length ||
    a > b ||
    a < 0 ||
    b < 0
  ) {
    throw new Error("Cannot print number because args is invalid");
  }

  //   for (let index = a; index < b; index++) {
  //     const element = array[index];
  //     console.log(element);
  //   }
  array.filter((element, index, array) => {
    if (index >= a && index <= b) {
      console.log(element);
    }
  });
}
printNumberInRange([1, 2, 3, 4, 5], 0, 5);
// Kiem tra so nguyen to
// Là số
// lớn hơn 1
// chia hết cho 1
// chia hết cho chính nó
// không chia hết cho số nào khác nữa
function isPrimeNumber(number) {
  if (Number.isNaN(number) || number < 1 || (number > 2 && number % 2 === 0))
    return false;
  if (number === 2) return true;
  for (let index = 3; index < Math.sqrt(number); index++) {
    if (number % index === 0) {
      return false;
    }
  }

  return true;
}

console.log("Kiểm tra số nguyên tố", isPrimeNumber(3));
// Liệt kê ước của số nguyên dương n
// a chia hết cho b -> a là bộ của b
// b là ước của a
// số nguyên dương
function printDivisorOfNumber(number) {
  for (let index = 1; index <= number; index++) {
    if (number % index === 0) console.log(index);
  }
}
printDivisorOfNumber(5);
// Kiểm tra số hoàn hảo
// Số nguyên dương
// Tổng ước nguyên dương bằng chính nó
// 6 = 1 + 2 + 3
function isPerfectNumber(number) {
  if (Number.isNaN(number) || number < 0) return false;
  let sum = 0;
  for (let index = 1; index < number; index++) {
    if (number % index === 0) sum = sum + index;
  }
  return sum === number;
}
console.log(isPerfectNumber(6));
// Kiểm tra mảng có chứa số nguyên tố hay không
function checkPrimeNumberInArray(array) {
  if (!Array.isArray(array) || array.length === 0) return false;
  for (let index = 0; index < array.length; index++) {
    if (isPrimeNumber(array[index])) return true;
  }
  return false;
}

console.log(checkPrimeNumberInArray([4, 6, 8, 10]));
// Kiểm tra mảng có phải đều là số hoàn hảo hay kh?
function checkPerfectNumberInArray(array) {
  if (!Array.isArray(array) || array.length === 0) return false;
  for (let index = 0; index < array.length; index++) {
    if (!isPerfectNumber(array[index])) return false;
  }
  return true;
}
console.log(checkPerfectNumberInArray([6, 28, 11]));
