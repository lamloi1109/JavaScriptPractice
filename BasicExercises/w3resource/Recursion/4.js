// 4. Write a JavaScript program to compute the sum of an array of integers.
// Example : var array = [1, 2, 3, 4, 5, 6]
// Expected Output : 21
function sum(array) {
  if (array.length === 0) {
    return 0;
  }

  return array.pop() + sum(array);
}
console.log(sum([1, 2, 3, 4, 5, 6]));
