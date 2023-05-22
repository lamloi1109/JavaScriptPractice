// Bài 304(*): Cho mảng a, số nguyên M. Tìm 1 mảng con sao cho tổng các phần tử bằng M

export function findSubArray(numberList, M) {
  if (!Array.isArray(numberList) || numberList.length === 0 || !Number.isInteger(M)) {
    return undefined;
  }

  for (let i = 0; i < numberList.length; i++) {
    let remaining = M;
    for (let j = i; j < numberList.length; j++) {
      remaining = remaining - numberList[j];
      if (remaining === 0) {
        return numberList.slice(i, j + 1);
      }
    }
  }
  return [];
}

console.log(findSubArray([4, 1, 2, 3, 4], 6));
