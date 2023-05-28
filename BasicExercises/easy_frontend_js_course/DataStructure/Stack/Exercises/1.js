// 1. Write a JavaScript program to implement a stack with push and pop operations. Find the top element of the stack and check if it is empty or not.
function createStack() {
  const stack = [];
  function push(data) {
    stack.push(data);
  }
  function pop() {
    return stack.pop();
  }
  function getTop() {
    return stack.length > 0 ? stack[stack.length - 1] : undefined;
  }
  function isEmpty() {
    return stack.length === 0;
  }

  return {
    pop,
    push,
    getTop,
    isEmpty,
  };
}

const myStack = createStack();
console.log(myStack.isEmpty());
myStack.push(1);
myStack.push(2);
myStack.push(3);
console.log(myStack.getTop());
