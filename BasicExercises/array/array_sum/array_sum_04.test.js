// Tổng tiền của giỏ hàng
// Viết hàm calcCartTotal(cartItemList) để tính tổng tiền của giỏ hàng.

import { calcCartTotal, calcCartTotalV2 } from './array_sum_04.js';

describe('calcCartTotal(cartItemList)', () => {
  it('should return 0 if list is not an array', () => {
    expect(calcCartTotal(null)).toBe(0);
    expect(calcCartTotal(undefined)).toBe(0);
    expect(calcCartTotal('')).toBe(0);
    expect(calcCartTotal(123)).toBe(0);
  });

  it('should return 0 if list is empty array', () => {
    expect(calcCartTotal([])).toBe(0);
  });

  it('should return 0 if all item has quantity is 0', () => {
    expect(
      calcCartTotal([
        { id: 1, product: { id: 1, price: 50000 }, quantity: 0 },
        { id: 2, product: { id: 2, price: 100000 }, quantity: 0 },
      ])
    ).toBe(0);
  });

  it('should return correct cart total', () => {
    expect(
      calcCartTotal([
        { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
        { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
      ])
    ).toBe(250000);
  });
});

describe('calcCartTotalV2(cartItemList)', () => {
  it('should return 0 if list is not an array', () => {
    expect(calcCartTotalV2(null)).toBe(0);
    expect(calcCartTotalV2(undefined)).toBe(0);
    expect(calcCartTotalV2('')).toBe(0);
    expect(calcCartTotalV2(123)).toBe(0);
  });

  it('should return 0 if list is empty array', () => {
    expect(calcCartTotalV2([])).toBe(0);
  });

  it('should return 0 if all item has quantity is 0', () => {
    expect(
      calcCartTotalV2([
        { id: 1, product: { id: 1, price: 50000 }, quantity: 0 },
        { id: 2, product: { id: 2, price: 100000 }, quantity: 0 },
      ])
    ).toBe(0);
  });

  it('should return correct cart total', () => {
    expect(
      calcCartTotalV2([
        { id: 1, product: { id: 1, price: 50000 }, quantity: 1 },
        { id: 2, product: { id: 2, price: 100000 }, quantity: 2 },
      ])
    ).toBe(250000);
  });
});
