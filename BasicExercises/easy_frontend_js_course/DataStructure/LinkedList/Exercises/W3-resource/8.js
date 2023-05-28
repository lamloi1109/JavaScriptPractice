// 8. Write a JavaScript program to find the first index that matches a given element. Return -1 for no matching.

export function createSinglyLinkedList() {
  let head = null;
  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };
    if (head == null) {
      head = newNode;
      return head;
    }

    newNode.next = head;
    head = newNode;
    return head;
  }
  function insertTail(newData) {
    const newNode = {
      data: newData,
      next: null,
    };
    if (head == null) {
      head = newNode;
      return head;
    }
    let curr = head;
    while (curr.next != null) {
      curr = curr.next;
    }
    curr.next = newNode;
    return head;
  }
  function insertBeforePosition(newData, position) {
    if (head == null || position <= 0) {
      insertHead(newData);
      return head;
    }

    let current = head;
    let prev = head;
    let i = 0;

    while (current != null && i <= position) {
      prev = current;
      current = current.next;
      i++;
    }

    const newNode = {
      data: newData,
      next: current,
    };
    prev.next = newNode;
    return head;
  }
  function find(element) {
    if (head == null) {
      return -1;
    }

    let curr = head;
    let i = 0;
    while (curr != null) {
      if (curr.data === element) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }
  return {
    insertHead,
    insertTail,
    insertBeforePosition,
    find,
  };
}
