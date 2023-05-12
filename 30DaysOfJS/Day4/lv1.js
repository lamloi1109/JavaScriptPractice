// Get user input using prompt(“Enter your age:”).
// If user is 18 or older , give feedback:'You are old enough to drive'
// but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

function isEnoughToDrive(age) {
  if (age < 0) return "OOP ~~!";

  if (age >= 18) return "You are old enough to drive.";

  return `You are left with ${18 - age} years to drive.`;
}
console.log(isEnoughToDrive(17));


// Compare the values of myAge and yourAge using if … else.
// Based on the comparison and log the result to console stating who is older (me or you). 
// Use prompt(“Enter your age:”) to get the age as input.


function compareWithMyAge(yourAge) {
    const MY_AGE = 24;
    if (yourAge < 0) return "OOP ~~!";
  
    if (yourAge > MY_AGE) return `You are ${yourAge - MY_AGE} years older than me.`;
    if (yourAge === MY_AGE) return `Your Age are not so less than as my age`;

    return `I am ${MY_AGE - yourAge} years olders than you`;
  }
  console.log(compareWithMyAge(17));



// If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// using if else
// ternary operator.

function compareTwoNumbersV1(a, b) {
    if(a > b ) return `${a} is greater than ${b}`;
    return `${b} is greater than ${a}`;
}
console.log(compareTwoNumbersV1(17, 18));


function compareTwoNumbersV2(a, b) {
    return a > b ? `${a} is greater than ${b}` :`${b} is greater than ${a}`;
}
console.log(compareTwoNumbersV2(19, 18));

// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

function isEvenNumbers(n){
    return n % 2 === 0 ? true : false;
}

console.log(isEvenNumbers(18));
