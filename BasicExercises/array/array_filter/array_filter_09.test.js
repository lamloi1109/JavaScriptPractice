// Tìm tất cả sản phẩm thuộc dòng iphone và còn hàng trong kho
// Viết hàm findAllIphones(productList) để tìm ra tất cả các product có tên chứa chữ iphone (ko phân biệt
// hoa thường) và vẫn còn hàng trong kho (amount > 0)

import { findAllIphones, findAllIphonesV2, findAllIphonesV3 } from './array_filter_09..js';

describe('findAllIphones(productList)', () => {
  const productList = [
    { id: 1, name: 'Luxury IPhone X', amount: 1 },
    { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
    { id: 3, name: 'iphone 20 Pro', amount: 2 },
  ];
  it('should return [] if list is not an array', () => {
    expect(findAllIphones('DSa')).toStrictEqual([]);
  });
  it('should return [] if list is empty array', () => {
    expect(findAllIphones([])).toStrictEqual([]);
  });

  it('should return [] if list does not have iphone', () => {
    expect(findAllIphones([])).toStrictEqual([]);
  });
  it('should return [] if list has iphone', () => {
    expect(findAllIphones(productList)).toStrictEqual([
      { id: 1, name: 'Luxury IPhone X', amount: 1 },
      { id: 3, name: 'iphone 20 Pro', amount: 2 },
    ]);
  });
});

describe('findAllIphonesV2(productList)', () => {
  const productList = [
    { id: 1, name: 'Luxury IPhone X', amount: 1 },
    { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
    { id: 3, name: 'iphone 20 Pro', amount: 2 },
  ];
  it('should return [] if list is not an array', () => {
    expect(findAllIphonesV2('DSa')).toStrictEqual([]);
  });
  it('should return [] if list is empty array', () => {
    expect(findAllIphonesV2([])).toStrictEqual([]);
  });

  it('should return [] if list does not have iphone', () => {
    expect(findAllIphonesV2([])).toStrictEqual([]);
  });
  it('should return [] if list has iphone', () => {
    expect(findAllIphonesV2(productList)).toStrictEqual([
      { id: 1, name: 'Luxury IPhone X', amount: 1 },
      { id: 3, name: 'iphone 20 Pro', amount: 2 },
    ]);
  });
});

describe('findAllIphonesV3(productList)', () => {
  const productList = [
    { id: 1, name: 'Luxury IPhone X', amount: 1 },
    { id: 2, name: 'Super Cool iphone 16 Pro', amount: 0 },
    { id: 3, name: 'iphone 20 Pro', amount: 2 },
  ];
  it('should return [] if list is not an array', () => {
    expect(findAllIphonesV3('DSa')).toStrictEqual([]);
  });
  it('should return [] if list is empty array', () => {
    expect(findAllIphonesV3([])).toStrictEqual([]);
  });

  it('should return [] if list does not have iphone', () => {
    expect(findAllIphonesV3([])).toStrictEqual([]);
  });
  it('should return [] if list has iphone', () => {
    expect(findAllIphonesV3(productList)).toStrictEqual([
      { id: 1, name: 'Luxury IPhone X', amount: 1 },
      { id: 3, name: 'iphone 20 Pro', amount: 2 },
    ]);
  });
});
