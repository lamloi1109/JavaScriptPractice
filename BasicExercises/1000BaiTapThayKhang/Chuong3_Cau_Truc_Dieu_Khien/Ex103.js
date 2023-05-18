// Bài 103: Viết chương trình nhập vào 1 ngày ( ngày, tháng, năm). Tìm ngày trước ngày vừa nhập (ngày, tháng, năm)
function isLeapYear(year) {
  return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}

export function findPrevDay(day, month, year) {
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

  if (day === 1 && month === 1) {
    day = 31;
    month = 12;
    year--;
    return `${day}/${month}/${year}`;
  }

  if (day === 1) {
    month--;
    day = monthList[month];
    return `${day}/${month}/${year}`;
  }

  if (monthList[month] >= day) {
    day--;
    return `${day}/${month}/${year}`;
  }
  return `${day}/${month}/${year}`;
}
