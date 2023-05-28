// 3. Write a JavaScript program to create a singly linked list of n nodes and count the number of nodes.

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
  function countNumberOfNodes() {
    if (head == null) {
      return head;
    }

    let curr = head;
    let countNumber = 0;
    while (curr != null) {
      if (typeof curr.data === 'number') {
        countNumber++;
      }
      curr = curr.next;
    }
    return countNumber;
  }
  return {
    insertHead,
    insertTail,
    insertBeforePosition,
    countNumberOfNodes,
  };
}
