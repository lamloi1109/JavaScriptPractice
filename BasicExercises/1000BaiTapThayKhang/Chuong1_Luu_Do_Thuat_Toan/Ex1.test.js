// Bài 1: Tính S(n) = 1 + 2 + 3 + … + n

import {
  getSumOneToNumber,
  getSumOneToNumberV2,
  getSumOneToNumberV3,
  getSumOneToNumberV4,
} from './Ex1.js';

describe('getSumOneToNumber(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(getSumOneToNumber({})).toBe(undefined);
    expect(getSumOneToNumber(null)).toBe(undefined);
    expect(getSumOneToNumber(undefined)).toBe(undefined);
    expect(getSumOneToNumber('')).toBe(undefined);
    expect(getSumOneToNumber([])).toBe(undefined);
  });
  it('should return 0 if number is 0', () => {
    expect(getSumOneToNumber(0)).toBe(0);
  });
  it('should return sum from 1 to number', () => {
    expect(getSumOneToNumber(6)).toBe(21);
    expect(getSumOneToNumber(5)).toBe(15);
  });
});

describe('getSumOneToNumberV2(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(getSumOneToNumberV2({})).toBe(undefined);
    expect(getSumOneToNumberV2(null)).toBe(undefined);
    expect(getSumOneToNumberV2(undefined)).toBe(undefined);
    expect(getSumOneToNumberV2('')).toBe(undefined);
    expect(getSumOneToNumberV2([])).toBe(undefined);
  });
  it('should return 0 if number is 0', () => {
    expect(getSumOneToNumberV2(0)).toBe(0);
  });
  it('should return sum from 1 to number', () => {
    expect(getSumOneToNumberV2(6)).toBe(21);
    expect(getSumOneToNumberV2(5)).toBe(15);
  });
});
describe('getSumOneToNumberV3(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(getSumOneToNumberV3({})).toBe(undefined);
    expect(getSumOneToNumberV3(null)).toBe(undefined);
    expect(getSumOneToNumberV3(undefined)).toBe(undefined);
    expect(getSumOneToNumberV3('')).toBe(undefined);
    expect(getSumOneToNumberV3([])).toBe(undefined);
  });
  it('should return 0 if number is 0', () => {
    expect(getSumOneToNumberV3(0)).toBe(0);
  });
  it('should return sum from 1 to number', () => {
    expect(getSumOneToNumberV3(6)).toBe(21);
    expect(getSumOneToNumberV3(5)).toBe(15);
  });
});
describe('getSumOneToNumberV4(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(getSumOneToNumberV4({})).toBe(undefined);
    expect(getSumOneToNumberV4(null)).toBe(undefined);
    expect(getSumOneToNumberV4(undefined)).toBe(undefined);
    expect(getSumOneToNumberV4('')).toBe(undefined);
    expect(getSumOneToNumberV4([])).toBe(undefined);
  });
  it('should return 0 if number is 0', () => {
    expect(getSumOneToNumberV4(0)).toBe(0);
  });
  it('should return sum from 1 to number', () => {
    expect(getSumOneToNumberV4(6)).toBe(21);
    expect(getSumOneToNumberV4(5)).toBe(15);
  });
});
