// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.

// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.

// using two pointer left and right
// using recursion

export function palindrome(str) {
  if (typeof str !== 'string') {
    return undefined;
  }
  // skip special symbols
  let strRemaining = str.trim().toLowerCase();

  //     .split('')
  //     .filter(
  //       (char) =>
  //         char.charCodeAt() <= 122 &&
  //         char.charCodeAt() >= 48 &&
  //         (char.charCodeAt() >= 97 || char.charCodeAt() <= 57)
  //     );

    let i = 0;
    let j = strRemaining.length - 1;

  while (i < j) {

    while (
      strRemaining[i].charCodeAt() > 122 ||
      strRemaining[i].charCodeAt() < 48 ||
      (strRemaining[i].charCodeAt() < 97 && strRemaining[i].charCodeAt() > 57)
    ) {
      i++;
    }

    while (
      strRemaining[j].charCodeAt() > 122 ||
      strRemaining[j].charCodeAt() < 48 ||
      (strRemaining[j].charCodeAt() < 97 && strRemaining[j].charCodeAt() > 57)
    ) {
      j--;
    }

    if (i > j) {
      return true;
    }

    const left = strRemaining[i];
    const right = strRemaining[j];

    if (left !== right) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}