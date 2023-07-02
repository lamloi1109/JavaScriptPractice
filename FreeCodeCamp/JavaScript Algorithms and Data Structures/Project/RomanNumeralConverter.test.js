// Convert the given number into a roman numeral.
// Roman numerals	Arabic numerals
// M	1000
// CM	900
// D	500
// CD	400
// C	100
// XC	90
// L	50
// XL	40
// X	10
// IX	9
// V	5
// IV	4
// I	1
// All roman numerals answers should be provided in upper-case.
import { convertToRoman } from './RomanNumeralConverter.js';

describe('convertToRoman(number)', () => {
  it('should return undefined if number is invalid', () => {
    expect(convertToRoman('')).toBeUndefined();
    expect(convertToRoman([])).toBeUndefined();
    expect(convertToRoman({})).toBeUndefined();
    expect(convertToRoman(null)).toBeUndefined();
    expect(convertToRoman(undefined)).toBeUndefined();
  });

  it('should return the correct string', () => {
    expect(convertToRoman(500)).toBe('D');
    expect(convertToRoman(501)).toBe('DI');
    expect(convertToRoman(649)).toBe('DCXLIX');
    expect(convertToRoman(798)).toBe('DCCXCVIII');
    expect(convertToRoman(891)).toBe('DCCCXCI');
    expect(convertToRoman(1000)).toBe('M');
    expect(convertToRoman(1004)).toBe('MIV');
    expect(convertToRoman(1006)).toBe('MVI');
    expect(convertToRoman(1023)).toBe('MXXIII');
    expect(convertToRoman(2014)).toBe('MMXIV');
    expect(convertToRoman(3999)).toBe('MMMCMXCIX');
  });
});
