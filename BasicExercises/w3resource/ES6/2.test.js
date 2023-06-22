// 'a,b\nc,d'
// 'a;b\nc;d', ';'
// 'head1,head2\na,b\nc,d', ',', true

import { convertCSVToArray } from './2.js';

describe('convertCSVToArray(data, delimiter, omitFirstRow', () => {
  it('should return undefined if data is invalid', () => {
    expect(convertCSVToArray([], ',')).toBe(undefined);
    expect(convertCSVToArray(null, ',')).toBe(undefined);
    expect(convertCSVToArray(undefined, ',')).toBe(undefined);
    expect(convertCSVToArray(123, ',')).toBe(undefined);
    expect(convertCSVToArray({}, ',')).toBe(undefined);
  });
  it('should return [] if data is an empty', () => {
    expect(convertCSVToArray('', ',')).toEqual([]);
    expect(convertCSVToArray('', ',', true)).toEqual([]);
  });

  it('should return data array after convert', () => {
    // 'a,b\nc,d'
    // 'a;b\nc;d', ';'
    // 'head1,head2\na,b\nc,d', ',', true

    expect(convertCSVToArray('a,b\nc,d', ',')).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
    expect(convertCSVToArray('a;b\nc;d', ';')).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });
  it('should return data array does not contain first row', () => {
    expect(convertCSVToArray('head1,head2\na,b\nc,d', ',', true)).toEqual([
      ['a', 'b'],
      ['c', 'd'],
    ]);
  });
});
 