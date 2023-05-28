import { createStack } from './5.js';

describe('createStack()', () => {
  it('findMaxAndMin', () => {
    const stack = createStack();
    expect(stack.isEmpty()).toBe(true);
    stack.push(1);
    stack.push(3);
    stack.push(5);
    stack.push(4);
    expect(stack.findMaxAndMin()).toEqual([1, 5]);
    expect(stack.isEmpty()).toBe(false);
  });
});
