// Bài 103: Viết chương trình nhập vào 1 ngày ( ngày, tháng, năm). Tìm ngày trước ngày vừa nhập (ngày, tháng, năm)

import { findPrevDay } from "./Ex103.js";

describe('findPrevDay(month, year)', () => {
  it('should return undefined if day is invalid', () => {
    expect(findPrevDay(32, 3, 2023)).toBe(undefined);
    expect(findPrevDay(0, 3, 2023)).toBe(undefined);
    expect(findPrevDay(null, 3, 2023)).toBe(undefined);
    expect(findPrevDay(undefined, 3, 2023)).toBe(undefined);
    expect(findPrevDay({}, 3, 2023)).toBe(undefined);
    expect(findPrevDay('', 3, 2023)).toBe(undefined);
  });

  it('should return undefined if day is not in month', () => {
    expect(findPrevDay(29, 2, 2001)).toBe(undefined);
    expect(findPrevDay(31, 9, 2001)).toBe(undefined);
    expect(findPrevDay(31, 11, 2001)).toBe(undefined);
    expect(findPrevDay(31, 2, 2001)).toBe(undefined);
  });

  it('should return undefined if month is invalid', () => {
    expect(findPrevDay(1, -1, 2023)).toBe(undefined);
    expect(findPrevDay(1, 0, 2023)).toBe(undefined);
    expect(findPrevDay(1, 13, 2023)).toBe(undefined);
    expect(findPrevDay(1, null, 2023)).toBe(undefined);
    expect(findPrevDay(1, undefined, 2023)).toBe(undefined);
    expect(findPrevDay(1, '', 2023)).toBe(undefined);
    expect(findPrevDay(1, {}, 2023)).toBe(undefined);
    expect(findPrevDay(1, [], 2023)).toBe(undefined);
  });
  it('should return undefined if year is invalid', () => {
    expect(findPrevDay(1, 5, null)).toBe(undefined);
    expect(findPrevDay(1, 5, undefined)).toBe(undefined);
    expect(findPrevDay(1, 5, '')).toBe(undefined);
    expect(findPrevDay(1, 5, {})).toBe(undefined);
    expect(findPrevDay(1, 5, [])).toBe(undefined);
  });

  it('should return prev day', () => {
    expect(findPrevDay(1, 3, 2000)).toBe('29/2/2000');
    expect(findPrevDay(1, 3, 2001)).toBe('28/2/2001');
    expect(findPrevDay(29, 2, 2000)).toBe('28/2/2000');
    expect(findPrevDay(28, 2, 2001)).toBe('27/2/2001');
    expect(findPrevDay(31, 12, 2000)).toBe('30/12/2000');
    expect(findPrevDay(1, 1, 2001)).toBe('31/12/2000');
  });
});
