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
const ages = [
  31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37,
  31, 34, 24, 33, 29, 26,
];
console.log(ages.length);
const statistics = {
  count: function () {
    return ages.length;
  },
  sum: function () {
    return ages.reduce((acc, curr) => acc + curr);
  },
  max: function () {
    return ages.sort((a, b) => b - a)[0];
  },
  min: function () {
    return ages.sort((a, b) => a - b)[0];
  },
  range: function () {
    return this.max() - this.min();
  },
  mean: function () {
    return Math.round(this.sum() / this.count());
  },
  median: function () {
    // Trung bình của 2 số ở giữa trong tập dữ liệu tăng dần
    // https://vietnambiz.vn/trung-vi-median-la-gi-vi-du-ve-trung-vi-2019110713491368.htm
    const getMiddleIndex = Math.floor(this.count() / 2);
    return Math.round((ages[getMiddleIndex - 1] + ages[getMiddleIndex]) / 2);
  },
  mode: function () {},
  var: function () {
    const average = this.mean();
    const squareDiffs = ages.map((value) => {
      const diff = value - average;
      return diff * diff;
    });
    const variance =
      squareDiffs.reduce((acc, curr) => acc + curr) / squareDiffs.length;
    // (X) = E (x – μ) ² / N
    //     x là giá trị trong tập dữ liệu

    // µ là giá trị trung bình của tập dữ liệu

    // n là số lượng giá trị trong tập dữ liệu
    // https://www.slingacademy.com/article/calculate-variance-and-standard-deviation-in-javascript/#:~:text=map((value%3A%20number)%3A,number%20%3D%3E%20%7B%20return%20Math.
    return variance;
  },
  std: function () {
    return Math.sqrt(this.var());
  },
  freqDist: function () {},
};

console.log("Count:", statistics.count()); // 25
console.log("Sum: ", statistics.sum()); // 744
console.log("Min: ", statistics.min()); // 24
console.log("Max: ", statistics.max()); // 38
console.log("Range: ", statistics.range()); // 14
console.log("Mean: ", statistics.mean()); // 30
console.log("Median: ", statistics.median()); // 29
// console.log('Mode: ', statistics.mode()) // {'mode': 26, 'count': 5}
console.log("Variance: ", statistics.var()); // 17.5
console.log("Standard Deviation: ", statistics.std()); // 4.2
console.log("Variance: ", statistics.var()); // 17.5
