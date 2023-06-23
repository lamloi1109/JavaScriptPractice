// Write a JavaScript program to convert a specified number into an array of digits.

import { digitizeV1, digitizeV2, digitizeV3 } from './6.js';

describe('digitizeV1(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(digitizeV1(null)).toBeUndefined();
    expect(digitizeV1(undefined)).toBeUndefined();
    expect(digitizeV1([])).toBeUndefined();
    expect(digitizeV1({})).toBeUndefined();
    expect(digitizeV1('123')).toBeUndefined();
  });

  it('should return undefined if number is float number', () => {
    expect(digitizeV1(123.2)).toBeUndefined();
  });

  it('should return list number after convert', () => {
    expect(digitizeV1(123)).toEqual([1, 2, 3]);
    expect(digitizeV1(1230)).toEqual([1, 2, 3, 0]);
  });
});

describe('digitizeV2(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(digitizeV2(null)).toBeUndefined();
    expect(digitizeV2(undefined)).toBeUndefined();
    expect(digitizeV2([])).toBeUndefined();
    expect(digitizeV2({})).toBeUndefined();
    expect(digitizeV2('123')).toBeUndefined();
  });

  it('should return undefined if number is float number', () => {
    expect(digitizeV2(123.2)).toBeUndefined();
  });

  it('should return list number after convert', () => {
    expect(digitizeV2(123)).toEqual([1, 2, 3]);
    expect(digitizeV2(1230)).toEqual([1, 2, 3, 0]);
  });
});

describe('digitizeV3(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(digitizeV3(null)).toBeUndefined();
    expect(digitizeV3(undefined)).toBeUndefined();
    expect(digitizeV3([])).toBeUndefined();
    expect(digitizeV3({})).toBeUndefined();
    expect(digitizeV3('123')).toBeUndefined();
  });

  it('should return undefined if number is float number', () => {
    expect(digitizeV3(123.2)).toBeUndefined();
  });

  it('should return list number after convert', () => {
    expect(digitizeV3(123)).toEqual([1, 2, 3]);
    expect(digitizeV3(1230)).toEqual([1, 2, 3, 0]);
  });
});
