import { isBracketCouple } from './20.js';

describe('isBracketCouple(str)', () => {
  it('should return false if str is an empty', () => {
    expect(isBracketCouple('')).toBe(false);
  });
  it('should return false if bracket is not couple', () => {
    expect(isBracketCouple('[)')).toBe(false);
    expect(isBracketCouple(')(')).toBe(false);
    expect(isBracketCouple('][')).toBe(false);
    expect(isBracketCouple('[[}]')).toBe(false);
    expect(isBracketCouple('(]')).toBe(false);
    expect(isBracketCouple('([)]')).toBe(false);
  });
  it('should return true', () => {
    expect(isBracketCouple('()')).toBe(true);
    expect(isBracketCouple('[]')).toBe(true);
    expect(isBracketCouple('{}')).toBe(true);
    expect(isBracketCouple('<>')).toBe(true);
    expect(isBracketCouple('(  )')).toBe(true);
    expect(isBracketCouple('(abc)')).toBe(true);
    expect(isBracketCouple('[({<>})]')).toBe(true);
    expect(isBracketCouple('[]')).toBe(true);
    expect(isBracketCouple('()[]{}')).toBe(true);
  });
});
