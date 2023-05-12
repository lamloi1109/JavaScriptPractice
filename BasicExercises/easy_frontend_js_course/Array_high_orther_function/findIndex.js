// TÌm vị trí của phẩn tử đầu tiên thoả điều kiện
function findIndex(array, callBackFn) {
  if (!Array.isArray(array)) return -1;

  for (let index = 0; index < array.length; index++) {
    const element = array[index];
    if (callBackFn(element)) return index;
  }

  return -1;
}

const array1 = [5, 12, 8, 130, 44];

console.log(findIndex(array1, (element) => element > 13));
