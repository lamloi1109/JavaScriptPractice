// Caesars Cipher
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

import { rot13 } from "./CaesarsCipher.js";

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

describe('rot13(string)', () => {
  it('should return undefined if string is invalid', () => {
    expect(rot13({})).toBeUndefined();
    expect(rot13([])).toBeUndefined();
    expect(rot13(null)).toBeUndefined();
    expect(rot13(undefined)).toBeUndefined();
    expect(rot13(123)).toBeUndefined();
  });

  it('should decode to the string', () => {
    expect(rot13('SERR PBQR PNZC')).toBe('FREE CODE CAMP');
    expect(rot13('SERR CVMMN!')).toBe('FREE PIZZA!');
    expect(rot13('SERR YBIR?')).toBe('FREE LOVE?');
    expect(rot13('GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.')).toBe(
      'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.'
    );
  });
});
