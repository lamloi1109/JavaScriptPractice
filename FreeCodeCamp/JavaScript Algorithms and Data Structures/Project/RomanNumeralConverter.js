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

export function convertToRoman(number) {
  if (!Number.isInteger(number)) {
    return undefined;
  }

  const romanNumeralsObj = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
  };

  if (romanNumeralsObj[number]) {
    return romanNumeralsObj[number];
  }

  let remainingNumber = number;
  let result = [];
  let dividedNumber = 10;
  while (remainingNumber > 0) {
    let lastNumber =
      remainingNumber % dividedNumber === 0
        ? ((remainingNumber / dividedNumber) % dividedNumber) * dividedNumber
        : remainingNumber % dividedNumber;
    dividedNumber = dividedNumber * 10;

    let tempNumber = lastNumber;

    while (!romanNumeralsObj[tempNumber]) {
      if (tempNumber < 10) {
        tempNumber = tempNumber - 1;
        result.unshift('I');
      } else if (tempNumber < 100) {
        tempNumber = tempNumber - 10;
        result.unshift('X');
      } else if (tempNumber < 1000) {
        tempNumber = tempNumber - 100;
        result.unshift('C');
      } else {
        tempNumber = tempNumber - 1000;
        result.unshift('M');
      }
    }

    if (romanNumeralsObj[tempNumber]) {
      result.unshift(romanNumeralsObj[tempNumber]);
    }
    remainingNumber = remainingNumber - lastNumber;
  }

  return result.join('');
}

