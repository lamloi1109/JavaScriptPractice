// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

export function last(array, n) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0 || n < 0) {
    return [];
  }

  if (n === undefined) {
    return array[array.length - 1];
  }
  //   if (n >= array.length) {
  //     return array;
  //   }
  return array.slice(0, n);
}
