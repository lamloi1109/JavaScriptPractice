// Bài 22:Tính tích tất cả các “ước số” của số nguyên dương n

describe('calcMultipleDivisorOfNumber(number)', () => {
  it('should return undefined if number is not a number', () => {
    expect(calcMultipleDivisorOfNumber({})).toBe(undefined);
    expect(calcMultipleDivisorOfNumber(null)).toBe(undefined);
    expect(calcMultipleDivisorOfNumber(undefined)).toBe(undefined);
    expect(calcMultipleDivisorOfNumber([])).toBe(undefined);
    expect(calcMultipleDivisorOfNumber('')).toBe(undefined);
  });

  it('should return 0 if number <= 0', () => {
    expect(calcMultipleDivisorOfNumber(0)).toEqual(0);
    expect(calcMultipleDivisorOfNumber(-1)).toEqual(0);
    expect(calcMultipleDivisorOfNumber(-2)).toEqual(0);
    expect(calcMultipleDivisorOfNumber(-3)).toEqual(0);
  });

  it('should return sum devisor of number', () => {
    expect(calcMultipleDivisorOfNumber(5)).toEqual(5);
    expect(calcMultipleDivisorOfNumber(10)).toEqual(1 * 2 * 5 * 10);
  });
});
