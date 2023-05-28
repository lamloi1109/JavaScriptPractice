import { createStack } from './4.js';

describe('createStack()', () => {
  it('reverse stack', () => {
    const stack = createStack();
    expect(stack.isEmpty()).toBe(true);
    stack.push(3);
    stack.push(2);
    stack.push(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.reverse()).toEqual([1, 2, 3]);
  });
});
