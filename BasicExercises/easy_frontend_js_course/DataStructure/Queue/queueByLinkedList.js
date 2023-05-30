function createLinkedList() {
  let head = null;
  let tail = null;
  function getHead() {
    return head;
  }
  function getTail() {
    return tail;
  }
  function getSize() {
    if (head == null) {
      return 0;
    }
    let curr = head;
    let count = 0;
    while (curr != null) {
      curr = curr.next;
      count++;
    }
    return count;
  }
  function isEmpty() {
    return getSize() === 0;
  }
  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };
    if (head == null && head == null) {
      head = newNode;
      tail = newNode;
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
    if (tail == null && head == null) {
      tail = newNode;
      head = newNode;
      return head;
    }
    tail.next = newNode;
    tail = newNode;
    return head;
  }
  function insertBeforePosition(newData, position) {
    if (position <= 0 || head == null) {
      return insertHead(newData);
    }

    let curr = head;
    let prev = head;
    let i = 0;

    while (curr != null && i <= position) {
      prev = curr;
      curr = curr.next;
    }
    const newNode = {
      data: newData,
      next: curr,
    };

    prev.next = newNode;
    if (newNode.next == null) {
      tail = newNode;
    }
    return head;
  }
  function removeHead() {
    if (head == null) {
      tail = null;
      return head;
    }

    if (head.next == null) {
      head = null;
      tail = null;
      return head;
    }
    head = head.next;
    return head;
  }
  function removeTail() {
    if (head == null) {
      tail = null;
      return head;
    }
    if (head.next == null) {
      head = null;
      tail = null;
      return head;
    }

    let curr = head;
    let prev = head;
    while (curr.next != null) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = null;
    tail = prev;
    return head;
  }
  function removeAtPosition(position) {
    if (position <= 0 || head == null) {
      return removeHead();
    }

    if (head.next == null) {
      head = null;
      tail = null;
      return head;
    }

    let curr = head;
    let prev = head;
    let i = 0;

    while (curr.next != null && i < position) {
      prev = curr;
      curr = curr.next;
    }
    prev.next = curr.next;
    if (prev.next == null) {
      tail = prev;
    }
    return head;
  }
  return {
    getHead,
    getTail,
    getSize,
    isEmpty,
    insertHead,
    insertTail,
    insertBeforePosition,
    removeHead,
    removeTail,
    removeAtPosition,
  };
}

export function createQueueByLinkedList() {
  const queue = createLinkedList();
  function getFront() {
    const front = queue.getTail()?.data;
    return front == null ? undefined : front;
  }
  function getBack() {
    const back = queue.getHead()?.data;
    return back == null ? undefined : back;
  }
  function Dequeue() {
    const front = queue.getTail()?.data;
    queue.removeTail();
    return front == null ? undefined : front;
  }
  function Enqueue(newData) {
    return queue.insertHead(newData);
  }
  function isEmpty() {
    return queue.isEmpty();
  }
  function getSize() {
    return queue.getSize();
  }
  return {
    getBack,
    getFront,
    getSize,
    isEmpty,
    Enqueue,
    Dequeue,
  };
}
