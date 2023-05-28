// 5. Write a JavaScript program to find the maximum and minimum elements in a stack.
export function createStack() {
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

  function findMaxAndMin() {
    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    const tempStack = createStack();

    while (!isEmpty()) {
      const currElement = pop();
      if (currElement > max) {
        max = currElement;
      }
      if (min > currElement) {
        min = currElement;
      }
      tempStack.push(currElement);
    }

    while (!tempStack.isEmpty()) {
      push(tempStack.pop());
    }

    return [min, max];
  }

  return {
    pop,
    push,
    getTop,
    isEmpty,
    findMaxAndMin,
  };
}
