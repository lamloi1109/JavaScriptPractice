// Telephone Number Validator
// Return true if the passed string looks like a valid US phone number.

import { telephoneCheck } from './TelephoneNumberValidator.js';

// The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. Your job is to validate or reject the US phone number based on any combination of the formats provided above. The area code is required. If the country code is provided, you must confirm that the country code is 1. Return true if the string is a valid US phone number; otherwise return false.

describe('telePhoneChecK(str)', () => {
  it('should return undefined if str is invalid', () => {
    expect(telephoneCheck(123)).toBeUndefined();
    expect(telephoneCheck('')).toBeUndefined();
    expect(telephoneCheck([])).toBeUndefined();
    expect(telephoneCheck(null)).toBeUndefined();
    expect(telephoneCheck(undefined)).toBeUndefined();
    expect(telephoneCheck({})).toBeUndefined();
  });
  it('should return true', () => {
    expect(telephoneCheck('555-555-5555')).toBeTruthy();
    expect(telephoneCheck('1 555-555-5555')).toBeTruthy();
    expect(telephoneCheck('1 (555) 555-5555')).toBeTruthy();
    expect(telephoneCheck('5555555555')).toBeTruthy();
    expect(telephoneCheck('555-555-5555')).toBeTruthy();
    expect(telephoneCheck('(555)555-5555')).toBeTruthy();
    expect(telephoneCheck('1 555 555 5555')).toBeTruthy();
    expect(telephoneCheck('1 456 789 4444')).toBeTruthy();
  });
  it('should return false', () => {
    expect(telephoneCheck('2(757)622-7382')).toBeFalsy();
    expect(telephoneCheck('555)-555-5555')).toBeFalsy();
    expect(telephoneCheck('(555-555-5555')).toBeFalsy();
    expect(telephoneCheck('(555)5(55?)-5555')).toBeFalsy();
    expect(telephoneCheck('2(757)6227382')).toBeFalsy();
    expect(telephoneCheck('55 55-55-555-5')).toBeFalsy();
    expect(telephoneCheck('11 555-555-5555')).toBeFalsy();
    expect(telephoneCheck('10 (757) 622-7382')).toBeFalsy();
  });
});
