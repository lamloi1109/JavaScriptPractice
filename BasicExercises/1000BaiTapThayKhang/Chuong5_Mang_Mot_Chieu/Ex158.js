// Bài 158: Cho mảng 1 chiều các số thực, hãy tìm giá trị x sao cho đoạn [-x, x] chứa tất cả các giá trị trong mảng

// Nếu |max| > max -> [-min, min]
// Nếu |Min| < max -> [-max, max]

function findX(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  let min = Number.MAX_SAFE_INTEGER;
  let max = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];
    min = number < min ? number : min;
    max = number > max ? number : max;
  }

  return Math.abs(min) > max ? min : max;
}
console.log(findX([-10, 1, 2, 2, 3, 5]));
