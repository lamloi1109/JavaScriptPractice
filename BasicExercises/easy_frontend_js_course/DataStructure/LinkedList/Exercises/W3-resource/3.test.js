import { createSinglyLinkedList } from './3.js';

describe('countNumberOfNodes()', () => {
  it('should return 0 if head == null', () => {
    const numberSinglyLinkedList = createSinglyLinkedList();
    expect(numberSinglyLinkedList.countNumberOfNodes()).toBeNull();
  });
  it('should return correct number', () => {
    const numberSinglyLinkedList = createSinglyLinkedList();
    numberSinglyLinkedList.insertHead(3);
    numberSinglyLinkedList.insertHead(2);
    numberSinglyLinkedList.insertHead("1");
    numberSinglyLinkedList.insertHead(0);

    expect(numberSinglyLinkedList.countNumberOfNodes()).toBe(3);
  });
});
