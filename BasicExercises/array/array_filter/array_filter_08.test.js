// Tìm tất cả sản phẩm có hỗ trợ free ship

import { findAllProducts, findAllProductsV2 } from './array_filter_08.js';

// Viết hàm findAllProducts(productList) để tìm ra tất cả product có isFreeShip=true
describe('findAllProducts(productList)', () => {
  const productList = [
    { id: 1, name: 'iphone X', isFreeShip: true },
    { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
    { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
  ];
  it('should return [] if list is not an array', () => {
    expect(findAllProducts('DSa')).toStrictEqual([]);
  });
  it('should return [] if list is empty array', () => {
    expect(findAllProducts([])).toStrictEqual([]);
  });

  it('should return [] if list does have free ship product', () => {
    expect(findAllProducts([])).toStrictEqual([]);
  });

  it('should return correct list if list has free ship product', () => {
    expect(findAllProducts(productList)).toStrictEqual([
      { id: 1, name: 'iphone X', isFreeShip: true },
      { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
    ]);
  });
});

describe('findAllProductsV2(productList)', () => {
    const productList = [
      { id: 1, name: 'iphone X', isFreeShip: true },
      { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
      { id: 3, name: 'iphone 20 Pro', isFreeShip: false },
    ];
    it('should return [] if list is not an array', () => {
      expect(findAllProductsV2('DSa')).toStrictEqual([]);
    });
    it('should return [] if list is empty array', () => {
      expect(findAllProductsV2([])).toStrictEqual([]);
    });
  
    it('should return [] if list does have free ship product', () => {
      expect(findAllProductsV2([])).toStrictEqual([]);
    });
  
    it('should return correct list if list has free ship product', () => {
      expect(findAllProductsV2(productList)).toStrictEqual([
        { id: 1, name: 'iphone X', isFreeShip: true },
        { id: 2, name: 'iphone 16 Pro', isFreeShip: true },
      ]);
    });
  });
  