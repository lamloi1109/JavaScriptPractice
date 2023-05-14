// Bài 3: Tính S(n) = 1 + ½ + 1/3 + … + 1/n

export function total(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 1;

  let sum = 0;
  for (let index = 1; index <= number; index++) {
    sum = sum + 1 / index;
  }

  return sum;
}

export function totalV2(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 1;

  return Array.from({ length: number })
    .map((number, index) => index + 1)
    .reduce((sum, curr) => {
      return sum + 1 / curr;
    }, 0);
}

export function totalV3(number) {
  if (typeof number !== 'number') return undefined;

  if (number === 0) return 1;

  const numberList = Array.from({ length: number }).map((number, index) => 1 / (index + 1));

  for (let index = 1; index < numberList.length; index++) {
    numberList[index] = numberList[index] + numberList[index - 1];
  }
  return numberList[numberList.length - 1];
}
