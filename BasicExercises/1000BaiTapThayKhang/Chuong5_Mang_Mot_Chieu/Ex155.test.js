// Bài 155: Hãy tìm giá trị trong mảng các số thực xa giá trị x nhất

import { findFloatNumber } from "./Ex155.js";

describe('findFloatNumber(floatNumberList, x)', () => {
  it('should return undefined if arr is not an array', () => {
    expect(findFloatNumber(null,1)).toBe(undefined);
    expect(findFloatNumber(undefined,1)).toBe(undefined);
    expect(findFloatNumber({},1)).toBe(undefined);
    expect(findFloatNumber('',1)).toBe(undefined);
    expect(findFloatNumber(123,1)).toBe(undefined);
  });

  it('should return undefined if arr is empty array', () => {
    expect(findFloatNumber([],1)).toBe(undefined);
  });

  it('should return correct float number', () => {
    expect(findFloatNumber([0.1, 0.2, 0.3, 0.1 ,0.2, 0.4, 0.5],0.4)).toBe(0.1);
  });

});
