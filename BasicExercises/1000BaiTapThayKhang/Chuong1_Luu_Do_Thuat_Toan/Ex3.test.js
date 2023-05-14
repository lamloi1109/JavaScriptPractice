// Bài 3: Tính S(n) = 1 + ½ + 1/3 + … + 1/n

import { total, totalV2, totalV3 } from './Ex3.js';

describe('total(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(total({})).toBe(undefined);
    expect(total(null)).toBe(undefined);
    expect(total(undefined)).toBe(undefined);
    expect(total('')).toBe(undefined);
  });
  it('should return 0 if number is 0', () => {
    expect(total(0)).toBe(1);
  });
  it('should return sum', () => {
    expect(total(3)).toBe(1 + 1 / 2 + 1 / 3);
  });
});
describe('totalV2(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(totalV2({})).toBe(undefined);
    expect(totalV2(null)).toBe(undefined);
    expect(totalV2(undefined)).toBe(undefined);
    expect(totalV2('')).toBe(undefined);
  });
  it('should return 0 if number is 0', () => {
    expect(totalV2(0)).toBe(1);
  });
  it('should return sum', () => {
    expect(totalV2(3)).toBe(1 + 1 / 2 + 1 / 3);
  });
});

describe('totalV3(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(totalV3({})).toBe(undefined);
    expect(totalV3(null)).toBe(undefined);
    expect(totalV3(undefined)).toBe(undefined);
    expect(totalV3('')).toBe(undefined);
  });
  it('should return 0 if number is 0', () => {
    expect(totalV3(0)).toBe(1);
  });
  it('should return sum', () => {
    expect(totalV3(3)).toBe(1 + 1 / 2 + 1 / 3);
  });
});
