import { countries } from './countries.js';

// 1. Develop a small script which generate any number of characters random id:
function randomNumberInRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function generateId() {
  return Array.from({ length: randomNumberInRange(1, 255) }).reduce((id, curr) => {
    curr = randomNumberInRange(48, 122);

    while ((curr > 57 && curr < 97) || id.includes(String.fromCharCode(curr))) {
      curr = randomNumberInRange(48, 122);
    }
    id += String.fromCharCode(curr);
    return id;
  }, '');
}

// fe3jo1gl124g
// xkqci4utda1lmbelpkm03rba

// 2. Write a script which generates a random hexadecimal number.

// '#ee33df'

function generateHexadecimal() {
  return Array.from({ length: 6 }).reduce((id, curr) => {
    curr = randomNumberInRange(48, 122);

    while (curr > 57 && curr < 97) {
      curr = randomNumberInRange(48, 122);
    }
    id += String.fromCharCode(curr);
    return id;
  }, '#');
}

console.log(generateHexadecimal());
// 3. Write a script which generates a random rgb color number.

// rgb(240,180,80)

function generateRGBColor() {
  let red = randomNumberInRange(0, 255);
  let green = randomNumberInRange(0, 255);
  let blue = randomNumberInRange(0, 255);
  return `rgb(${red},${green},${blue})`;
}

console.log(generateRGBColor());

// 4. Using the above countries array, create the following new array.

// ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// 5. Using the above countries array, create an array for countries length'.

// [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]

function getLengthList(arr) {
  return arr.map((element) => element.length);
}

console.log(getLengthList(countries));

// 6. Use the countries array to create the following array of arrays:

// [
//     ['Albania', 'ALB', 7],
//     ['Bolivia', 'BOL', 7],
//     ['Canada', 'CAN', 6],
//     ['Denmark', 'DEN', 7],
//     ['Ethiopia', 'ETH', 8],
//     ['Finland', 'FIN', 7],
//     ['Germany', 'GER', 7],
//     ['Hungary', 'HUN', 7],
//     ['Ireland', 'IRE', 7],
//     ['Iceland', 'ICE', 7],
//     ['Japan', 'JAP', 5],
//     ['Kenya', 'KEN', 5]
// ]

function generateArray(countries) {
  if (!Array.isArray(countries) || countries.length === 0) {
    return undefined;
  }

  return countries.map((country) => [country, country.slice(0, 3).toUpperCase(), country.length]);
}

console.log('6.', generateArray(countries));

// 7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

function findCountriesLand(countries) {
  if (!Array.isArray(countries) || countries.length === 0) {
    return undefined;
  }

  return countries.filter((country) => country.endsWith('land'));
}

console.log('7.', findCountriesLand(countries));

// ['Finland','Ireland', 'Iceland']

// 8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

// ['Albania', 'Bolivia','Ethiopia']

function findCountriesIa(countries) {
  if (!Array.isArray(countries) || countries.length === 0) {
    return undefined;
  }

  return countries.filter((country) => country.endsWith('ia'));
}

console.log('8.', findCountriesIa(countries));

// 9. Using the above countries array, find the country containing the biggest number of characters.

function findBiggestNumberOfChar(countries) {
  if (!Array.isArray(countries) || countries.length === 0) {
    return undefined;
  }

  return countries.reduce((biggest, country) => {
    if (country.length > biggest) {
      biggest = country.length;
    }
    return biggest;
  }, Number.MIN_SAFE_INTEGER);
}

function findCountryBiggestLength(countries) {
  if (!Array.isArray(countries) || countries.length === 0) {
    return undefined;
  }

  const biggest = findBiggestNumberOfChar(countries);

  return countries.find((country) => country.length === biggest);
}

// Ethiopia

console.log('9. ', findCountryBiggestLength(countries));

// 10. Using the above countries array, find the country containing only 5 characters.

// ['Japan', 'Kenya']
function findCountries(countries) {
  if (!Array.isArray(countries) || countries.length === 0) {
    return undefined;
  }
  return countries.filter((country) => country.length === 5);
}

console.log(findCountries(countries));

// 11. Find the longest word in the webTechs array

const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

function findLongestWord(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  let longestWord;
  let max = Number.MIN_SAFE_INTEGER;

  array.forEach((word) => {
    if (max < word.length) {
      max = word.length;
      longestWord = word;
    }
  });

  return longestWord;
}

console.log(findLongestWord(webTechs));
// 12. Use the webTechs array to create the following array of arrays:

// [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]

function transformArr(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }

  return arr.map((word, index) => [word, word.length]);
}
console.log(transformArr(webTechs));
// 13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

// 14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB'],
];

function printItem(arr) {
  for (const items of arr) {
    if (Array.isArray(items)) {
      items.forEach((item) => console.log(item));
    }
  }
}
printItem(fullStack);
// 15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

function reverseArray(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return undefined;
  }

  const reverseArr = [];

  for (let index = arr.length - 1; index >= 0; index--) {
    const element = arr[index];
    reverseArr.push(element);
  }

  return reverseArr;
}

console.log(reverseArray(['banana', 'orange', 'mango', 'lemon']));
