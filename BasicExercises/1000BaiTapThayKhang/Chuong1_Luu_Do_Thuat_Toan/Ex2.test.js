// Bài 2: Tính S(n) = 1^2 + 2^2 + … + n^2

import { sumPowerTwo, sumPowerTwoV2, sumPowerTwoV3, sumPowerTwoV4 } from './Ex2.js';

describe('sumPowerTwo(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(sumPowerTwo({})).toBe(undefined);
    expect(sumPowerTwo(null)).toBe(undefined);
    expect(sumPowerTwo(undefined)).toBe(undefined);
    expect(sumPowerTwo('')).toBe(undefined);
  });
  it('should return 0 if number is 0', () => {
    expect(sumPowerTwo(0)).toBe(0);
  });
  it('should return sum', () => {
    expect(sumPowerTwo(6)).toBe(91);
  });
});

describe('sumPowerTwoV2(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(sumPowerTwoV2({})).toBe(undefined);
    expect(sumPowerTwoV2(null)).toBe(undefined);
    expect(sumPowerTwoV2(undefined)).toBe(undefined);
    expect(sumPowerTwoV2('')).toBe(undefined);
  });
  it('should return 0 if number is 0', () => {
    expect(sumPowerTwoV2(0)).toBe(0);
  });
  it('should return sum', () => {
    expect(sumPowerTwoV2(6)).toBe(91);
  });
});

describe('sumPowerTwoV3(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(sumPowerTwoV3({})).toBe(undefined);
    expect(sumPowerTwoV3(null)).toBe(undefined);
    expect(sumPowerTwoV3(undefined)).toBe(undefined);
    expect(sumPowerTwoV3('')).toBe(undefined);
  });
  it('should return 0 if number is 0', () => {
    expect(sumPowerTwoV3(0)).toBe(0);
  });
  it('should return sum', () => {
    expect(sumPowerTwoV3(6)).toBe(91);
  });
});

describe('sumPowerTwoV4(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(sumPowerTwoV4({})).toBe(undefined);
    expect(sumPowerTwoV4(null)).toBe(undefined);
    expect(sumPowerTwoV4(undefined)).toBe(undefined);
    expect(sumPowerTwoV4('')).toBe(undefined);
  });
  it('should return 0 if number is 0', () => {
    expect(sumPowerTwoV4(0)).toBe(0);
  });
  it('should return sum', () => {
    expect(sumPowerTwoV4(6)).toBe(91);
  });
});
