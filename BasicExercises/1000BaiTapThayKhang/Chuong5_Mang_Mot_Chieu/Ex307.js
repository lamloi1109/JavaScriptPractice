// Bài 307: Tạo mảng b chỉ chứa giá trị lẻ từ mảng a
export function generateOddArray(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  const oddArray = [];

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    if (number % 2 !== 0) {
      oddArray.push(number);
    }
  }

  return oddArray;
}

export function generateOddArrayV2(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return numberList.filter((number) => number % 2 !== 0);
}
