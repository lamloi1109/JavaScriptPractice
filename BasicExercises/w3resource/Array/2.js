// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]

export function array_Clone(array) {
  if (!Array.isArray(array)) {
    return undefined;
  }
  if (array.length === 0) {
    return [];
  }

  return array.reduce((arrayClone, element) => {
    if (Array.isArray(element)) {
      arrayClone.push(array_Clone(element));
    } else {
      arrayClone.push(element);
    }

    return arrayClone;
  }, []);
}
