// Bài 85: Nhập vào tháng của 1 năm. Cho biết tháng thuộc quý mấy trong năm

// 1 Năm có 4 Quý
// Quý 1: 1 - 3
// Quý 2: 4 - 6
// Quý 3: 7 - 9
// Quý 4: 10 - 12

// MỘt số cách giải:
// If else
// Switch case
// Object

function findQuarter(month) {
  if (typeof month !== 'number' || month <= 0 || month > 12) {
    return undefined;
  }

  if (month < 4) return 'The first quarter';
  if (month < 7) return 'The second quarter';
  if (month < 10) return 'The third quarter';

  return 'The fourth quarter';
}

console.log(findQuarter(10));


function findQuarterV2(month) {
  if (typeof month !== 'number' || month <= 0 || month > 12) {
    return undefined;
  }

  const quarter = {
    1: 'The first quarter',
    2: 'The first quarter',
    3: 'The first quarter',
    4: 'The second quarter',
    5: 'The second quarter',
    6: 'The second quarter',
    7: 'The third quarter',
    8: 'The third quarter',
    9: 'The third quarter',
    10: 'The fourth quarter',
    11: 'The fourth quarter',
    12: 'The fourth quarter',
  };

  return quarter[month];
}

console.log(findQuarterV2(10));
