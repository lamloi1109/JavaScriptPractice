// Xoá các số trùng nhau trong mảng
// Viết hàm removeDuplicatedNumbers(numberList) để xoá tất cả các số xuất hiện hơn 1 lần
export function removeDuplicatedNumbers(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];
  const flag = numberList.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;
    return acc;
  }, {});
  const uniqueNumberList = Object.keys(flag).filter((number) => flag[number] === 1);
  return uniqueNumberList.map((number) => parseInt(number));
}

export function removeDuplicatedNumbersV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const flag = {};

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    flag[number] = flag[number] + 1 || 1;
  }

  const uniqueNumberList = numberList.filter((number) => flag[number] === 1);

  return uniqueNumberList;
}

export function removeDuplicatedNumbersV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  const flagMap = new Map();

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (!flagMap.has(number)) {
      flagMap.set(number, 1);
    } else {
      const getValue = flagMap.get(number);
      flagMap.set(number, getValue + 1);
    }
  }

  return numberList.filter((number) => flagMap.get(number) === 1);
}
