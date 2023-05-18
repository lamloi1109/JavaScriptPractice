// Bài 42: Cho n là số nguyên dương. Hãy tìm giá trị nguyên dương k lớn nhất sao cho S(k)  < n.
// Trong đó chuỗi k được định nghĩa như sau: S(k) = 1 + 2 + 3 + … + k

function findKNumber(number) {
  if (typeof number !== 'number') return undefined;

  if (number <= 0) return undefined;

  for (let index = 1; index <= number; index++) {
    const sumK = (index * (index - 1)) / 2;
    if (sumK >= number) {
      return index - 1;
    }
  }
  return -1;
}

console.log(findKNumber(100));
