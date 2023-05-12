function reduce(array, callBackFn, initialValue) {
  if (!Array.isArray(array) || typeof callBackFn !== "function")
    throw new Error("ERROR!!");
  if (array.length === 0 && initialValue === 0) throw new Error("ERROR!!");
  if (array.length === 0 && initialValue !== 0) return initialValue;

  let hasInitalValue = initialValue !== undefined;
  let index = hasInitalValue ? 0 : 1;
  let prevValue = hasInitalValue ? initialValue : array[0];

  for (; index < array.length; index++) {
    let currentValue = array[index];
    prevValue = callBackFn(prevValue, currentValue, index, array);
  }

  return prevValue;
}

const array1 = [1];

console.log(
  reduce(array1, (accumulator, currentValue) => accumulator + currentValue, null)
);
// 10
