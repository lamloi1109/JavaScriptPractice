// Bài 101: Viết chương trình nhập tháng, năm. Hãy cho biết tháng đó có bao nhiêu ngày

function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

export function getNumberDayOfMonth(month, year) {
  if (typeof month !== 'number' || month <= 0 || month > 12) {
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
  return monthList[month];
}
