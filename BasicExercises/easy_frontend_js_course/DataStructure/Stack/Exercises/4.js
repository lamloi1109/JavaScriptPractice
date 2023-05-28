// 4. Write a JavaScript program to reverse the elements of a given stack.

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

  function reverse() {
    const tempStack = createStack();
    let count = 0;
    let step = stack.length - 1;

    while (!isEmpty()) {

      while (count < step) {
        tempStack.push(pop());
        count++;
      }

      const currElement = pop();

      while (count > 0) {
        push(tempStack.pop());
        count--;
      }

      tempStack.push(currElement);
      count = 0;
      step -= 1;
    }

    while (!tempStack.isEmpty()) {
      push(tempStack.pop());
    }

    return stack;
  }

  return {
    pop,
    push,
    getTop,
    isEmpty,
    reverse,
  };
}

const stack = createStack();
stack.push(3);
stack.push(2);
stack.push(1);
console.log(stack.reverse());
