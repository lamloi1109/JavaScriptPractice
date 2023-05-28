import { createSinglyLinkedList } from './16.js';

describe('linkedListToString()', () => {
  it('should return "" if linked list is null', () => {
    const singlyLinkedList = createSinglyLinkedList();
    expect(singlyLinkedList.converseToString()).toBe('');
  });
  it('should return string', () => {
    const singlyLinkedList = createSinglyLinkedList();
    singlyLinkedList.insertHead(3);
    singlyLinkedList.insertHead(2);
    singlyLinkedList.insertHead(1);

    expect(singlyLinkedList.converseToString()).toBe('1 2 3');
  });
});
