function map(array, callBackFn) {
  // Check args
  if (!Array.isArray(array) || typeof callBackFn !== "function")
    return undefined;

  const newArray = [];

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    newArray.push(callBackFn(element, index));
  }

  return newArray;
}

const array1 = [1, 4, 9, 16];

console.log(map(array1, (x) => x * 2));
