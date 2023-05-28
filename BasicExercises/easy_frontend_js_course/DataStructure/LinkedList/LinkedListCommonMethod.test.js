import { createLinkedList } from './LinkedListCommonMethod.js';

describe('insertBeforePosition(data, position)', () => {
  const numberLinkedList = createLinkedList();
  numberLinkedList.insertHead(4);
  numberLinkedList.insertHead(3);
  numberLinkedList.insertHead(2);
  numberLinkedList.insertHead(1);

  it('should insert head if position <= 0', () => {
    expect(numberLinkedList.insertBeforePosition(0, -1)).toEqual({
      data: 0,
      next: {
        data: 1,
        next: {
          data: 2,
          next: {
            data: 3,
            next: {
              data: 4,
              next: null,
            },
          },
        },
      },
    });
  });

  it('should insert before position if 0 <= position <= size', () => {
    expect(numberLinkedList.insertBeforePosition(3, 3)).toEqual({
      data: 0,
      next: {
        data: 1,
        next: {
          data: 2,
          next: {
            data: 3,
            next: {
              data: 3,
              next: {
                data: 4,
                next: null,
              },
            },
          },
        },
      },
    });
  });

  it('should insert tail if position > size', () => {
    expect(numberLinkedList.insertBeforePosition(5, 10)).toEqual({
      data: 0,
      next: {
        data: 1,
        next: {
          data: 2,
          next: {
            data: 3,
            next: {
              data: 3,
              next: {
                data: 4,
                next: {
                  data: 5,
                  next: null,
                },
              },
            },
          },
        },
      },
    });
  });
});

describe('removeHead()', () => {
  it('should return null if list is en empty', () => {
    const numberLinkedList = createLinkedList();
    expect(numberLinkedList.removeHead()).toBeNull();
  });

  it('should return null if list has one item', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(1);

    expect(numberLinkedList.removeHead()).toBeNull();
  });

  it('should remove head if head != null', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(4);
    numberLinkedList.insertHead(3);
    numberLinkedList.insertHead(2);
    numberLinkedList.insertHead(1);
    expect(numberLinkedList.removeHead()).toEqual({
      data: 2,
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

describe('removeTail()', () => {
  it('should return null if list is an empty', () => {
    const numberLinkedList = createLinkedList();
    expect(numberLinkedList.removeTail()).toBeNull();
  });
  it('should return null if list has one item', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(1);

    expect(numberLinkedList.removeTail()).toBeNull();
  });

  it('should remove tail if head != null', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(4);
    numberLinkedList.insertHead(3);
    numberLinkedList.insertHead(2);
    numberLinkedList.insertHead(1);
    expect(numberLinkedList.removeTail()).toEqual({
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: null,
        },
      },
    });
  });
});

describe('removeByIndex(index)', () => {
  it('should return null if list is an empty', () => {
    const numberLinkedList = createLinkedList();
    expect(numberLinkedList.removeByIndex(2)).toBeNull();
  });

  it('should return null if list has one item', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(4);
    expect(numberLinkedList.removeByIndex(2)).toBeNull();
  });


  it('should remove  at index in index if head != null && index <= size', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(4);
    numberLinkedList.insertHead(3);
    numberLinkedList.insertHead(2);
    numberLinkedList.insertHead(1);
    expect(numberLinkedList.removeByIndex(2)).toEqual({
      data: 1,
      next: {
        data: 2,
        next: {
          data: 4,
          next: null,
        },
      },
    });
  });

  it('should remove head if index <= 0', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(4);
    numberLinkedList.insertHead(3);
    numberLinkedList.insertHead(2);
    numberLinkedList.insertHead(1);
    expect(numberLinkedList.removeByIndex(0)).toEqual({
      data: 2,
      next: {
        data: 3,
        next: {
          data: 4,
          next: null,
        },
      },
    });
  });
  it('should remove tail if head > size', () => {
    const numberLinkedList = createLinkedList();
    numberLinkedList.insertHead(4);
    numberLinkedList.insertHead(3);
    numberLinkedList.insertHead(2);
    numberLinkedList.insertHead(1);
    expect(numberLinkedList.removeByIndex(10)).toEqual({
      data: 1,
      next: {
        data: 2,
        next: {
          data: 3,
          next: null,
        },
      },
    });
  });
});
