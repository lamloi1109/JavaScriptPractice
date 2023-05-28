const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya',
];

const webTechs = ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node', 'MongoDB'];

const mernStack = ['MongoDB', 'Express', 'React', 'Node'];

// 1. Iterate 0 to 10 using for loop, do the same using while and do while loop
let i = 0;
for (let i = 0; i < 11; i++) {
  console.log(i);
}

i = 0;

while (i < 11) {
  console.log(i);
  i++;
}

i = 0;

do {
  console.log(i);
  i++;
} while (i < 11);

// 2. Iterate 10 to 0 using for loop, do the same using while and do while loop
i = 10;
while (i > 0) {
  console.log(i);
  i--;
}

for (let i = 10; i < 0; i--) {
  console.log(i);
}

i = 10;

do {
  console.log(i);
  i--;
} while (i > 0);

// 3. Iterate 0 to n using for loop

function zeroToN(n) {
  if (!Number.isInteger(n)) {
    return undefined;
  }
  for (let i = 0; i <= n; i++) {
    console.log(i);
  }
}

// 4. Write a loop that makes the following pattern using console.log():

// #
// ##
// ###
// ####
// #####
// ######
// #######
let pattern = '';
for (let index = 0; index < 8; index++) {
  pattern += '#';
  console.log(pattern);
}

// 5. Use loop to print the following pattern:

// 0 x 0 = 0
// 1 x 1 = 1
// 2 x 2 = 4
// 3 x 3 = 9
// 4 x 4 = 16
// 5 x 5 = 25
// 6 x 6 = 36
// 7 x 7 = 49
// 8 x 8 = 64
// 9 x 9 = 81
// 10 x 10 = 100

for (let index = 0; index <= 10; index++) {
  console.log(`${index} x ${index} = ${index * index}`);
}

// 6. Using loop print the following pattern

// i    i^2   i^3
// 0    0     0
// 1    1     1
// 2    4     8
// 3    9     27
// 4    16    64
// 5    25    125
// 6    36    216
// 7    49    343
// 8    64    512
// 9    81    729
// 10   100   1000
console.log('i    i^2   i^3');
for (let index = 0; index <= 10; index++) {
  console.log(`${index}   ${index * index}   ${index * index * index}`);
}

// 7. Use for loop to iterate from 0 to 100 and print only even numbers
for (let index = 0; index <= 100; index++) {
  if (index % 2 === 0) {
    console.log(index);
  }
}

// 8. Use for loop to iterate from 0 to 100 and print only odd numbers
for (let index = 0; index <= 100; index++) {
  if (index % 2 !== 0) {
    console.log(index);
  }
}

// 9. Use for loop to iterate from 0 to 100 and print only prime numbers

// 10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0;
for (let index = 0; index <= 100; index++) {
  sum += index;
  console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);
}

// The sum of all numbers from 0 to 100 is 5050.

// 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

// The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.

sum = 0;
for (let index = 0; index <= 100; index++) {
  if (index % 2 !== 0) {
    sum += index;
    console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);
  }
}

sum = 0;
for (let index = 0; index <= 100; index++) {
  if (index % 2 === 0) {
    sum += index;
    console.log(`The sum of all numbers from 0 to 100 is ${sum}.`);
  }
}

// 12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

// [2550, 2500]

sum = 0;

let arr = [];
for (let index = 0; index <= 100; index++) {
  if (index % 2 === 0) {
    sum += index;
    arr.push(sum);
    console.log(arr);
  }
}

sum = 0;
arr = [];
for (let index = 0; index <= 100; index++) {
  if (index % 2 !== 0) {
    sum += index;
    arr.push(sum);
    console.log(arr);
  }
}

// 13. Develop a small script which generate array of 5 random numbers
function randomNumber() {
  return Math.trunc(Math.random() * 10);
}

function generateRandomNumberList() {
  return Array.from({ length: 5 }).map((number) => randomNumber());
}

// 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

function generateRandomUniqueNumberList() {
  return Array.from({ length: 5 }).reduce((numberList, curr) => {
    curr = randomNumber();

    while (numberList.includes(curr)) {
      curr = randomNumber();
    }
    numberList.push(curr);
    return numberList;
  }, []);
}

// 15. Develop a small script which generate a six characters random id:
// 5j2khz

// 48 - 57
// 97 - 122

function randomNumberInRange(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function generateSixCharacters() {
  return Array.from({ length: 5 }).reduce((id, curr) => {
    curr = randomNumberInRange(48, 122);

    while ((curr > 57 && curr < 97) || id.includes(String.fromCharCode(curr))) {
      curr = randomNumberInRange(48, 122);
    }
    id += String.fromCharCode(curr);
    return id;
  }, '');
}

console.log(generateSixCharacters());
