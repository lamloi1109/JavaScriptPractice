// Bài 46: Hãy đếm số lượng chữ số lẻ của số nguyên dương n
function countOddNumberOfN(n) {
  if (typeof n !== 'number') {
    return undefined;
  }

  if (n <= 0) return 0;

  let remaining = n;
  let countOddNumber = 0;

  while (remaining > 0) {
    let lastNumber = remaining % 10;

    if (lastNumber % 2 !== 0) countOddNumber++;

    remaining = Math.trunc(remaining / 10);
  }

  return countOddNumber;
}

function countOddNumberOfNV2(n) {
  if (typeof n !== 'number') {
    return undefined;
  }

  if (n <= 0) return 0;

  const numberList = n.toString().split('');

  return numberList.reduce((count, number) => {
    if (Number.parseInt(number) % 2 !== 0) count++;
    return count;
  }, 0);
}

console.log(countOddNumberOfN(246));
console.log(countOddNumberOfN(357));
console.log(countOddNumberOfN(123));

console.log(countOddNumberOfNV2(246));
console.log(countOddNumberOfNV2(357));
console.log(countOddNumberOfNV2(123));
