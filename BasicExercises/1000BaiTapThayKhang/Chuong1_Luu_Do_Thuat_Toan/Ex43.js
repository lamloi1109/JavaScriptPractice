// Bài 43: Hãy đếm số lượng chữ số của số nguyên dương n

function countNumber(number) {
  if (typeof number !== 'number') return undefined;

  let remaining = number;
  let count = 0;

  while (remaining > 0) {
    count++;
    // update condition
    remaining = Math.trunc(remaining / 10);
  }
  return count;
}

function countNumberV2(number) {
  if (typeof number !== 'number') return undefined;

  number = Math.abs(number);

  const numberList = number.toString().split('');

  return numberList.length;
}

console.log(countNumberV2(-1234));
