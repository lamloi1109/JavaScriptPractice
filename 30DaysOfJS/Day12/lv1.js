// Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
const txt =
  'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.';
function getTotalIncome(text) {
  if (typeof text !== 'string' || text === '') {
    return undefined;
  }
  const pattern = /\d+/g;
  const incomeList = text.match(pattern);
  return incomeList.reduce((income, cur) => {
    return (income += Number(cur));
  }, 0);
}
console.log(getTotalIncome(txt));
// The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
function findDistance() {}
const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8'];
const sortedPoints = [-4, -3, -1, -1, 0, 2, 4, 8];
const distance = 12;

// Write a pattern which identify if a string is a valid JavaScript variable
function is_valid_variable(str) {
  if (typeof str !== 'string' || str === '') {
    return undefined;
  }
  const pattern = /^([A-Za-z]|\_|\$).\w+$/g;
  return pattern.test(str);
}

console.log(is_valid_variable('first_name'));
console.log(is_valid_variable('first-name'));
console.log(is_valid_variable('1first_name'));
console.log(is_valid_variable('firstname'));
