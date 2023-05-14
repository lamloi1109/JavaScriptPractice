// Bài 2: Tính S(n) = 1^2 + 2^2 + … + n^2

export function sumPowerTwo(number) {
  if (typeof number !== 'number') return undefined;
  if (number === 0) return Math.pow(0, 2);

  let sum = 0;

  for (let index = 1; index <= number; index++) {
    sum = sum + index * index;
  }

  return sum;
}

export function sumPowerTwoV2(number) {
  if (typeof number !== 'number') return undefined;
  if (number === 0) return Math.pow(0, 2);

  let sum = 0;

  for (let index = 1; index <= number; index++) {
    sum = sum + Math.pow(index, 2);
  }

  return sum;
}

export function sumPowerTwoV3(number) {
  if (typeof number !== 'number') return undefined;
  if (number === 0) return Math.pow(0, 2);

  return Array.from({ length: number })
    .map((number, index) => index + 1)
    .reduce((sum, number) => {
      return sum + number * number;
    }, 0);
}

export function sumPowerTwoV4(number) {
  if (typeof number !== 'number') return undefined;
  if (number === 0) return Math.pow(0, 2);

  const numberList = Array.from({ length: number }).map(
    (number, index) => (index + 1) * (index + 1)
  );

  for (let index = 1; index < numberList.length; index++) {
    numberList[index] = numberList[index] + numberList[index - 1];
  }
  return numberList[numberList.length - 1];
}

console.log(sumPowerTwoV4(6));
