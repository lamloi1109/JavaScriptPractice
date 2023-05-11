// Ðếm số lượng các số khác nhau có trong mảng
// Viết hàm countUniqueNumbers(numberList) để tìm ra có bao nhiêu số khác nhau trong mảng.

export function countUniqueNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const uniqueNumberList = [];
  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];

    if (typeof number === 'number' && !uniqueNumberList.includes(number)) {
      uniqueNumberList.push(number);
    }
  }

  return uniqueNumberList.length;
}

export function countUniqueNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  return numberList.reduce((acc, curr) => {
    if (typeof curr === 'number' && !acc.includes(curr)) acc.push(curr);
    return acc;
  }, []).length;
}

export function countUniqueNumbersV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return 0;

  const uniqueNumberObject = numberList.reduce((acc, curr) => {
    if (typeof curr === 'number') {
      acc[curr] = acc[curr] + 1 || 1;
    }
    return acc;
  }, {});
  return Object.keys(uniqueNumberObject).length;
}
