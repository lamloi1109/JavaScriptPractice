// Bài 47: Hãy tính tổng các chữ số chẵn của số nguyên dương n

function totalEvenNumberOfN(n) {
  if (typeof n !== 'number') {
    return undefined;
  }

  if (n <= 0) return 0;

  let remaining = n;
  let totalEvenNumber = 0;

  while (remaining > 0) {
    let lastNumber = remaining % 10;

    if (lastNumber % 2 === 0) totalEvenNumber += lastNumber;

    remaining = Math.trunc(remaining / 10);
  }

  return totalEvenNumber;
}
console.log(totalEvenNumberOfN(246));
console.log(totalEvenNumberOfN(357));
console.log(totalEvenNumberOfN(321));

function totalEvenNumberOfNV2(n) {
  if (typeof n !== 'number') {
    return undefined;
  }

  if (n <= 0) return 0;

  const numberList = n.toString().split('');

  return numberList.reduce((totalEvenNumber, number) => {
    const n = Number.parseInt(number);
    if (n % 2 === 0) totalEvenNumber += n;
    return totalEvenNumber;
  }, 0);
}

console.log(totalEvenNumberOfNV2(246));
console.log(totalEvenNumberOfNV2(357));
console.log(totalEvenNumberOfNV2(321));