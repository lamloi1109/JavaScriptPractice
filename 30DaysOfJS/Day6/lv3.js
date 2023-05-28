import { countries } from './countries.js';

// Copy countries array(Avoid mutation)

function cloneArray(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  return array.reduce((newArray, curr) => {
    newArray.push(curr);
    return newArray;
  }, []);
}

function cloneArrayV2(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  return [...array];
}

// [[1,2,3],1,2,3,4]

const array = [[1, 2, 3], 1, 2, 3, 4];

function cloneArrayV3(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  const newArray = [];
  array.forEach((element) => {
    Array.isArray(element) ? newArray.push(cloneArrayV3(element)) : newArray.push(element);
  });

  return newArray;
}

const newArray = cloneArrayV3(array);
console.log(newArray);
newArray[0] = 0;
console.log(newArray);
console.log(array);

// Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
function sortArray(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  const newArray = cloneArrayV3(array);
  return newArray.sort((a, b) => a - b);
}
// Sort the webTechs array and mernStack array
// Extract all the countries contain the word 'land' from the countries array and print it as array
// Find the country containing the hightest number of characters in the countries array
// Extract all the countries containing only four characters from the countries array and print it as array
function findCountryHasFourCharacters(countries) {
  if (!Array.isArray(countries) || countries.length === 0) {
    return undefined;
  }

  return countries.filter((country) => country.length === 4);
}
// Extract all the countries containing two or more words from the countries array and print it as array
function findCountryGreaterThanTwoCharacters(countries) {
  if (!Array.isArray(countries) || countries.length === 0) {
    return undefined;
  }

  return countries.filter((country) => country.length >= 2);
}

// Reverse the countries array and capitalize each country and stored it as an array
function reverseArray(countries) {
  if (!Array.isArray(countries) || countries.length === 0) {
    return undefined;
  }

  const newArray = [];

  countries.reverse().forEach((country) => newArray.push(country.toUpperCase()));

  return newArray;
}
