// Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.

// Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

// console.log(solveQuadratic()) // {0}
// console.log(solveQuadratic(1, 4, 4)) // {-2}
// console.log(solveQuadratic(1, -1, -2)) // {2, -1}
// console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
// console.log(solveQuadratic(1, 0, -4)) //{2, -2}
// console.log(solveQuadratic(1, -1, 0)) //{1, 0}
// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  array.forEach((element) => {
    console.log(element);
  });
}

printArray([1, 3, 4, 5, 6, 7, 8]);

// Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.

function showDateTime() {
  const date = new Date();
  const year = date.getFullYear();
  let month = date.getMonth();
  month = ('0' + (month + 1)).slice(-2);
  const day = date.getDate();
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${day}/${month}/${year} ${hour}:${minutes}`;
}
console.log(showDateTime());

// showDateTime()
// 08/01/2020 04:08
// Declare a function name swapValues. This function swaps value of x to y.

function swapValues(x, y) {
  let tmp = x;
  x = y;
  y = tmp;
}

function swapValuesV2(x, y) {
  x = x + y;
  y = x - y;
  x = x - y;
  console.log(x, y);
}

let a = 10;
let b = 5;

console.log(a, b);
swapValuesV2(a, b);

function swapValuesV3(x, y) {
  [x, y] = [y, x];
}

function swapValuesV4(x, y) {
  x = x ^ y;
  y = x ^ y;
  x = x ^ y;
  console.log(x, y);
}

swapValuesV4(1, 2);
// swapValues(3, 4) // x => 4, y=>3
// swapValues(4, 5) // x = 5, y = 4
// Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

function reverseArray(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  const newArray = [];

  for (let index = array.length - 1; index >= 0; index--) {
    newArray.push(array[index]);
  }

  return newArray;
}

console.log(reverseArray([1, 2, 3, 4, 5]));
// //[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']));
// //['C', 'B', 'A']
// Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.

function capitalizeArray(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  return array.map((element) => element.toUpperCase());
}

console.log(capitalizeArray(['lam', 'phuoc', 'loi']));
// Declare a function name addItem. It takes an item parameter and it returns an array after adding the item

function addItem(item, array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  array.push(item);
  return array;
}

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

function removeItem(index, array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  if (index < 0 || index > array.length - 1) {
    return undefined;
  }

  array.splice(index, 1);
  return array;
}

console.log(removeItem(2, [1, 2, 3, 4]));

function removeItemV2(index, array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  if (index < 0 || index > array.length - 1) {
    return undefined;
  }

  for (let i = array.length - 1; i > index; i--) {
    array[i - 1] = array[i];
  }
  array.length = array.length - 1;
  return array;
}

console.log(removeItemV2(2, [1, 2, 3, 4]));

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

// Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

// evensAndOdds(100);
// The number of odds are 50.
// The number of evens are 51.
// Write a function which takes any number of arguments and return the sum of the arguments

// sum(1, 2, 3) // -> 6
// sum(1, 2, 3, 4) // -> 10

function sum(...args) {
  let s = 0;

  for (let index = 0; index < args.length; index++) {
    const number = args[index];
    s += number;
  }
  return s;
}

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3));

// Writ a function which generates a randomUserIp.
function randomNumberInRange(min, max) {
  if (min > max) {
    [min, max] = [max, min];
  }
  return Math.round(Math.random() * (max - min) + min);
}

function randomUserIp() {
  let userIp = Array.from({ length: 4 })
    .reduce((ip, number) => {
      number = randomNumberInRange(0, 255);
      ip.push(number);
      return ip;
    }, [])
    .join('.');
  return userIp;
}
console.log(randomUserIp());

// Write a function which generates a randomMacAddress

// Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.

function randomHexaNumberGenerator() {
  let hexaNumber = Array.from({ length: 6 }).reduce((str, number) => {
    number = randomNumberInRange(48, 122);
    while (number > 102 || (number > 57 && number < 97)) {
      number = randomNumberInRange(48, 122);
    }
    str += String.fromCharCode(number);
    return str;
  }, '#');
  return hexaNumber;
}
console.log(randomHexaNumberGenerator());
// '#ee33df'
// Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

// console.log(userIdGenerator());
// 41XTDbE
