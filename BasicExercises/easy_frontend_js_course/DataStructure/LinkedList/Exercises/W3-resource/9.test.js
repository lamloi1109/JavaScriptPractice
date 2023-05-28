import { createSinglyLinkedList } from './9.js';

describe('isEmpty()', () => {
  it('should return 0 if head == null', () => {
    const numberSinglyLinkedList = createSinglyLinkedList();
    expect(numberSinglyLinkedList.isEmpty()).toBe(true);
  });
  it('should return correct number', () => {
    const numberSinglyLinkedList = createSinglyLinkedList();
    numberSinglyLinkedList.insertHead(3);
    numberSinglyLinkedList.insertHead(2);
    numberSinglyLinkedList.insertHead('1');
    numberSinglyLinkedList.insertHead(0);

    expect(numberSinglyLinkedList.isEmpty()).toBe(false);
  });
});
