// Bài 101: Viết chương trình nhập tháng, năm. Hãy cho biết tháng đó có bao nhiêu ngày

import { findNextDay } from "./Ex102.js";

describe('findNextDay(month, year)', () => {
  it('should return undefined if day is invalid', () => {
    expect(findNextDay(32, 3, 2023)).toBe(undefined);
    expect(findNextDay(0, 3, 2023)).toBe(undefined);
    expect(findNextDay(null, 3, 2023)).toBe(undefined);
    expect(findNextDay(undefined, 3, 2023)).toBe(undefined);
    expect(findNextDay({}, 3, 2023)).toBe(undefined);
    expect(findNextDay('', 3, 2023)).toBe(undefined);
  });

  it('should return undefined if day is not in month', () => {
    expect(findNextDay(29, 2, 2001)).toBe(undefined);
    expect(findNextDay(31, 9, 2001)).toBe(undefined);
    expect(findNextDay(31, 11, 2001)).toBe(undefined);
    expect(findNextDay(31, 2, 2001)).toBe(undefined);
  });

  it('should return undefined if month is invalid', () => {
    expect(findNextDay(1, -1, 2023)).toBe(undefined);
    expect(findNextDay(1, 0, 2023)).toBe(undefined);
    expect(findNextDay(1, 13, 2023)).toBe(undefined);
    expect(findNextDay(1, null, 2023)).toBe(undefined);
    expect(findNextDay(1, undefined, 2023)).toBe(undefined);
    expect(findNextDay(1, '', 2023)).toBe(undefined);
    expect(findNextDay(1, {}, 2023)).toBe(undefined);
    expect(findNextDay(1, [], 2023)).toBe(undefined);
  });
  it('should return undefined if year is invalid', () => {
    expect(findNextDay(1, 5, null)).toBe(undefined);
    expect(findNextDay(1, 5, undefined)).toBe(undefined);
    expect(findNextDay(1, 5, '')).toBe(undefined);
    expect(findNextDay(1, 5, {})).toBe(undefined);
    expect(findNextDay(1, 5, [])).toBe(undefined);
  });

  it('should return next day', () => {
    expect(findNextDay(29, 2, 2000)).toBe("1/3/2000");
    expect(findNextDay(28, 2, 2001)).toBe("1/3/2001");
    expect(findNextDay(31, 12, 2000)).toBe("1/1/2001");
  });
});
