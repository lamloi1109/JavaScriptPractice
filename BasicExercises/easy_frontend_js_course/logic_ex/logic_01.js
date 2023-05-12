// Tìm 2 số có tổng bằng số cho trước
// Viết hàm findSumPair(numberList, targetSum) để tìm ra 2 số trong mảng numberList có tổng bằng
// targetSum
// Lưu ý:
// Trường hợp không tìm thấy 2 số thoả yêu cầu thì trả về mảng rỗng
// Trường hợp tìm thấy 2 số thoả yêu cầu thì trả về mảng chứa 2 số đó và sắp xếp tăng dần

// [3, 2, 1]
// 5 - 3 = 2 -> tìm xem trong mảng có số 2 ko?
// Có thì return [2, 3]
// k thì đi tiếp
// 5 - 2 = 3 -> tìm xem trong mảng cố số 3 ko
// ...

export function findSumPair(numberList, targetSum) {
  if (!Array.isArray(numberList) || numberList.length === 0) return [];

  for (let index = 0; index < numberList.length; index++) {
    const number = numberList[index];

    // Tìm trong phần còn lại của mảng trừ numberList[index]
    if ([...numberList.slice(++index,numberList.length)].includes(targetSum - number)) {
      return [number, targetSum - number].sort((a, b) => a - b);
    }
  }
  return [];
}
