// Xoá các số trùng nhau nhưng giữ lại một số
// Viết hàm uniqueArray(numberList) để xoá các số xuần hiện hơn 1 lần, nhưng giữ lại 1 số.

export function uniqueArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.length === 1) return numberList;

  const uniqueList = [];

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (!uniqueList.includes(number)) {
      uniqueList.push(number);
    }
  }

  return uniqueList;
}

export function uniqueArrayV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.length === 1) return numberList;

  return numberList.reduce((uniqueList, number) => {
    if (!uniqueList.includes(number)) uniqueList.push(number);
    return uniqueList;
  }, []);
}

export function uniqueArrayV3(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  if (numberList.length === 1) return numberList;

  const obj = numberList.reduce((flag, number) => {
    flag[number] = flag[number] + 1 || 1;
    return flag;
  }, {});

  return Object.keys(obj).map((number) => parseInt(number));
}
