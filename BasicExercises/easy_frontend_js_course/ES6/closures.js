// Closure là một function có quyền truy cập đến parent scope cũng như sau khi parent function đã kết thúc
// Hay hàm bên trong có quyền truy cập đến hàm bên ngoài ngay cả khi hàm bên ngoài đã kết thúc
function createTodoList(list) {
  if (!Array.isArray(list)) {
    return undefined;
  }
  let tdList = [];
  let catcheList = {};

  function printCurrList() {
    if (tdList.length === 0) {
      return;
    }
    tdList.forEach((element) => {
      console.log(element);
    });
  }

  function addToList(toDoSomeThing) {
    tdList.push(toDoSomeThing);
  }

  function removeLastList() {
    if (tdList.length === 0) {
      return;
    }
    return tdList.pop();
  }

  function removeAtIndex(index) {
    if (tdList.length === 0 || index < 0 || index > tdList.length) {
      return;
    }
    return tdList.splice(index, 1);
  }

  function getSize() {
    return tdList.length;
  }

  function isEmptyList() {
    return tdList.length === 0;
  }

  function clearList() {
    tdList.length = 0;
    return tdList;
  }

  return {
    printCurrList,
    addToList,
    removeLastList,
    removeAtIndex,
    isEmptyList,
    getSize,
    clearList,
  };
}

const toDoList = createTodoList([]);
toDoList.addToList('Học Tiếng Anh');
toDoList.addToList('Học JS');
toDoList.addToList('Học HTML CSS');
toDoList.printCurrList();
toDoList.clearList();
toDoList.printCurrList();

// Trong vd trên
// printCurrList,
// addToList,
// removeLastList,
// removeAtIndex,
// isEmptyList,
// getSize,
// clearList,
// Các hàm trên được gọi là closure vì chúng sử dụng list từ hàm cha là createToDoList
// 