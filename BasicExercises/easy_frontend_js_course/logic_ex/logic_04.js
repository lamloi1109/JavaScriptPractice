// Tìm số có số lần xuất hiện nhiều nhất
// Viết hàm findMostFrequentNumber(numberList) tìm số có số lần xuất hiện nhiều nhất trong mảng
// numberList, trường hợp có nhiều số cùng tần số xuất hiện thì trả về số đầu tiên
// tương tự logic 3
function findMostFrequentNumber(numberList) {
  if (!Array.isArray(numberList) || numberList.length === 0) return undefined;

  let maxKey = undefined;
  numberList.reduce((acc, curr) => {
    acc[curr] = acc[curr] + 1 || 1;

    if (maxKey === undefined || acc[curr] > acc[maxKey]) {
      maxKey = curr;
    }

    return acc;
  }, {});

  return maxKey;
}

console.log(findMostFrequentNumber([1, 2, 3, 2, 3, 4])); // 2
console.log(findMostFrequentNumber([1])); // 1
console.log(findMostFrequentNumber([1, 2, 3, 2])); // 2
