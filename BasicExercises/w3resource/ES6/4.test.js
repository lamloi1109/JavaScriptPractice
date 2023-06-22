// Write a JavaScript program to convert an array of objects to a comma-separated value (CSV) string that contains only the columns specified.

import { JSON_to_CSV } from './4.js';

describe('JSON_to_CSV(list, titles , delimiter', () => {
  it('should return undefined if list is invalid', () => {
    const validArr = [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }];
    const validTitles = ['x', 'y'];
    expect(JSON_to_CSV(null, validTitles, ',')).toBe(undefined);
    expect(JSON_to_CSV(undefined, validTitles, ',')).toBe(undefined);
    expect(JSON_to_CSV(123, validTitles, ',')).toBe(undefined);
    expect(JSON_to_CSV({}, validTitles, ',')).toBe(undefined);

    expect(JSON_to_CSV(validArr, null, ',')).toBe(undefined);
    expect(JSON_to_CSV(validArr, undefined, ',')).toBe(undefined);
    expect(JSON_to_CSV(validArr, 123, ',')).toBe(undefined);
    expect(JSON_to_CSV(validArr, {}, ',')).toBe(undefined);
  });
  it('should return [] if list and titles are an empty', () => {
    expect(JSON_to_CSV([], [])).toEqual([]);
  });

  it('should return data after convert', () => {
    const validArr = [{ x: 100, y: 200 }, { x: 300, y: 400, z: 500 }, { x: 6 }, { y: 7 }];
    const validTitles = ['x', 'y'];

    expect(JSON_to_CSV(validArr, validTitles)).toBe(
      `x,y\n'100','200'\n'300','400'\n'6',''\n'','7'\n`
    );
  });
});
