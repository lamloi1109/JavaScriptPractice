import { createSinglyLinkedList } from './1.js';

describe('insertHead()', () => {
  it('should insert head if list is an empty', () => {
    const singlyLinkedList = createSinglyLinkedList();
    let head = singlyLinkedList.insertHead(3);

    expect(head).toEqual({
      data: 3,
      next: null,
    });
  });
  it('should insert head if list has one item', () => {
    const singlyLinkedList = createSinglyLinkedList();
    singlyLinkedList.insertHead(3);
    let head = singlyLinkedList.insertHead(2);

    expect(head).toEqual({
      data: 2,
      next: {
        data: 3,
        next: null,
      },
    });
  });
});

describe('insertTail()', () => {
  it('should insert head if list is an empty', () => {
    const singlyLinkedList = createSinglyLinkedList();
    let head = singlyLinkedList.insertTail(3);

    expect(head).toEqual({
      data: 3,
      next: null,
    });
  });
  it('should insert head if list has one item', () => {
    const singlyLinkedList = createSinglyLinkedList();
    singlyLinkedList.insertTail(3);
    let head = singlyLinkedList.insertTail(2);

    expect(head).toEqual({
      data: 3,
      next: {
        data: 2,
        next: null,
      },
    });
  });
});

describe('insertBeforePosition(newData,position)', () => {
  //   it('should insert head if position <= 0', () => {
  //     const singlyLinkedList = createSinglyLinkedList();
  //     singlyLinkedList.insertHead(4);
  //     singlyLinkedList.insertHead(3);
  //     singlyLinkedList.insertHead(2);
  //     singlyLinkedList.insertHead(1);
  //     expect(singlyLinkedList.insertBeforePosition(0, -1)).toEqual({
  //       data: 0,
  //       next: {
  //         data: 1,
  //         next: {
  //           data: 2,
  //           next: {
  //             data: 3,
  //             next: {
  //               data: 4,
  //               next: null,
  //             },
  //           },
  //         },
  //       },
  //     });
  //   });

  //   it('should insert before position if position >= 0 && position <= size', () => {
  //     const singlyLinkedList = createSinglyLinkedList();
  //     singlyLinkedList.insertHead(5);
  //     singlyLinkedList.insertHead(3);
  //     singlyLinkedList.insertHead(2);
  //     singlyLinkedList.insertHead(1);

  //     expect(singlyLinkedList.insertBeforePosition(4, 2)).toEqual({
  //       data: 1,
  //       next: {
  //         data: 2,
  //         next: {
  //           data: 3,
  //           next: {
  //             data: 4,
  //             next: {
  //               data: 5,
  //               next: null,
  //             },
  //           },
  //         },
  //       },
  //     });
  //   });

  it('should insert tail if position > size', () => {
    const singlyLinkedList = createSinglyLinkedList();
    singlyLinkedList.insertTail(3);

    expect(singlyLinkedList.insertBeforePosition(2, 5)).toEqual({
      data: 3,
      next: {
        data: 2,
        next: null,
      },
    });
  });
});
