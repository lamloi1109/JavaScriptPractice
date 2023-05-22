// Bài 308: Tạo mảng b chỉ chứa giá trị âm từ mảng a

export function generateNegativeList(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const negativeList = [];

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (number < 0) {
      negativeList.push(number);
    }
  }

  return negativeList;
}

export function generateNegativeListV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return numberList.filter((number) => number < 0);
}
