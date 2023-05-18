// Bài 89: Viết chương trình tính tổng các giá trị lẻ nguyên dương nhỏ hơn N

function findTotalValueOddLessThanNumber(number) {
  if (typeof number !== 'number') {
    return undefined;
  }

  let total = 0;

  let i = 1;

  while (number > i) {
    total += i;
    i += 2;
  }

  return total;
}

console.log(findTotalValueOddLessThanNumber(10));
