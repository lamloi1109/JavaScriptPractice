// Bài 82: Viết chương trình tìm số lớn nhất trong 3 số thực a, b, c

function findMaxFloatNumber(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return undefined;
  }

  if (a - b >= 0 && b - c >= 0) {
    return a;
  }
  if (b - a >= 0 && a - c >= 0) {
    return b;
  }

  return c;
}
console.log(findMaxFloatNumber(0.5, 0.2, 0.5));

function findMaxFloatNumberV2(a, b, c) {
  if (typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number') {
    return undefined;
  }

  return Math.max(a, b, c);
}

console.log(findMaxFloatNumberV2(0.5, 0.2, 0.5));
