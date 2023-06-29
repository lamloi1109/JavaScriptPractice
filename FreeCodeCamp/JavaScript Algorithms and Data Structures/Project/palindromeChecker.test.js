// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

import { palindrome } from "./palindromeChecker.js";

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

describe('palindrome(string)', () => {
  it('should return undefined if string is invalid', () => {
    expect(palindrome(123)).toBeUndefined();
    expect(palindrome([])).toBeUndefined();
    expect(palindrome({})).toBeUndefined();
    expect(palindrome(undefined)).toBeUndefined();
    expect(palindrome(null)).toBeUndefined();
  });
  it('should return false if it is not match', () => {
    expect(palindrome('not a palindrome')).toBe(false);

    expect(palindrome('nope')).toBe(false);

    expect(palindrome('almostomla')).toBe(false);

    expect(palindrome('1 eye for of 1 eye.')).toBe(false);

    expect(palindrome('five|_/|four')).toBe(false);
  });

  it('should return true if argument is palindrome', () => {
    expect(palindrome('racecar')).toBe(true);

    expect(palindrome('RaceCar')).toBe(true);
    expect(palindrome('race CAR')).toBe(true);
    expect(palindrome('2A3*3a2')).toBe(true);

    expect(palindrome('2A3 3a2')).toBe(true);

    expect(palindrome('eye')).toBe(true);
    expect(palindrome('_eye')).toBe(true);
    expect(palindrome('2_A3*3#A2')).toBe(true);
    expect(palindrome('2_A3*3#A2')).toBe(true);

    expect(palindrome('2_A3*3#A2')).toBe(true);

    expect(palindrome(' My age is 0, 0 si ega ym.')).toBe(true);
    
    expect(palindrome('0_0 (: /- :) 0-0')).toBe(true);
  });
});
