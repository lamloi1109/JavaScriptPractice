const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];
// Explain the difference between forEach, map, filter, and reduce.

// forEach duyệt qua hết các phần tử các Arr tương tự như for loop nhưng forEach ko thể break vòng lập giữa chừng được

// Map nhận vào một callBackFn và trả về một newArray sau khi đã transform array theo một điều kiện nào đó

// filter nhận vào một callBackFn và trả về một mảng mới chứa các phần tử thoả mãn điều kiện

//

// Define a callback function before you use it in forEach, map, filter or reduce.
function callbackFn(element, idx, array) {
  console.log(element);
}
// Use forEach to console.log each country in the countries array.
countries.forEach(callbackFn);
// Use forEach to console.log each name in the names array.
names.forEach(callbackFn);
// Use forEach to console.log each number in the numbers array.
numbers.forEach(callbackFn);
// Use map to create a new array by changing each country to uppercase in the countries array.
let newcountries = countries.map((e) => e.toUpperCase());
console.log(newcountries);
// Use map to create an array of countries length from countries array.
let countriesLength = countries.map((e) => e.length);
console.log(countriesLength);
// Use map to create a new array by changing each number to square in the numbers array
let numberArray = numbers.map((number) => [number]);
console.log(numberArray);
// Use map to change to each name to uppercase in the names array
let newNames = names.map((e) => e.toUpperCase());
console.log(newNames);
// Use map to map the products array to its corresponding prices.
let newProducts = products.map((e) => [e.product, e.price]);
console.log(newProducts);
// Use filter to filter out countries containing land.
let landCountries = countries.filter(
  (country) => country.toLowerCase().indexOf("land") != -1
);
console.log(landCountries);
// Use filter to filter out countries having six character.
console.log(countries.filter((e) => e.length === 6));
// Use filter to filter out countries containing six letters and more in the country array.
console.log(countries.filter((e) => e.length >= 6));
// Use filter to filter out country start with 'E';
console.log(countries.filter((e) => e[0] === "E"));
// Use filter to filter out only prices with values.
console.log(products.filter((e) => typeof e.price === "number"));
// Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
// Use reduce to sum all the numbers in the numbers array.
console.log(numbers.reduce((sum, curr) => sum + curr));
// Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
console.log(
  countries.reduce((e, curr) => {
    curr =
      curr === "IceLand"
        ? "and " + curr + " are north European countries"
        : curr;
    return e + ", " + curr;
  }, "Estonia")
);
// Explain the difference between some and every
// every ~~ && Tất cả các phần tử trong mảng thoả dk thì trả về true
// some ~~ || chỉ cần một phần tử thoả dk thì trả về true
// Use some to check if some names' length greater than seven in names array
console.log(names.some((e) => e.length >= 7));
// Use every to check if all the countries contain the word land
console.log(names.every((e) => e.length >= 7));
// Explain the difference between find and findIndex.
// FInd trả về phần tử đầu tiên thoả dk trong mảng
// FindIndex trả về index của phần tử đầu tiên thoả dk
// Use find to find the first country containing only six letters in the countries array
console.log(countries.find((country) => country.length === 6));
// Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(countries.findIndex((country) => country.length === 6));

// Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(countries.findIndex((country) => country === 'Norway'));

// Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(countries.findIndex((country) => country === 'Russia'));
