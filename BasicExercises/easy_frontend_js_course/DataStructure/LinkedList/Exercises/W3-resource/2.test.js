// 2. Write a JavaScript program to create a singly linked list of n nodes and display it in reverse order.

import { createSinglyLinkedList } from './2.js';

describe('reverseSinglyLinkedListV2()', () => {
  it('should null if list is an empty', () => {
    const singlyLinkedList = createSinglyLinkedList();

    expect(singlyLinkedList.reverseSinglyLinkedList()).toBeNull();
  });

  it('should return head if list has one item', () => {
    const singlyLinkedList = createSinglyLinkedList();
    singlyLinkedList.insertHead(1);
    expect(singlyLinkedList.reverseSinglyLinkedList()).toEqual({
      data: 1,
      next: null,
    });
  });

  it('should return reverse linked list if size >= 2', () => {
    const singlyLinkedList = createSinglyLinkedList();
    singlyLinkedList.insertHead(3);
    singlyLinkedList.insertHead(2);
    singlyLinkedList.insertHead(1);

    expect(singlyLinkedList.reverseSinglyLinkedList()).toEqual({
      data: 3,
      next: {
        data: 2,
        next: {
          data: 1,
          next: null,
        },
      },
    });
  });
});

describe('reverseSinglyLinkedListV2()', () => {
  it('should null if list is an empty', () => {
    const singlyLinkedList = createSinglyLinkedList();

    expect(singlyLinkedList.reverseSinglyLinkedListV2()).toBeNull();
  });

  it('should return head if list has one item', () => {
    const singlyLinkedList = createSinglyLinkedList();
    singlyLinkedList.insertHead(1);
    expect(singlyLinkedList.reverseSinglyLinkedListV2()).toEqual({
      data: 1,
      next: null,
    });
  });

  it('should return reverse linked list if size >= 2', () => {
    const singlyLinkedList = createSinglyLinkedList();
    singlyLinkedList.insertHead(3);
    singlyLinkedList.insertHead(2);
    singlyLinkedList.insertHead(1);

    expect(singlyLinkedList.reverseSinglyLinkedListV2()).toEqual({
      data: 3,
      next: {
        data: 2,
        next: {
          data: 1,
          next: null,
        },
      },
    });
  });
});
