import { createSinglyLinkedList } from './11.js';

describe('removeAtPosition(position)', () => {
  it('should remove head if position <= 0', () => {
    const numberSinglyLinkedList = createSinglyLinkedList();
    numberSinglyLinkedList.insertHead(3);
    numberSinglyLinkedList.insertHead(2);
    numberSinglyLinkedList.insertHead(1);

    expect(numberSinglyLinkedList.removeAtPosition(-1)).toEqual({
      data: 2,
      next: {
        data: 3,
        next: null,
      },
    });
  });
  it('should remove tail if position > size', () => {
    const numberSinglyLinkedList = createSinglyLinkedList();
    numberSinglyLinkedList.insertHead(3);
    numberSinglyLinkedList.insertHead(2);
    numberSinglyLinkedList.insertHead(1);

    expect(numberSinglyLinkedList.removeAtPosition(10)).toEqual({
      data: 1,
      next: {
        data: 2,
        next: null,
      },
    });
  });

  it('should remove at position if position >= 0 && position <= size', () => {
    const numberSinglyLinkedList = createSinglyLinkedList();
    numberSinglyLinkedList.insertHead(4);
    numberSinglyLinkedList.insertHead(3);
    numberSinglyLinkedList.insertHead(2);
    numberSinglyLinkedList.insertHead(1);

    expect(numberSinglyLinkedList.removeAtPosition(1)).toEqual({
      data: 1,
      next: {
        data: 3,
        next: {
          data: 4,
          next: null,
        },
      },
    });
  });
});
