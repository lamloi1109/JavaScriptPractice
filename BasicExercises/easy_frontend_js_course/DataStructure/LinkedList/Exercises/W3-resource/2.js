// 2. Write a JavaScript program to create a singly linked list of n nodes and display it in reverse order.

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
  function reverseSinglyLinkedList() {
    if (head == null || head.next == null) {
      return head;
    }
    let curr = head;
    let arr = [];
    while (curr != null) {
      arr.push(curr.data);
      curr = curr.next;
    }
    curr = head;
    let i = arr.length - 1;
    while (curr != null) {
      curr.data = arr[i];
      curr = curr.next;
      i--;
    }

    return head;
  }
  function reverseSinglyLinkedListV2() {
    if (head == null || head.next == null) {
      return head;
    }
    let curr = head;
    let slow = curr;
    curr = head.next;

    slow.next = null;

    while (curr != null) {
      let fast = curr;
      curr = curr.next;
      fast.next = slow;
      slow = fast;
    }

    return slow;
  }
  return {
    insertHead,
    insertTail,
    insertBeforePosition,
    reverseSinglyLinkedList,
    reverseSinglyLinkedListV2,
  };
}

const singlyLinkedList = createSinglyLinkedList();
singlyLinkedList.insertHead(3);
singlyLinkedList.insertHead(2);
singlyLinkedList.insertHead(1);
console.log(singlyLinkedList.reverseSinglyLinkedListV2());
