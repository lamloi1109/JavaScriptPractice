import { createSinglyLinkedList } from './8.js';

describe('find()', () => {
  it('should return 0 if head == null', () => {
    const numberSinglyLinkedList = createSinglyLinkedList();
    expect(numberSinglyLinkedList.find(2)).toBe(-1);
  });
  it('should return correct number', () => {
    const numberSinglyLinkedList = createSinglyLinkedList();
    numberSinglyLinkedList.insertHead(3);
    numberSinglyLinkedList.insertHead(2);
    numberSinglyLinkedList.insertHead('1');
    numberSinglyLinkedList.insertHead(0);

    expect(numberSinglyLinkedList.find(3)).toBe(3);
    expect(numberSinglyLinkedList.find(-3)).toBe(-1);
    
  });
});
