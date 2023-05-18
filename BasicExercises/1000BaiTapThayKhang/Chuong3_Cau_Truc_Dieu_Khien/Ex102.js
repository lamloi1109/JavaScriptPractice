// Bài 102: Viết chương trình nhập vào 1 ngày ( ngày, tháng, năm). Tìm ngày kế ngày vừa nhập (ngày, tháng, năm)

function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

export function findNextDay(day, month, year) {
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

  if (monthList[month] === day && month === 12) {
    day = 1;
    month = 1;
    year++;
    return `${day}/${month}/${year}`;
  }

  if (monthList[month] === day) {
    day = 1;
    month++;
    return `${day}/${month}/${year}`;
  }

  if (monthList[month] > day) {
    day++;
    return `${day}/${month}/${year}`;
  }
  return `${day}/${month}/${year}`;
}
