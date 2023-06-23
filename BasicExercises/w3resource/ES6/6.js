// Write a JavaScript program to convert a specified number into an array of digits.

// using while loop
// convert to string

export function digitizeV1(number) {
  if (!Number.isInteger(number)) {
    return undefined;
  }
  return number
    .toString()
    .split('')
    .map((number) => Number.parseInt(number));
}

export function digitizeV2(number) {
  if (!Number.isInteger(number)) {
    return undefined;
  }
  let numberList = [];
  let remainingNumber = number;
  while (remainingNumber > 0) {
    const lastNumber = remainingNumber % 10;
    numberList.unshift(lastNumber);
    remainingNumber = Math.trunc(remainingNumber / 10);
  }
  return numberList;
}

export function digitizeV3(number) {
  if (!Number.isInteger(number)) {
    return undefined;
  }
  // using the spread operator to build an array
  return [...`${number}`].map((number) => Number.parseInt(number));
}

const tips_objectToEntries = (obj) => Object.keys(obj).map((k) => [k, obj[k]]);
console.log(tips_objectToEntries({ x: 1, y: 2 }));
console.log(Object.entries({ x: 1, y: 2 }));
