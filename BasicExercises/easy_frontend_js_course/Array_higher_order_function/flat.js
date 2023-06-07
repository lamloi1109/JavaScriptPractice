// flatten an array
// [1,2,3,[4,5]] -> [1,2,3,4,5]
// [1,2,3,[4,5,[6]]] -> [1,2,3,4,5,6]

function flatArray(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }

//   let result = [];

  //   for (const number of array) {
  //     if (Array.isArray(number)) {
  //       result = [...result, ...flatArray(number)];
  //     } else {
  //       result.push(number);
  //     }
  //   }
  return array.reduce((result, number) => {
    Array.isArray(number) ? (result = [...result, ...flatArray(number)]) : result.push(number);
    return result;
  }, []);
}

console.log(flatArray([1, 2, 3, [4, 5, [6, 7, [8, 9]]]]));
