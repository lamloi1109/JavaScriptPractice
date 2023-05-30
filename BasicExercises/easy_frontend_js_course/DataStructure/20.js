// Kiểm tra đóng mở ngoặc có đúng cặp hay không
// [([{<>}])]
// []
// (]
// {]
function createStack() {
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
    return stack.pop();
  }
  return {
    isEmpty,
    getSize,
    getTop,
    pop,
    push,
  };
}

export function isBracketCouple(str) {
  if (str === '') {
    return false;
  }
  const stack = createStack();
  const coupleBracket = {
    ']': '[',
    ')': '(',
    '}': '{',
    '>': '<',
  };

  const bracketList = str.split('');

  bracketList.forEach((bracket) => {
    if (bracket === '[' || bracket === '(' || bracket === '{' || bracket === '<') {
      stack.push(bracket);
    }
    if (coupleBracket[bracket] !== undefined && coupleBracket[bracket] === stack.getTop()) {
      stack.pop();
    }
  });

  return stack.isEmpty();
}
console.log(isBracketCouple('([)]'));
