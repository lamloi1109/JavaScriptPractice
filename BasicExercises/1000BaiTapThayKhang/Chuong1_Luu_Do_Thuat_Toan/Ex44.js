// Bài 44: Hãy tính tổng các chữ số của số nguyên dương n

function totalNumberOfN(n) {
  if (typeof n !== 'number') return undefined;

  if (n <= 0) return 0;

  let remaining = n;
  let total = 0;

  while (remaining > 0) {
    let lastNumber = remaining % 10;

    total += lastNumber;

    remaining = Math.trunc(remaining / 10);
  }

  return total;
}

function totalNumberOfNV2(n) {
  if (typeof n !== 'number') return undefined;

  if (n <= 0) return 0;

  const numberList = n.toString().split('');

  return numberList.reduce((total, number) => total + Number.parseInt(number), 0);
}

console.log(totalNumberOfNV2(123));
