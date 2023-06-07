const countriesAPI = 'https://restcountries.com/v2/all';
const catsAPI = 'https://api.thecatapi.com/v1/breeds';

// Read the cats api and find the average weight of cat in metric unit.
async function fetchCatsAPI(api) {
  try {
    if (typeof api !== 'string' || api === '') {
      throw new Error('Url api is wrong~');
    }
    const catsAPI = api;
    const response = await fetch(catsAPI);
    const cats = await response.json();
    const catMetricList = cats.reduce((names, cat) => {
      const { metric } = cat.weight;
      names.push(metric);
      return names;
    }, []);
    return catMetricList;
  } catch (error) {
    console.log(error);
  }
}
// Sử dụng keyword await để access giá trị trong Promise
const catMetricList = await fetchCatsAPI(catsAPI);
console.log(catMetricList);

// Read the countries api and find out the 10 largest countries
async function fetchCountriesAPI(api) {
  try {
    if (typeof api !== 'string' || api === '') {
      throw new Error('Api url is wrong~');
    }
    const countriesAPI = api;
    const response = await fetch(countriesAPI);
    const countries = await response.json();
    return countries;
  } catch (error) {
    console.log(error);
  }
}

const countries = await fetchCountriesAPI(countriesAPI);
// console.log(countries);
function findLargestCountries(number, countries) {
  if (typeof number !== 'number' || number <= 0) {
    throw new Error('Number is invalid');
  }

  if (!Array.isArray(countries) || countries.length === 0) {
    throw new Error('Countries is invalid');
  }

  const largestCountries = countries
    .sort((a, b) => b.population - a.population)
    .map((country) => country.name);
  return largestCountries.slice(0, number);
}

console.log(findLargestCountries(10, countries));

// Read the countries api and count total number of languages in the world used as officials.
function totalLanguagesInTheWorld(countries) {
  if (!Array.isArray(countries) || countries.length === 0) {
    return undefined;
  }
  let languages = [];

  countries.forEach((country) => {
    languages = [...languages, ...country?.languages];
  });
  languages = [...new Set(languages)];
  return languages.length;
}

console.log(totalLanguagesInTheWorld(countries));
