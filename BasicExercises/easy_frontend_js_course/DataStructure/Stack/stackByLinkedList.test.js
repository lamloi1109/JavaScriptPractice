import { createStackLinkedList } from './stackByLinkedList.js';

describe('createStackLinkedList()', () => {

  it('all in one', () => {
    const stack = createStackLinkedList();
    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getTop()).toBeUndefined();

    stack.push(5);

    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toEqual({
      data: 5,
      next: null,
    });

    stack.push(10);

    expect(stack.getSize()).toBe(2);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toEqual({
      data: 10,
      next: {
        data: 5,
        next: null,
      },
    });

    let ten = stack.pop();
    expect(ten).toBe(10);

    expect(stack.getSize()).toBe(1);
    expect(stack.isEmpty()).toBe(false);
    expect(stack.getTop()).toEqual({
      data: 5,
      next: null,
    });

    let five = stack.pop();
    expect(five).toBe(5);

    expect(stack.getSize()).toBe(0);
    expect(stack.isEmpty()).toBe(true);
    expect(stack.getTop()).toBeUndefined();
  });
});
