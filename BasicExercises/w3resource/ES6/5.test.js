// Write a JavaScript program to target a given value in a nested JSON object based on the given key.

import { dig } from './5.js';

describe('dig(nestedObj, key)', () => {
  it('should return undefined if nestedObj is not a object', () => {
    expect(dig('', 'level4')).toBeUndefined();
    expect(dig(123, 'level4')).toBeUndefined();
    expect(dig(undefined, 'level4')).toBeUndefined();
    expect(dig(null, 'level4')).toBeUndefined();
    expect(dig([], 'level4')).toBeUndefined();
  });
  it('should return undefined if key is invalid', () => {
    const data = {
      level1: {
        level2: {
          level3: 'some data',
        },
      },
    };
    expect(dig(data, 'level4')).toBeUndefined();
    expect(dig(data, null)).toBeUndefined();
    expect(dig(data, undefined)).toBeUndefined();
    expect(dig(data, {})).toBeUndefined();
    expect(dig(data, [])).toBeUndefined();
    expect(dig(data, 123)).toBeUndefined();
  });
  it('should return data', () => {
    const data = {
      level1: {
        level2: {
          level3: 'some data',
        },
      },
    };
    
    const dog = {
      status: 'success',
      message: 'https://images.dog.ceo/breeds/african/n02116738_1105.jpg',
    };

    expect(dig(data, 'level3')).toBe('some data');
    expect(dig(dog, 'message')).toBe('https://images.dog.ceo/breeds/african/n02116738_1105.jpg');
  });
});
