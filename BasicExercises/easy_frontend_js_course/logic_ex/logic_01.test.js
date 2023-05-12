// Tìm 2 số có tổng bằng số cho trước
// Viết hàm findSumPair(numberList, targetSum) để tìm ra 2 số trong mảng numberList có tổng bằng
// targetSum
// Lưu ý:
// Trường hợp không tìm thấy 2 số thoả yêu cầu thì trả về mảng rỗng
// Trường hợp tìm thấy 2 số thoả yêu cầu thì trả về mảng chứa 2 số đó và sắp xếp tăng dần

import { findSumPair } from './logic_01.js';

describe('findSumPair(numberList, targetSum)', () => {
  it('should return [] if list is not an arr', () => {
    expect(findSumPair({}, 5)).toEqual([]);
    expect(findSumPair(null, 5)).toEqual([]);
    expect(findSumPair(undefined, 5)).toEqual([]);
    expect(findSumPair('', 5)).toEqual([]);
    expect(findSumPair(123, 5)).toEqual([]);
  });
  it('should return [] if list is empty', () => {
    expect(findSumPair([], 5)).toEqual([]);
  });

  it('should return [] if list does not have sum pair', () => {
    expect(findSumPair([1, 2], 2)).toEqual([]);
  });

  it('should return sum pair', () => {
    expect(findSumPair([3, 2, 1], 5)).toEqual([2, 3]);
  });
});
