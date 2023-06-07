function lastIndexOf(array, searchElement) {
  let lastIndex = -1;
  // Check args
  if (!Array.isArray(array)) return -1;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === searchElement) lastIndex = index;
  }

  return lastIndex;
}

let numberList = [1, 2, 3, 4, 1];
console.log(lastIndexOf(numberList, 5));
