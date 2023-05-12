// Install includes method
function includes(array, searchElement) {
  if (!Array.isArray(array)) return false;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (element === searchElement) return true;
  }

  return false;
}
// Kiểm tra xem phẩn tử có tồn tại trong mảng hay ko
let numberList = [2, 3, 4, 5];
console.log(includes(numberList, 2));
