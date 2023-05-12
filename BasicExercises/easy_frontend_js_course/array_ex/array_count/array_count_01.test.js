// Ðếm số dương chẵn có trong mảng
// Viết hàm countPositiveEvenNumbers(numberList) để đếm có bao nhiêu số dương chẳn có trong mảng.
import {
  countPositiveEvenNumbers,
  countPositiveEvenNumbersV2,
  countPositiveEvenNumbersV3,
} from './array_count_01.js';

describe('countPositiveEvenNumbers(numberList)', () => {
  it('should return 0 if list is not an array', () => {
    expect(countPositiveEvenNumbers('DSa')).toBe(0);
  });
  it('should return 0 if list is empty array', () => {
    expect(countPositiveEvenNumbers([])).toBe(0);
  });
  it('should return 0 if list does not have positive number', () => {
    expect(countPositiveEvenNumbers([])).toBe(0);
  });
  it('should return correct number if list has positive number', () => {
    expect(countPositiveEvenNumbers([-2, -1, 1, 2, 4])).toBe(2);
  });
});

describe('countPositiveEvenNumbersV2(numberList)', () => {
  it('should return 0 if list is not an array', () => {
    expect(countPositiveEvenNumbersV2('DSa')).toBe(0);
  });
  it('should return 0 if list is empty array', () => {
    expect(countPositiveEvenNumbersV2([])).toBe(0);
  });
  it('should return 0 if list does not have positive number', () => {
    expect(countPositiveEvenNumbersV2([])).toBe(0);
  });
  it('should return correct number if list has positive number', () => {
    expect(countPositiveEvenNumbersV2([-2, -1, 1, 2, 4])).toBe(2);
  });
});

describe('countPositiveEvenNumbersV3(numberList)', () => {
  it('should return 0 if list is not an array', () => {
    expect(countPositiveEvenNumbersV3('DSa')).toBe(0);
  });
  it('should return 0 if list is empty array', () => {
    expect(countPositiveEvenNumbersV3([])).toBe(0);
  });
  it('should return 0 if list does not have positive number', () => {
    expect(countPositiveEvenNumbersV3([])).toBe(0);
  });
  it('should return correct number if list has positive number', () => {
    expect(countPositiveEvenNumbersV3([-2, -1, 1, 2, 4])).toBe(2);
  });
});
