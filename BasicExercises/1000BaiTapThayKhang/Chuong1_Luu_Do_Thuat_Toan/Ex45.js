// Bài 45: Hãy tính tích các chữ số của số nguyên dương n

function calcMultiplicationOfN(n) {
  if (typeof n !== 'number') {
    return undefined;
  }

  if (n <= 0) return 0;

  let remaining = n;
  let multi = 1;

  while (remaining > 0) {
    let lastNumber = remaining % 10;

    multi *= lastNumber;

    remaining = Math.trunc(remaining / 10);
  }

  return multi;
}

function calcMultiplicationOfNV2(n) {
  if (typeof n !== 'number') {
    return undefined;
  }

  if (n <= 0) return 0;

  const numberList = n.toString().split('');

  return numberList.reduce((multi, number) => multi * Number.parseInt(number), 1);
}

console.log(calcMultiplicationOfNV2(1234));
