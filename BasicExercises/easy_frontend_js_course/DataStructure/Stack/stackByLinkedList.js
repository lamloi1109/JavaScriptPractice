function createLinkedList() {
  let head = null;

  function isEmpty() {
    return head == null ? true : false;
  }

  function getHead() {
    return head;
  }

  function tail() {
    if (head == null) {
      return null;
    }
    let tailNode = head;
    // node is tail if next node is null
    while (tailNode.next != null) {
      tailNode = tailNode.next;
    }
    return tailNode;
  }

  function getSize() {
    if (head == null) {
      return 0;
    }
    let currentNode = head;
    let countSize = 0;
    while (currentNode != null) {
      countSize++;
      currentNode = currentNode.next;
    }
    return countSize;
  }

  function findIndexByData(data) {
    if (head == null) {
      return -1;
    }
    let currentNode = head;
    let index = 0;
    while (currentNode != null) {
      if (currentNode.data === data) {
        return index;
      }
      index++;
      currentNode = currentNode.next;
    }
    return -1;
  }

  function findIndexWithCallBack(callBackFn) {
    if (head == null) {
      return -1;
    }
    let currentNode = head;
    let index = 0;
    while (currentNode != null) {
      if (callBackFn(currentNode.data)) {
        return index;
      }
      index++;
      currentNode = currentNode.next;
    }
    return -1;
  }

  function findByIndex(searchIndex) {
    if (head == null || searchIndex < 0) {
      return undefined;
    }
    let currentNode = head;
    let index = 0;
    while (currentNode != null) {
      if (index === searchIndex) {
        return currentNode.data;
      }
      index++;
      currentNode = currentNode.next;
    }
    return undefined;
  }

  function findWithCallBack(callBackFn) {
    if (head == null) {
      return -1;
    }
    let currentNode = head;
    let index = 0;
    while (currentNode != null) {
      if (callBackFn(currentNode.data, index)) {
        return currentNode.data;
      }
      index++;
      currentNode = currentNode.next;
    }
    return undefined;
  }

  function insertHead(newData) {
    const newNode = {
      data: newData,
      next: null,
    };
    if (head == null) {
      head = newNode;
    } else {
      newNode.next = head;
      head = newNode;
    }
    return head;
  }
  function printLinkedList() {
    if (head == null) {
      return;
    }
    let currentNode = head;
    while (currentNode != null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  function insertTail(newData) {
    const newNode = {
      data: newData,
      next: null,
    };

    if (head == null) {
      head = newNode;
    } else {
      const tailNode = tail();
      tailNode.next = newNode;
    }

    return head;
  }
  function insertBeforePosition(newData, position) {
    if (position <= 0 || head == null) {
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
  function some(callBackFn) {
    if (head == null) return false;
    let current = head;
    let index = 0;
    while (current != null) {
      if (callBackFn(current.data, index)) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
  function every(callBackFn) {
    if (head == null) {
      return false;
    }

    let current = head;
    let index = 0;
    while (current != null) {
      if (!callBackFn(current.data, index)) {
        return false;
      }

      current = current.next;
    }

    return true;
  }
  function removeHead() {
    if (head != null) head = head.next;
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
  function removeByIndex(index) {
    if (index <= 0 || head == null) {
      removeHead();
      return head;
    }

    if (head.next == null) {
      head = null;
      return head;
    }

    let current = head;
    let i = 0;
    let prev = head;

    while (current.next != null && i < index) {
      prev = current;
      current = current.next;
      i++;
    }
    prev.next = current.next;
    return head;
  }
  return {
    insertHead,
    printLinkedList,
    getSize,
    tail,
    getHead,
    findIndexByData,
    findIndexWithCallBack,
    findByIndex,
    findWithCallBack,
    insertTail,
    insertBeforePosition,
    some,
    every,
    removeHead,
    removeTail,
    removeByIndex,
    isEmpty,
  };
}
export function createStackLinkedList() {
  let stackByLinkedList = createLinkedList();
  function isEmpty() {
    return stackByLinkedList.isEmpty();
  }
  function getSize() {
    return stackByLinkedList.getSize();
  }
  function getTop() {
    return getSize() > 0 ? stackByLinkedList.getHead() : undefined;
  }
  function push(data) {
    stackByLinkedList.insertHead(data);
  }
  function pop() {
    let topValue = stackByLinkedList.getHead().data;
    stackByLinkedList.removeHead();
    return topValue;
  }
  return {
    isEmpty,
    getSize,
    getTop,
    pop,
    push,
  };
}
