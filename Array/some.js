// Install some method
function some(array, callBackFn) {
  // Check args
  if(!Array.isArray(array)) return false;

  for (let index = 0; index < array.length; index++) {
    if (callBackFn(array[index])) return true;
  }
  
  return false;
}
// Kiểm tra xem trong arr có tồn tại số lẻ hay không?
let numberList = [2, 4, 6];
console.log(some(numberList, (number) => number % 2 !== 0));
// Some method build-in
console.log(numberList.some((number) => number % 2 !== 0));
