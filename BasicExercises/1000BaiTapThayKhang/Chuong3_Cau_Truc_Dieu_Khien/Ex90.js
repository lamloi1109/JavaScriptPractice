// Bài 90: Viết chương trình tìm số nguyên dương m lớn nhất sao cho 1 + 2 + … + m < N

function sumOneToNumber(number) {
  return (number * (number - 1)) / 2;
}
function findM(number) {
  if (typeof number !== 'number') {
    return undefined;
  }

  let i = 0;

  while (number > sumOneToNumber(i)) {
    i++;
  }
  return i - 1;
}

console.log(findM(10));

