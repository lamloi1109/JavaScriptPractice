// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

const date = new Date();
const month = '0' + (date.getMonth() + 1);
const day = '0' + date.getDate();
const year = date.getFullYear();

console.log(`${month.slice(-2)}-${day}-${year}`);
console.log(`${month.slice(-2)}/${day}/${year}`);
console.log(`${day.slice(-2)}-${month.slice(-2)}-${year}`);
console.log(`${day.slice(-2)}/${month.slice(-2)}/${year}`);
