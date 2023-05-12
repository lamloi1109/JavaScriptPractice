import { countries } from "./countries_data.js";

// const countries = [
//   "Finland",
//   "Sweden",
//   "Denmark",
//   "Norway",
//   "IceLand",
//   "Ethiopia",
// ];
// const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const products = [
//   { product: "banana", price: 3 },
//   { product: "mango", price: 6 },
//   { product: "potato", price: " " },
//   { product: "avocado", price: 8 },
//   { product: "coffee", price: 10 },
//   { product: "tea", price: "" },
// ];
// Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
// console.log(
//   products
//     .map((product) => typeof product.price === "number" && product.price)
//     .reduce((totalPrice, price) => totalPrice + price)
// );
// Find the sum of price of products using only reduce reduce(callback))
// console.log(
//   products.reduce(
//     (totalPrice, price) =>
//       totalPrice + (typeof price.price === "number" ? price.price : 0),
//     0
//   )
// );
// Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// function categorizeCountries(pattern) {
//   // 'land', 'ia', 'island','stan'
//   return countries.filter((country) => country.endsWith(pattern));
// }
// console.log(categorizeCountries("ia"));
// Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// Ký tự đầu
// Số lần xuất hiện
function counLetters() {
  let letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return letters.split("").map((letter) => {
    let obj = {};
    obj[letter] = countries.reduce((count, country) => {
      count = country.name[0] === letter ? count + 1 : count + 0;
      return count;
    }, 0);
    return obj;
  });
}
console.log(counLetters());
function counLettersV2() {
  const occurences = countries.reduce((acc, { name }) => {
    const startingLetter = name[0];
    acc[startingLetter] = (acc[startingLetter] || 0) + 1;
    return acc;
  }, {});
  console.log(occurences);
  return Object.keys(occurences)
    .sort()
    .map((letter) => ({ letter, count: occurences[letter] }));
}
console.log(counLettersV2());
// Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
function getFirstTenCountries() {
  let newCountries = countries.slice(0, 10);
  return newCountries.map((country) => country.name);
}
console.log(getFirstTenCountries());
// Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
function getLastTenCountries() {
  let newCountries = countries.slice(-10);
  return newCountries.map((country) => country.name);
}
console.log(getLastTenCountries());
// Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
