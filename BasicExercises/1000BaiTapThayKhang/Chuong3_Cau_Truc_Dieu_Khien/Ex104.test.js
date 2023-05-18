import { findNumberDayInYear } from "./Ex104.js";

// Bài 104: Viết chương trình nhập ngày, tháng, năm. Tính xem ngày đó là ngày thứ bao nhiêu trong năm
describe('findNumberDayInYear(month, year)', () => {
    it('should return undefined if day is invalid', () => {
      expect(findNumberDayInYear(32, 3, 2023)).toBe(undefined);
      expect(findNumberDayInYear(0, 3, 2023)).toBe(undefined);
      expect(findNumberDayInYear(null, 3, 2023)).toBe(undefined);
      expect(findNumberDayInYear(undefined, 3, 2023)).toBe(undefined);
      expect(findNumberDayInYear({}, 3, 2023)).toBe(undefined);
      expect(findNumberDayInYear('', 3, 2023)).toBe(undefined);
    });
  
    it('should return undefined if day is not in month', () => {
      expect(findNumberDayInYear(29, 2, 2001)).toBe(undefined);
      expect(findNumberDayInYear(31, 9, 2001)).toBe(undefined);
      expect(findNumberDayInYear(31, 11, 2001)).toBe(undefined);
      expect(findNumberDayInYear(31, 2, 2001)).toBe(undefined);
    });
  
    it('should return undefined if month is invalid', () => {
      expect(findNumberDayInYear(1, -1, 2023)).toBe(undefined);
      expect(findNumberDayInYear(1, 0, 2023)).toBe(undefined);
      expect(findNumberDayInYear(1, 13, 2023)).toBe(undefined);
      expect(findNumberDayInYear(1, null, 2023)).toBe(undefined);
      expect(findNumberDayInYear(1, undefined, 2023)).toBe(undefined);
      expect(findNumberDayInYear(1, '', 2023)).toBe(undefined);
      expect(findNumberDayInYear(1, {}, 2023)).toBe(undefined);
      expect(findNumberDayInYear(1, [], 2023)).toBe(undefined);
    });
    it('should return undefined if year is invalid', () => {
      expect(findNumberDayInYear(1, 5, null)).toBe(undefined);
      expect(findNumberDayInYear(1, 5, undefined)).toBe(undefined);
      expect(findNumberDayInYear(1, 5, '')).toBe(undefined);
      expect(findNumberDayInYear(1, 5, {})).toBe(undefined);
      expect(findNumberDayInYear(1, 5, [])).toBe(undefined);
    });
  
    it('should return correct number day in year', () => {
      expect(findNumberDayInYear(1, 3, 2000)).toBe(61);
      expect(findNumberDayInYear(1, 3, 2001)).toBe(60);
      expect(findNumberDayInYear(29, 2, 2000)).toBe(60);
      expect(findNumberDayInYear(28, 2, 2001)).toBe(59);
      expect(findNumberDayInYear(31, 12, 2000)).toBe(366);
      expect(findNumberDayInYear(1, 1, 2001)).toBe(1);
    });
  });
  