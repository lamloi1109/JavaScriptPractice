// 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// frequent
// Sample Output : a ( 5 times )

export function findTheMostFrequentItem(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }
  const obj = {};
  const mostFrequentItem = Object.entries(
    array.reduce((obj, item) => {
      obj[item] = obj[item] ? obj[item] + 1 : 1;
      return obj;
    }, obj)
  ).toSorted((a, b) => b[1] - a[1])[0];
  return `${mostFrequentItem[0]} ( ${mostFrequentItem[1]} times )`;
}
const arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(findTheMostFrequentItem(arr1));
