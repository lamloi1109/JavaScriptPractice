// Bài 161: Cho mảng 1 chiều các số nguyên, hãy tìm giá trị đầu tiên nằm trong khoảng [x, y] cho trước. Nếu mảng không có giá trị thỏa điều kiện trên thì trả về -1

// x là min
// y là max

function findNumberInRange(numberList, x, y) {
  if (!Array.isArray(numberList) || numberList.length === 0) {
    return undefined;
  }

  return numberList.find((number) => number >= x && number <= y) ?? -1;
}

console.log(findNumberInRange([1, 2, 3, 4, 5, 6, 7, 8], 0, 10));
