import { countries } from "./countries_data.js";
// Use the countries information, in the data folder. Sort countries by name, by capital, by population

// *** Find the 10 most spoken languages:

function findPopularLanguages() {
  const popularLanguages = countries.reduce((acc, country) => {
    country.languages.forEach((language) => {
      acc[language] = (acc[language] || 0) + 1;
    });
    return acc;
  }, {});
  return Object.entries(popularLanguages)
    .sort((a, b) => {
      return b[1] - a[1];
    })
    .slice(0, 10)
    .map((language) => {
      return {
        country: language[0],
        count: language[1],
      };
    });
}
console.log(findPopularLanguages());
// *** Use countries_data.js file create a function which create the ten most populated countries
function findPopulatedCountries(countries, num) {
  if (
    !Array.isArray(countries) ||
    countries.length === 0 ||
    typeof num !== "number"
  )
    return undefined;

  if (num <= 0) return [];

  const populatedCountries = countries
    .sort((a, b) => {
      return b.population - a.population;
    })
    .slice(0, num)
    .map((e) => {
      return {
        country: e.name,
        population: e.population,
      };
    });
  return populatedCountries;
}
console.log(findPopulatedCountries(countries, 10));
// *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
