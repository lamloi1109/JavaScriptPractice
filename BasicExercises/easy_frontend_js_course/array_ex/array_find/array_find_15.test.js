// Tìm sản phẩm đầu tiên có tên bắt đầu bằng chữ iphone (không phân biệt hoa thường)
// Viết hàm findFirstIPhone(productList) để tìm ra sản phẩm dòng IPhone đầu tiên

import { findFirstIPhone, findFirstIPhoneV2 } from './array_find_15.js';

describe('findFirstIPhone(productList)', () => {
  const productList = [
    { id: 1, name: 'Samsung' },
    { id: 2, name: 'iphone lor' },

    { id: 3, name: 'IPHONE X' },
    { id: 4, name: 'iPhone 12 Pro' },
  ];
  it('should return {} if list is not an array', () => {
    expect(findFirstIPhone('DSADSA')).toStrictEqual({});
  });

  it('should return {} if list is empty array', () => {
    expect(findFirstIPhone([])).toStrictEqual({});
  });

  it('should return {} if list does not have iphone', () => {
    expect(
      findFirstIPhone([
        { id: 1, name: 'Samsung' },

        { id: 2, name: 'Nokia' },
      ])
    ).toStrictEqual({});
  });
  it('should return correct product if list has iphone', () => {
    expect(findFirstIPhone(productList)).toStrictEqual({ id: 2, name: 'iphone lor' });
  });
});

describe('findFirstIPhoneV2(productList)', () => {
  const productList = [
    { id: 1, name: 'Samsung' },
    { id: 2, name: 'iphone lor' },

    { id: 3, name: 'IPHONE X' },
    { id: 4, name: 'iPhone 12 Pro' },
  ];
  it('should return {} if list is not an array', () => {
    expect(findFirstIPhoneV2('DSADSA')).toStrictEqual({});
  });

  it('should return {} if list is empty array', () => {
    expect(findFirstIPhoneV2([])).toStrictEqual({});
  });

  it('should return {} if list does not have iphone', () => {
    expect(
      findFirstIPhoneV2([
        { id: 1, name: 'Samsung' },

        { id: 2, name: 'Nokia' },
      ])
    ).toStrictEqual({});
  });
  it('should return correct product if list has iphone', () => {
    expect(findFirstIPhoneV2(productList)).toStrictEqual({ id: 2, name: 'iphone lor' });
  });
});
