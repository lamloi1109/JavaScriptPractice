// Bài 101: Viết chương trình nhập tháng, năm. Hãy cho biết tháng đó có bao nhiêu ngày

import { getNumberDayOfMonth } from "./Ex101.js";

describe('getNumberDayOfMonth(month, year)', () => {
  it('should return undefined if month is invalid', () => {
    expect(getNumberDayOfMonth(-1, 2023)).toBe(undefined);
    expect(getNumberDayOfMonth(0, 2023)).toBe(undefined);
    expect(getNumberDayOfMonth(13, 2023)).toBe(undefined);
    expect(getNumberDayOfMonth(null, 2023)).toBe(undefined);
    expect(getNumberDayOfMonth(undefined, 2023)).toBe(undefined);
    expect(getNumberDayOfMonth('', 2023)).toBe(undefined);
    expect(getNumberDayOfMonth({}, 2023)).toBe(undefined);
    expect(getNumberDayOfMonth([], 2023)).toBe(undefined);
  });
  it('should return undefined if year is invalid', () => {
    expect(getNumberDayOfMonth(5, null)).toBe(undefined);
    expect(getNumberDayOfMonth(5, undefined)).toBe(undefined);
    expect(getNumberDayOfMonth(5, '')).toBe(undefined);
    expect(getNumberDayOfMonth(5, {})).toBe(undefined);
    expect(getNumberDayOfMonth(5, [])).toBe(undefined);
  });

  it('should return correct number day if year is leap', () => {
    expect(getNumberDayOfMonth(2, 2000)).toBe(29);
  });

  it('should return correct number day', () => {
    expect(getNumberDayOfMonth(2, 2001)).toBe(28);
  });
});
