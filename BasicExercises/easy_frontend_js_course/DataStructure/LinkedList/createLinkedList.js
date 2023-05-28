function createLinkedList() {
  let head = null;
  function insertHead(newData) {
    // Node Constructor
    // data
    // next: (node)
    const newNode = {
      data: newData,
      next: null,
    };
    // head == null
    if (head == null) {
      head = newNode;
      return;
    }
    newNode.next = head;
    head = newNode;
  }
  function printLinkedList() {
    let currentNode = head;
    while (currentNode != null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
  return {
    insertHead,
    printLinkedList,
  };
}

const numberLinkedList = createLinkedList();
numberLinkedList.insertHead(5);
numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);
numberLinkedList.printLinkedList();

class SinglyLinkedListNode {
  constructor(newData = null) {
    this.data = newData;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor(newHead = null) {
    this.head = newHead;
  }
  insertHead(newData) {
    const newNode = new SinglyLinkedListNode(newData);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    newNode.next = this.head;
    this.head = newNode;
  }
  printLinkedList() {
    let currentNode = this.head;
    while (currentNode != null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }
}

console.log('Linked List design by OOP');
const numberLinkedListV2 = new SinglyLinkedList();
numberLinkedListV2.insertHead(5);
numberLinkedListV2.insertHead(4);
numberLinkedListV2.insertHead(3);
numberLinkedListV2.printLinkedList();
