// Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
// Write a function name rgbColorGenerator and it generates rgb colors.
function randomNumberInRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
function rgbColorGenerator() {
  const red = randomNumberInRange(0, 255);
  const green = randomNumberInRange(0, 255);
  const blue = randomNumberInRange(0, 255);
  return `rgb(${red},${green},${blue})`;
}
console.log(rgbColorGenerator());
// rgb(125,244,255)
// Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
function arrayOfHexaColors(number) {
  if (number < 1) {
    return undefined;
  }
  const colorList = Array.from({ length: number });
  return colorList.map((color) => {
    color = randomHexaNumberGenerator();
    while (colorList.includes(color)) {
      color = randomHexaNumberGenerator();
    }
    return color;
  });
}
// Write a function arrayOfRgbColors which return any number of RGB colors in an array.

function arrayOfRgbColors(number) {
  if (number < 1) {
    return undefined;
  }
  const colorList = Array.from({ length: number });
  return colorList.map((color) => {
    color = rgbColorGenerator();
    while (colorList.includes(color)) {
      color = rgbColorGenerator();
    }
    return color;
  });
}

// Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.

function convertHexaToRgb(hexaNumber) {
  const obj = {
    F: 15,
    E: 14,
    D: 13,
    C: 12,
    B: 11,
    A: 10,
  };

  const hexa = [...hexaNumber.split('').slice(1)];
  const Rgb = [];
  for (let index = 1; index < hexa.length; index = index + 2) {
    let firstNumber = Number.isInteger(hexa[index - 1])
      ? Number.parseInt(hexa[index - 1])
      : obj[hexa[index - 1]];
    let secondNumber = Number.isInteger(hexa[index])
      ? Number.parseInt(hexa[index])
      : obj[hexa[index]];
    let total = 16 * firstNumber + secondNumber;
    Rgb.push(total);
  }
  return `RGB(${Rgb[0]},${Rgb[1]},${Rgb[2]})`;
}

console.log(convertHexaToRgb('#FFFFFF'));

// Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.

function convertRgbToHexa(rgb) {
  const obj = {
    15: 'F',
    14: 'E',
    13: 'D',
    12: 'C',
    11: 'B',
    10: 'A',
    9: '9',
    8: '8',
    7: '7',
    6: '6',
    5: '5',
    4: '4',
    3: '3',
    2: '2',
    1: '1',
    0: '0',
  };
  const rgbNumberList = rgb
    .slice(4, rgb.length - 1)
    .split(',')
    .map((number) => Number(number));
  let hexa = '#';
  rgbNumberList.forEach((number) => {
    let remaining = number / 16 - Math.trunc(number / 16);
    let firstNumber = Math.trunc(number / 16);
    let secondNumber = remaining * 16;
    hexa += obj[firstNumber];
    hexa += obj[secondNumber];
  });
  return hexa;
}

console.log(convertRgbToHexa('RGB(178, 34, 34)'));

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

// Write a function generateColors which can generate any number of hexa or rgb colors.
function generateColors(colorMode, numberColors) {
  if ((colorMode !== 'rgb' && colorMode !== 'hexa') || numberColors < 1) {
    return undefined;
  }
  const colorList = Array.from({ length: numberColors });

  return colorList.map((color) => {
    color = colorMode === 'rgb' ? rgbColorGenerator() : randomHexaNumberGenerator();
    while (colorList.includes(color)) {
      color = rgbColorGenerator();
    }
    return color;
  });
}
console.log(generateColors('hexa', 3));
// ['#a3e12f', '#03ed55', '#eb3d2b']
console.log(generateColors('hexa', 1));
// '#b334ef'
console.log(generateColors('rgb', 3));
// ['rgb(5, 55, 175)', 'rgb(50, 105, 100)', 'rgb(15, 26, 80)']
// console.log(generateColors('rgb', 1)) // 'rgb(33,79, 176)'
// Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
function shuffleArray(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return undefined;
  }
  return list.reduce((newArray, item) => {
    item = list[randomNumberInRange(0, list.length - 1)];
    while (newArray.includes(item)) {
      item = list[randomNumberInRange(0, list.length - 1)];
    }
    newArray.push(item);
    return newArray;
  }, []);
}

console.log('shuffleArray', shuffleArray([1, 2, 3, 4, 5, 6, 7]));

function shuffleArrayV2(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return undefined;
  }
  return list.sort(() => Math.random() - 0.5);
}

console.log('shuffleArrayV2', shuffleArrayV2([1, 2, 3, 4, 5, 6, 7]));

// Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
function factorial(number) {
  if (number <= 0) {
    return 0;
  }
  if (number === 1) {
    return 1;
  }
  return number * factorial(number - 1);
}
console.log('factorial', factorial(4));
// Call your function isEmpty, it takes a parameter and it checks if it is empty or not
function isEmpty(...args) {
  if (!Array.isArray(args) || args.length === 0) {
    return true;
  }
  return false;
}
// Call your function sum, it takes any number of arguments and it returns the sum.

function sum(...args) {
  if (!Array.isArray(args) || args.length === 0) {
    return undefined;
  }
  return args.reduce((s, number) => s + number, 0);
}

// Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
function sumOfArrayItems(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  for (let index = 1; index < array.length; index++) {
    if (typeof array[index - 1] !== array[index]) {
      return `Cannot calc difference data type with number`;
    }
    array[index] = array[index] + array[index - 1];
  }

  return array[array.length - 1];
}
// Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.

function average(...args) {
  if (!Array.isArray(args) || args.length === 0) {
    return undefined;
  }

  let s = 0;

  for (let index = 0; index < args.length; index++) {
    const number = args[index];
    if (typeof number !== 'number') {
      return undefined;
    }
    s += number;
  }
  return s / args.length;
}

// Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
//   'Not Found'
function modifyArray(list) {
  if (!Array.isArray(list) || list.length < 5) {
    return 'Not Found';
  }
  list[4] = list[4].toUpperCase();
  return list;
}

console.log(modifyArray(['Avocado', 'Tomato', 'Potato', 'Mango', 'Lemon', 'Carrot']));
// ['Avocado', 'Tomato', 'Potato','Mango', 'LEMON', 'Carrot']
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon', 'Microsoft', 'IBM']));
// ['Google', 'Facebook','Apple', 'Amazon','MICROSOFT',  'IBM']
console.log(modifyArray(['Google', 'Facebook', 'Apple', 'Amazon']));

// Write a function called isPrime, which checks if a number is prime number.

function isPrime(number) {
  if (!Number.isInteger(number)) {
    return false;
  }

  if (number < 2) {
    return false;
  }
  if (number === 2) {
    return true;
  }
  for (let index = 2; index <= Math.sqrt(number); index++) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}

// Write a functions which checks if all items are unique in the array.

function isUniqueList(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return false;
  }
  const uniqueList = [...new Set(list)];
  return list.length === uniqueList.length;
}

// Write a function which checks if all the items of the array are the same data type.
function isSameDataTypeList(list) {
  if (!Array.isArray(list) || list.length === 0) {
    return false;
  }
  let i = 0;
  let j = list.length - 1;

  while (i < j) {
    if (typeof list[i] !== typeof list[j]) {
      return false;
    }
    j--;
  }

  return true;
}
console.log(isSameDataTypeList([1, 2, 3, 4, 5, 6, 7, 8]));
console.log(isSameDataTypeList([1, 2, 3, '4', 5, 6, 7, 8]));
console.log(isSameDataTypeList(['4', 2, 3, '4', 5, 6, [], '4']));

// JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.

// Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
function randomNumber() {
  return Math.trunc(Math.random() * 10);
}

function randomUniqueList(length = 7) {
  return Array.from({ length: length }).reduce((uniqueNumberList, number) => {
    number = randomNumber();

    while (uniqueNumberList.includes(number)) {
      number = randomNumber();
    }

    uniqueNumberList.push(number);

    return uniqueNumberList;
  }, []);
}

console.log(randomUniqueList());

// sevenRandomNumbers()
// [(1, 4, 5, 7, 9, 8, 0)]
// Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
function reverseCountries(countries) {
  return countries.reverse();
}
