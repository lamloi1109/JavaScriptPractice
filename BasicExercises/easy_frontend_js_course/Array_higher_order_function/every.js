// Install every method
function every(array, callBackFn) {
  if (!Array.isArray(array)) return false;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (!callBackFn(element)) return false;
  }

  return true;
}
// Kiểm tra mảng số chẵn
let numberList = [1, 4, 6];
console.log(every(numberList, (number) => number % 2 === 0));
// Every Method in array
console.log(numberList.every((number) => number % 2 === 0));
