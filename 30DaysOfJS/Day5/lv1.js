const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

// Declare an empty array;
let emptyArray = [];
// let emptyArray = new Array();
// Declare an array with more than 5 number of elements
let array = Array(5);
console.log(array);
// Find the length of your array
console.log(countries.length);
// Get the first item, the middle item and the last item of the array
let firstItem = countries[0];
let middleItem = countries[Math.floor(countries.length / 2)];
console.log(middleItem);
let lastItem = countries[countries.length - 1];
console.log(firstItem, lastItem);
// Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, "dsad", true, false, {}, [], () => console.log(1)];
// Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
// Print the array using console.log()
console.log(mixedDataTypes, itCompanies);
// Print the number of companies in the array
console.log(itCompanies.length);
// Print the first company, middle and last company
console.log(itCompanies[0]);
console.log(itCompanies[Math.floor(countries.length / 2)]);
console.log(itCompanies[itCompanies.length - 1]);
// Print out each company
itCompanies.forEach((element) => console.log(element));
// Change each company name to uppercase one by one and print them out
itCompanies.forEach((element) => {
  element = element.toUpperCase();
  console.log(element);
});

// Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.join(", ") + " are big IT companies");
// Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
function isExistCompany(company) {
  return itCompanies.includes(company);
}
console.log(isExistCompany("IBM"));
// Filter out companies which have more than one 'o' without the filter method
function FilterCompany(companyList) {
  if (!Array.isArray(companyList) || companyList.length === 0) return false;
  const filterArray = [];
  for (let index = 0; index < companyList.length; index++) {
    const element = companyList[index];
    if (element.includes("o")) filterArray.push(element);
  }
  return filterArray;
}
console.log( "Filter CPN",FilterCompany(itCompanies));
// Sort the array using sort() method
console.log(itCompanies.sort());
// Z - A
console.log(
  "Sort Z - A: ",
  itCompanies.sort((a, b) => (a > b ? -1 : a < b ? -1 : 0))
);

// Reverse the array using reverse() method
console.log(itCompanies.reverse());
// Slice out the first 3 companies from the array
console.log(itCompanies.slice(0, 3));
// Slice out the last 3 companies from the array
console.log(itCompanies.slice(-3));
// Slice out the middle IT company or companies from the array
console.log(itCompanies.slice(Math.floor(itCompanies.length / 2)));
// Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);
// Remove the middle IT company or companies from the array
itCompanies.splice(Math.floor(itCompanies.length / 2), 1);
// Remove the last IT company from the array
itCompanies.pop();
console.log(itCompanies);

// Remove all IT companies
itCompanies.length = 0;
console.log(itCompanies);
