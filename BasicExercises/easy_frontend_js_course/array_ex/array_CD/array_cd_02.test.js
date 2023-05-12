// Xoá một phần tử tại vị trí k
// Viết hàm remove(arr, k, n) để xoá n phần tử ra khỏi mảng arr kể từ vị trị k (zero based)
// Nếu k < 0 hoặc k >= arr.length thì trả về mảng hiện tại.
// Nếu k hợp lệ thì remove n phần tử kể tử vị trí k và trả về mảng kết quả.
// Nếu n không truyền vào thì remove tới cuối mảng.
// Lưu ý không được làm thay đổi mảng arr truyền vào.

import { remove } from './array_cd_02.js';

describe('remove(arr, k, n)', () => {
  it('should return [] if arr is not an arr', () => {
    expect(remove(null, 1, 1)).toEqual([]);
    expect(remove(undefined, 1, 1)).toEqual([]);
    expect(remove({}, 1, 1)).toEqual([]);
    expect(remove('', 1, 1)).toEqual([]);
    expect(remove(123, 1, 1)).toEqual([]);
  });
  it('should return [] if arr is empty arr', () => {
    expect(remove([], 1, 1)).toEqual([]);
  });
  it('should return [] if n is undefined', () => {
    expect(remove([1, 2, 3], 1)).toEqual([]);
  });

  it('should return arr if k < 0 || k <= arr.length', () => {
    expect(remove([1, 2, 3], 1)).toEqual([]);
  });

  it('should return result arr if k is valid', () => {
    expect(remove([1, 2, 3], 1, 2)).toEqual([1]);
  });
});
