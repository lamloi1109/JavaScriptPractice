// tìm phần tử đầu tiên thoả điều kiện trong mảng
function find(array, callBackFn) {
  if (!Array.isArray(array)) return undefined;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callBackFn(element)) return element;
  }

  return undefined;
}

const array1 = [5, 12, 8, 130, 44];

console.log(find(array1, (element) => element > 10));
