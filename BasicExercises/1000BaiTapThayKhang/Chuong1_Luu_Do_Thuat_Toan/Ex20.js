// Bài 20: Liệt kê tất cả các “ước số” của số nguyên dương n

// Khái niệm về ước số: a % b === 0 -> b là ước của a
// Khái niệm về só nguyên dương: a > 0

export function statisticsDivisorOfNumber(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return [];

  let devisorList = [];

  for (let index = 1; index <= number; index++) {
    if (number % index === 0) devisorList.push(index);
  }
  return devisorList;
}

export function statisticsDivisorOfNumberV2(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return [];

  let devisorList = [];

  Array.from({ length: number })
    .map((number, index) => index + 1)
    .forEach((n) => {
      if (number % n === 0) devisorList.push(n);
    });

  return devisorList;
}

export function statisticsDivisorOfNumberV3(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return [];

  let devisorList = [];

  let numberList = Array.from({ length: number }).map((number, index) => index + 1);

  for (let n of numberList) {
    if (number % n === 0) devisorList.push(n);
  }

  return devisorList;
}

export function statisticsDivisorOfNumberV4(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return [];

  let numberList = Array.from({ length: number }).map((number, index) => index + 1);

  return numberList.filter((n) => number % n === 0);
}

export function statisticsDivisorOfNumberV5(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return [];

  return Array.from({ length: number })
    .map((number, index) => index + 1)
    .reduce((acc, curr) => {
      if (number % curr === 0) acc.push(curr);
      return acc;
    }, []);
}
