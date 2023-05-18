// Bài 104: Viết chương trình nhập ngày, tháng, năm. Tính xem ngày đó là ngày thứ bao nhiêu trong năm
function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

export function findNumberDayInYear(day, month, year) {
  if (typeof month !== 'number' || month <= 0 || month > 12) {
    return undefined;
  }

  if (typeof day !== 'number' || day <= 0 || day > 31) {
    return undefined;
  }

  if (typeof year !== 'number') {
    return undefined;
  }

  const monthList = {
    1: 31,
    2: isLeapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  if (monthList[month] < day) {
    return undefined;
  }

  let numberDay = 0;

  for (let index = 1; index < month; index++) {
    numberDay += monthList[index];
  }

  numberDay += day;

  if (numberDay < 0 || numberDay > 366) {
    return undefined;
  }

  return numberDay;
}
