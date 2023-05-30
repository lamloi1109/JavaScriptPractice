import { getUniqueWordList, getUniqueWordListV2 } from './18.js';

describe('getUniqueWordList(string)', () => {
  it('should [] if string is an empty', () => {
    expect(getUniqueWordList('')).toEqual([]);
  });
  it('should unique word list', () => {
    expect(getUniqueWordList('mot, mot, hai, hai, ba ba bon nam sau')).toEqual([
      'mot',
      'hai',
      'ba',
      'bon',
      'nam',
      'sau',
    ]);
  });
});

describe('getUniqueWordListV2(string)', () => {
    it('should [] if string is an empty', () => {
      expect(getUniqueWordListV2('')).toEqual([]);
    });
    it('should unique word list', () => {
      expect(getUniqueWordListV2('mot, mot, hai, hai, ba ba bon nam sau')).toEqual([
        'mot',
        'hai',
        'ba',
        'bon',
        'nam',
        'sau',
      ]);
    });
  });