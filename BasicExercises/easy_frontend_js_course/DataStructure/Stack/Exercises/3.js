// 3. Write a JavaScript program to sort the elements of a given stack in ascending order.

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

  function sortedStack() {
    const tempStack = createStack();
    while (!isEmpty()) {
      let currentElement = pop();
      while (!tempStack.isEmpty() && tempStack.getTop() < currentElement) {
        push(tempStack.pop());
      }
      tempStack.push(currentElement);
    }
    while (!tempStack.isEmpty()) {
      const curr = tempStack.pop();
      push(curr);
    }
    return stack;
  }

  return {
    pop,
    push,
    getTop,
    isEmpty,
    sortedStack,
  };
}
const stack = createStack();
stack.push(5);
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(6);
console.log(stack.sortedStack());
