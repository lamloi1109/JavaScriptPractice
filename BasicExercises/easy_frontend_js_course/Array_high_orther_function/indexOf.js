// Install indexOf method
function indexOf(array, searchElement) {
  // Check args
  if (!Array.isArray(array)) return -1;
  // Processing
  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === searchElement) return index;
  }
  // Return
  return -1;
}
// Tìm index của phần tử đầu xác định trong arr
let numberList = [2, 3, 4, 5, 6, 3];
console.log(indexOf(numberList, 8));
