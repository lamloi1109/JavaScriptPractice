// Ðếm số lượng các số có trong mảng a mà không có trong mảng b
// Viết hàm countNumbersNotInB(a, b) để đếm có bao nhiếu số xuất hiện trong mảng a, mà không có trong
// mảng b

export function countNumbersNotInB(listA, listB) {
  if (!Array.isArray(listA) || listA.length === 0) return 0;

  if (!Array.isArray(listB) || listB.length === 0) return listA.length;

  let count = listA.length;

  for (let index = 0; index < listA.length; index++) {
    const number = listA[index];
    if (listB.includes(number)) {
      count--;
    }
  }
  return count;
}

export function countNumbersNotInBV2(listA, listB) {
  if (!Array.isArray(listA) || listA.length === 0) return 0;

  if (!Array.isArray(listB) || listB.length === 0) return listA.length;

  return listA.reduce((acc, curr) => {
    if (listB.includes(curr)) acc--;
    return acc;
  }, listA.length);
}

export function countNumbersNotInBV3(listA, listB) {
  if (!Array.isArray(listA) || listA.length === 0) return 0;

  if (!Array.isArray(listB) || listB.length === 0) return listA.length;

  return listA.filter((number) => !listB.includes(number)).length;
}
