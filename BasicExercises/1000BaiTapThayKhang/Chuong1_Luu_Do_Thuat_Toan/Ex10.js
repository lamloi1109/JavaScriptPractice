// Bài 10: Tính T(x, n) = x^n

function pow(x, n) {
  if (typeof x !== 'number' || typeof n !== 'number') {
    return undefined;
  }

  if (x === 0) {
    return 0;
  }

  if (n === 0) {
    return 1;
  }

  return Math.pow(x, n);
}

function powV2(x, n) {
  if (typeof x !== 'number' || typeof n !== 'number') {
    return undefined;
  }

  if (x === 0) {
    return 0;
  }

  if (n === 0) {
    return 1;
  }

  let pow = x;

  for (let index = 1; index < n; index++) {
    x = x * pow;
  }
  return x;
}


console.log(powV2(2, 3));
