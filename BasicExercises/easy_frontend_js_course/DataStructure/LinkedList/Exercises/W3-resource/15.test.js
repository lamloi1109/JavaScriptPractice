import { createSinglyLinkedList } from './15.js';

describe('converseToArray()', () => {
  it('should return [] if linked list is null', () => {
    const singlyLinkedList = createSinglyLinkedList();
    expect(singlyLinkedList.converseToArray()).toEqual([]);
  });
  it('should return array list', () => {
    const singlyLinkedList = createSinglyLinkedList();
    singlyLinkedList.insertHead(3);
    singlyLinkedList.insertHead(2);
    singlyLinkedList.insertHead(1);

    expect(singlyLinkedList.converseToArray()).toEqual([1, 2, 3]);
  });
});
