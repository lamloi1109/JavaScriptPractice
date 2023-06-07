const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];
const countries = ['Finland', 'Sweden', 'Norway'];

// create an empty set
const emptySet = new Set();

// Create a set containing 0 to 10 using loop
const numberSet = new Set(Array.from({ length: 11 }).map((number, index) => index));
console.log(numberSet);

// Remove an element from a set
numberSet.delete(10);
console.log(numberSet);

// Clear a set
numberSet.clear();
console.log(numberSet);

// Create a set of 5 string elements from array
const stringSet = new Set(['a', 'b', 'c', 'd', 'e']);
console.log(stringSet);

// Create a map of countries and number of characters of a country
const map = new Map();
countries.forEach((country) => {
    map.set(country, country.length);
});

console.log(map);
