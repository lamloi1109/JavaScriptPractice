// Tìm sản phầm đầu tiên có free ship
// Viết hàm findProductHavingFreeShip(productList) để tìm ra sản phẩm đầu tiên có free ship.

import { findProductHavingFreeShip, findProductHavingFreeShipV2 } from "./array_find_14.js";

describe('findProductHavingFreeShip(productList)', () => {
  const productList = [
    { id: 1, name: 'IPhone 5', isFreeShip: false },
    { id: 2, name: 'IPhone X', isFreeShip: true },
    { id: 3, name: 'IPhone 12 Pro', isFreeShip: true },
  ];
  it('should return {} if list is not an array', () => {
    expect(findProductHavingFreeShip('DSADSA')).toStrictEqual({});
  });

  it('should return {} if list is empty array', () => {
    expect(findProductHavingFreeShip([])).toStrictEqual({});
  });

  it('should return {} if list does not have freeShip product', () => {
    expect(
      findProductHavingFreeShip([
        { id: 1, name: 'IPhone 5', isFreeShip: false },
        { id: 3, name: 'IPhone 12 Pro', isFreeShip: false },
      ])
    ).toStrictEqual({});
  });
  it('should return correct product if list has freeShip product', () => {
    expect(findProductHavingFreeShip(productList)).toStrictEqual({
      id: 2,
      name: 'IPhone X',
      isFreeShip: true,
    });
  });
});


describe('findProductHavingFreeShipV2(productList)', () => {
    const productList = [
      { id: 1, name: 'IPhone 5', isFreeShip: false },
      { id: 2, name: 'IPhone X', isFreeShip: true },
      { id: 3, name: 'IPhone 12 Pro', isFreeShip: true },
    ];
    it('should return {} if list is not an array', () => {
      expect(findProductHavingFreeShipV2('DSADSA')).toStrictEqual({});
    });
  
    it('should return {} if list is empty array', () => {
      expect(findProductHavingFreeShipV2([])).toStrictEqual({});
    });
  
    it('should return {} if list does not have freeShip product', () => {
      expect(
        findProductHavingFreeShipV2([
          { id: 1, name: 'IPhone 5', isFreeShip: false },
          { id: 3, name: 'IPhone 12 Pro', isFreeShip: false },
        ])
      ).toStrictEqual({});
    });
    it('should return correct product if list has freeShip product', () => {
      expect(findProductHavingFreeShipV2(productList)).toStrictEqual({
        id: 2,
        name: 'IPhone X',
        isFreeShip: true,
      });
    });
  });