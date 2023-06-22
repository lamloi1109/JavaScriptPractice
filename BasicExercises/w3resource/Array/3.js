// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

export function first(array, n) {
  if (!Array.isArray(array)) {
    return undefined;
  }

  if (array.length === 0 || n < 0) {
    return [];
  }

  if (n === undefined) {
    return array[0];
  }
//   if (n >= array.length) {
//     return array;
//   }
  return array.slice(0, n);
}
