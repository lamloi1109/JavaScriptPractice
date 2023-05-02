import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";
// The following is an array of 10 students ages:
// Sort the array and find the min and max age
// Find the median age(one middle item or two middle items divided by two)
// Find the average age(all items divided by number of items)
// Find the range of the ages(max minus min)
// Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
const newArray = ages.sort();
console.log(newArray);
const minAge = newArray[0];
const maxAge = newArray[newArray.length - 1];
console.log(newArray[0]);
console.log(newArray[newArray.length - 1]);
const sum = ages.reduce((sum, curr) => sum + curr);
const avgAges = Math.floor(sum / ages.length);
console.log(avgAges);
const rangeOfTheAges = maxAge - minAge;
console.log(rangeOfTheAges);
const middleItem = Math.floor(ages.length / 2);
const medianAge = Math.floor(ages[middleItem] / 2);
console.log(medianAge);
// Find the middle country(ies) in the countries array
const middleCountry = Math.floor(countries.length / 2);
console.log(countries[middleCountry]);
// Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
function divideCountries(countries) {
  if (!Array.isArray(countries) || countries.length === 0) return undefined;
  let middleIndex = Math.floor(countries.length / 2);

  return countries.length % 2 === 0
    ? [
        [countries.slice[(0, middleIndex)]],
        [countries.slice[(middleIndex + 1, countries.length - 1)]],
      ]
    : [[countries[0]], countries.slice(1, countries.length)];
}
console.log(divideCountries(countries));
