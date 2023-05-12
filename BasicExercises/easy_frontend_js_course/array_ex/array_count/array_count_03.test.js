// Ðếm số từ có độ dài lớn hơn n
// Viết hàm countWords(wordList, n) để đếm xem có bao nhiều từ có độ dài lớn hơn hoặc bằng n

import { countWords, countWordsV2 } from './array_count_03.js';

describe('countWords(wordList,n)', () => {
  it('should return 0 if wordList is not an array', () => {
    expect(countWords({}, 1)).toBe(0);
    expect(countWords(null, 1)).toBe(0);
    expect(countWords(undefined, 1)).toBe(0);
    expect(countWords(NaN, 1)).toBe(0);
    expect(countWords('DSAdsa', 1)).toBe(0);
    expect(countWords(23, 1)).toBe(0);
  });

  it('should return 0 if n is not a number', () => {
    expect(countWords(['abc', 'abcd'], 'dsa')).toBe(0);
    expect(countWords(['abc', 'abcd'], {})).toBe(0);
    expect(countWords(['abc', 'abcd'], [])).toBe(0);
    expect(countWords(['abc', 'abcd'], null)).toBe(0);
    expect(countWords(['abc', 'abcd'], undefined)).toBe(0);
  });

  it('should return 0 if wordList is empty array', () => {
    expect(countWords([], 1)).toBe(0);
  });

  
  it('should return 0 if wordList is not type string values', () => {
    expect(countWords([123,{}], 1)).toBe(0);
  });

  it('should return 0 if wordList has all empty string', () => {
    expect(countWords(['',''], 1)).toBe(0);
  });

  it('should return 0 if wordList has all word length < n', () => {
    expect(countWords(['ab','ab'], 3)).toBe(0);
  });
  
  
  it('should return 0 if wordList has word length >= n', () => {
    expect(countWords(['abc','abc', 'abcd'], 3)).toBe(3);
  });
  

});

describe('countWordsV2(wordList,n)', () => {
    it('should return 0 if wordList is not an array', () => {
      expect(countWordsV2({}, 1)).toBe(0);
      expect(countWordsV2(null, 1)).toBe(0);
      expect(countWordsV2(undefined, 1)).toBe(0);
      expect(countWordsV2(NaN, 1)).toBe(0);
      expect(countWordsV2('DSAdsa', 1)).toBe(0);
      expect(countWordsV2(23, 1)).toBe(0);
    });
  
    it('should return 0 if n is not a number', () => {
      expect(countWordsV2(['abc', 'abcd'], 'dsa')).toBe(0);
      expect(countWordsV2(['abc', 'abcd'], {})).toBe(0);
      expect(countWordsV2(['abc', 'abcd'], [])).toBe(0);
      expect(countWordsV2(['abc', 'abcd'], null)).toBe(0);
      expect(countWordsV2(['abc', 'abcd'], undefined)).toBe(0);
    });
  
    it('should return 0 if wordList is empty array', () => {
      expect(countWordsV2([], 1)).toBe(0);
    });
  
    
    it('should return 0 if wordList is not type string values', () => {
      expect(countWords([123,{}], 1)).toBe(0);
    });
  
    it('should return 0 if wordList has all empty string', () => {
      expect(countWords(['',''], 1)).toBe(0);
    });
  
    it('should return 0 if wordList has all word length < n', () => {
      expect(countWords(['ab','ab'], 3)).toBe(0);
    });
    
    
    it('should return 0 if wordList has word length >= n', () => {
      expect(countWords(['abc','abc', 'abcd'], 3)).toBe(3);
    });
    
  
  });
  