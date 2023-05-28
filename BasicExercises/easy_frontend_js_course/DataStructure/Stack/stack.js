export function createStack() {
  let stack = [];
  function isEmpty() {
    return stack.length === 0;
  }
  function getSize() {
    return stack.length;
  }
  function getTop() {
    return stack.length > 0 ? stack[stack.length - 1] : undefined;
  }
  function push(data) {
    stack.push(data);
  }
  function pop() {
    return stack.pop()
  }
  return {
    isEmpty,
    getSize,
    getTop,
    pop,
    push,
  };
}
