// Tìm vị trí của sản phẩm có mã code là = abc

import { findProductByCode, findProductByCodeV2 } from './array_find_10.js';

// Viết hàm findProductByCode(productList, code) để tìm ra vị trí product có mã sản phẩm bằng với code.
describe('findProductByCode(productList, code)', () => {
  const productList = [
    { id: 1, code: 'ip01', name: 'IPhone 16' },
    { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
  ];
  it('should return -1 if list is not an array', () => {
    expect(findProductByCode('DSADSA', 1)).toBe(-1);
  });
  it('should return -1 if list is empty array', () => {
    expect(findProductByCode([], 'ip01')).toBe(-1);
  });
  it('should return correct index if list has target id', () => {
    expect(findProductByCode(productList, 'ip01')).toBe(0);
  });
});

describe('findProductByCodeV2(productList, code)', () => {
  const productList = [
    { id: 1, code: 'ip01', name: 'IPhone 16' },
    { id: 2, code: 'ip02', name: 'IPhone 16 Promax' },
  ];
  it('should return -1 if list is not an array', () => {
    expect(findProductByCodeV2('DSADSA', 1)).toBe(-1);
  });
  it('should return -1 if list is empty array', () => {
    expect(findProductByCodeV2([], 'ip01')).toBe(-1);
  });
  it('should return -1 if list does not have target id', () => {
    expect(findProductByCodeV2(productList, 'ip03')).toBe(-1);
  });
  it('should return correct index if list has target id', () => {
    expect(findProductByCodeV2(productList, 'ip01')).toBe(0);
  });
});
