// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file
import { countries } from "./countries.js";
import { webTechs } from "./web_techs.js";
// First remove all the punctuations and change the string to array and count the number of words in the array
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
// the punctuations Dấu chấm câu '.'
text = text.replaceAll(".", "");
text = text.replaceAll(",", "");
text = text.split(" ");
console.log(text);
console.log(text.length);
// In the following shopping cart add, remove, edit items
// add 'Meat' in the beginning of your shopping cart if it has not been already added
// add Sugar at the end of you shopping cart if it has not been already added
// remove 'Honey' if you are allergic to honey
// modify Tea to 'Green Tea'
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];

function addToShoppingCart(meat, sugar) {
  if (!shoppingCart.includes(meat)) {
    shoppingCart.unshift(meat);
  }
  if (!shoppingCart.includes(sugar)) {
    shoppingCart.push(sugar);
  }
}
addToShoppingCart("Meat", "Sugar");
console.log(shoppingCart);
let findHoney = shoppingCart.findIndex((e) => e === "Honey");
shoppingCart.splice(findHoney, 1);
console.log(shoppingCart);
let findTea = shoppingCart.findIndex((e) => e === "Tea");
shoppingCart[findTea] = "Green Tea";
console.log(shoppingCart);
// In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
function isExistInArray(array, item) {
  array.includes(item) ? console.log(item.toUpperCase()) : array.push(item);
  console.log(array);
}
isExistInArray(countries, "Demacia");
isExistInArray(webTechs, "Sass");
// Concatenate the following two variables and store it in a fullStack variable.

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);
