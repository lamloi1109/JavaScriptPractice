import { createStack } from './stack.js';

describe('createStack()', () => {
  // []
  it('all in one', () => {
    const stack = createStack();
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getTop()).toBeUndefined();

    stack.push(5);

    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toBe(5);

    stack.push(10);

    expect(stack.getSize()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toBe(10);

    let ten = stack.pop();
    expect(ten).toBe(10);

    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toBe(5);

    let five = stack.pop();
    expect(five).toBe(5);

    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getTop()).toBeUndefined();
  });
});
