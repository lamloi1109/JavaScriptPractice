// Write a JavaScript program to combine the numbers of a given array into an array containing all combinations.
export function powerset(list) {
  if (!Array.isArray(list)) {
    return undefined;
  }
  if (list.length === 0) {
    return [];
  }
  return list.reduce(
    (arr, value) => {
      return arr.concat(arr.map((item) => [value].concat(item)));
    },
    [[]]
  );
}

console.log(powerset([1, 2]));
