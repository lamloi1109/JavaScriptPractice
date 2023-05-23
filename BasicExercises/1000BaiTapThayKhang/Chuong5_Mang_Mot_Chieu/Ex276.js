// Bài 276: Xóa tất cả các phần tử trùng với x

function deleteX(numberList, x) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return numberList.filter((number) => number !== x);
}
