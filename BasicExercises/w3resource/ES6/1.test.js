// 1. Write a JavaScript program to compare two objects to determine if the first contains equivalent property values to the second one.

import { compareTwoObject, compareTwoObjectV2, cloneObject } from './1.js';

// determine
// equivalent

describe('compareTwoObject(obj1, obj2)', () => {
  it('should return undefined if objs are not a object', () => {
    expect(compareTwoObject(null, null)).toBe(undefined);
    expect(compareTwoObject(undefined, undefined)).toBe(undefined);
    expect(compareTwoObject('', '')).toBe(undefined);
    expect(compareTwoObject(123, 123)).toBe(undefined);
  });

  it('should return true if obj is an empty', () => {
    expect(compareTwoObject({}, {})).toBe(true);
  });

  it('should return false', () => {
    expect(
      compareTwoObject({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })
    ).toBe(false);

    expect(
      compareTwoObject(
        {
          hair: 'long',
          beard: true,
          social: {
            fb: '',
            zalo: '',
            instagram: '',
          },
        },
        { age: 25, hair: 'long', beard: true, social: {} }
      )
    ).toBe(false);
  });

  it('should return true', () => {
    const obj1 = {
      hair: 'long',
      beard: true,
      social: {
        fb: {
          name: 'Phuoc Loi',
          age: 23,
        },
        zalo: '',
        instagram: '',
      },
    };
    const obj2 = {
      hair: 'long',
      beard: true,
      social: {
        fb: {
          name: 'Phuoc Loi',
          age: 23,
        },
        zalo: '',
        instagram: '',
      },
    };
    expect(compareTwoObject(obj1, obj2)).toBe(false);

    expect(obj1 === obj2).toBe(false);
  });
});

describe('compareTwoObjectV2(obj1, obj2)', () => {
  it('should return undefined if objs are not a object', () => {
    expect(compareTwoObjectV2(null, null)).toBe(undefined);
    expect(compareTwoObjectV2(undefined, undefined)).toBe(undefined);
    expect(compareTwoObjectV2('', '')).toBe(undefined);
    expect(compareTwoObjectV2(123, 123)).toBe(undefined);
  });

  it('should return true if obj is an empty', () => {
    expect(compareTwoObjectV2({}, {})).toBe(true);
  });

  it('should return false', () => {
    expect(
      compareTwoObjectV2({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })
    ).toBe(false);

    expect(
      compareTwoObjectV2(
        {
          hair: 'long',
          beard: true,
          social: {
            fb: '',
            zalo: '',
            instagram: '',
          },
        },
        { age: 25, hair: 'long', beard: true, social: {} }
      )
    ).toBe(false);
  });

  it('should return true', () => {
    const obj1 = {
      hair: 'long',
      beard: true,
      social: {
        fb: {
          name: 'Phuoc Loi',
          age: 23,
        },
        zalo: '',
        instagram: '',
      },
    };
    const obj2 = {
      hair: 'long',
      beard: true,
      social: {
        fb: {
          name: 'Phuoc Loi',
          age: 23,
        },
        zalo: '',
        instagram: '',
      },
    };
    const obj3 = cloneObject(obj2);
    expect(compareTwoObject(obj2, obj3)).toBe(true);

    expect(compareTwoObjectV2(obj1, obj2)).toBe(false);
    expect(obj1 === obj2).toBe(false);
    expect(obj2 === obj3).toBe(false);
  });
});
