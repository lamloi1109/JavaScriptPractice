import { countries } from './countries_data.js';

// How many languages are there in the countries object file.
function countLangueInWorld(countries) {
  if (!Array.isArray(countries) || countries.length === 0) {
    return undefined;
  }

  const languagesSet = new Set();

  countries.forEach((country) => {
    country.languages.forEach((language) => {
      languagesSet.add(language);
    });
  });
  return [...languagesSet].length;
}

console.log(countLangueInWorld(countries));

// *** Use the countries data to find the 10 most spoken languages:

function mostSpokenLanguages(countries, number) {
  if (!Array.isArray(countries) || countries.length === 0 || number < 0) {
    return undefined;
  }
  let mapCountries = countries.reduce((map, country) => {
    country.languages.forEach((language) => {
      if (!map.has(language)) {
        map.set(language, 1);
      } else {
        let count = map.get(language);
        map.set(language, ++count);
      }
    });
    return map;
  }, new Map());
  return [...mapCountries.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map((country) => {
      let name = country[0];
      let num = country[1];
      let obj = {};
      obj[name] = num;
      return obj;
    });
}

console.log(mostSpokenLanguages(countries, 10));
