//18. Write a JavaScript program to check if an element is present in the Singly Linked list.

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

  function removeHead() {
    if (head == null) {
      return head;
    }
    if (head.next == null) {
      head = null;
      return head;
    }
    head = head.next;
    return head;
  }
  function removeTail() {
    if (head == null) {
      return head;
    }
    if (head.next == null) {
      head = null;
      return head;
    }

    let secondLast = head;

    while (secondLast.next.next != null) {
      secondLast = secondLast.next;
    }
    secondLast.next = null;
    return head;
  }
  function removeAtPosition(position) {
    if (position <= 0) {
      removeHead();
      return head;
    }
    let prev = head;
    let curr = head;
    let i = 0;

    while (curr.next != null && i < position) {
      prev = curr;
      curr = curr.next;
      i++;
    }

    prev.next = curr.next;

    return head;
  }
  function converseToArray() {
    const arrayList = [];

    if (head == null) {
      return arrayList;
    }

    let curr = head;

    while (curr != null) {
      arrayList.push(curr.data);
      curr = curr.next;
    }
    return arrayList;
  }
  function converseToString() {
    let linkedListToString = '';

    if (head == null) {
      return linkedListToString;
    }

    let curr = head;

    while (curr != null) {
      linkedListToString += curr.data + ' ';
      curr = curr.next;
    }
    return linkedListToString.trim();
  }
  function getIndexWithElement(element) {
    if (head == null) {
      return -1;
    }
    let i = 0;
    let curr = head;

    while (curr != null) {
      if (curr.data === element) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }
  function isPresent(element) {
    if (head == null) {
      return false;
    }

    let curr = head;

    while (curr != null) {
      if (curr.data === element) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }
  return {
    insertHead,
    insertTail,
    insertBeforePosition,
    removeHead,
    removeTail,
    removeAtPosition,
    converseToArray,
    converseToString,
    getIndexWithElement,
    isPresent
  };
}

const list = createSinglyLinkedList();
list.insertHead(3);
list.insertHead(2);
list.insertHead(1);

console.log(list.isPresent(2));
console.log(list.isPresent(0));
