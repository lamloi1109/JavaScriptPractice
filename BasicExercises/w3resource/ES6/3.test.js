// 'a,b\nc,d'
// 'a;b\nc;d', ';'
// 'head1,head2\na,b\nc,d', ',', true

import { CSV_to_JSON } from './3.js';

describe('CSV_to_JSON(data, delimiter, omitFirstRow', () => {
  it('should return undefined if data is invalid', () => {
    expect(CSV_to_JSON([], ',')).toBe(undefined);
    expect(CSV_to_JSON(null, ',')).toBe(undefined);
    expect(CSV_to_JSON(undefined, ',')).toBe(undefined);
    expect(CSV_to_JSON(123, ',')).toBe(undefined);
    expect(CSV_to_JSON({}, ',')).toBe(undefined);
  });
  it('should return [] if data is an empty', () => {
    expect(CSV_to_JSON('', ',')).toEqual([]);
    expect(CSV_to_JSON('', ',', true)).toEqual([]);
  });

  it('should return data array after convert', () => {
    expect(CSV_to_JSON('col1,col2\na,b\nc,d', ',')).toEqual([
      { col1: 'a', col2: 'b' },
      { col1: 'c', col2: 'd' },
    ]);
    expect(CSV_to_JSON('col1;col2\na;b\nc;d', ';')).toEqual([
      { col1: 'a', col2: 'b' },
      { col1: 'c', col2: 'd' },
    ]); 
  });
});
