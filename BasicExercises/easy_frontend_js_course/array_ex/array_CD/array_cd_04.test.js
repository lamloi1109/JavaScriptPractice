// Cho một mảng đã được sắp xếp tăng dần. Cho một số, nhờ bạn add vào mảng
// nhưng phải đảm bảo mảng vẫn đc sắp xếp tăng dần.
// Viết hàm insert(numberList, newNumber) để chèn newNumber vào mảng numberList sao cho mảng kết
// quả vẫn là tăng dần.
import { insert } from "./array_cd_04.js";

describe('insert(numberList, newNumber)', () => {
  it('should return [] if list is not an array', () => {
    expect(insert({}, 1)).toEqual([]);
    expect(insert(null, 1)).toEqual([]);
    expect(insert(undefined, 1)).toEqual([]);
    expect(insert('', 1)).toEqual([]);
    expect(insert(123, 1)).toEqual([]);
  });
  it('should return [] if list is empty', () => {
    expect(insert([], 1)).toEqual([1]);
  });

  it('should return correct list', () => {
    expect(insert([1, 2, 3], 3)).toEqual([1, 2, 3, 3]);
    expect(insert([1, 2, 4], 3)).toEqual([1, 2, 3, 4]);
  });
});
