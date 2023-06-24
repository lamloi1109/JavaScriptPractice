function isMatch(itemElement, searchTerm) {
  if (!itemElement) return false;
  if (searchTerm === '') return true;
  const titleElement = itemElement.querySelector('p.todo__title');
  if (!titleElement) return false;

  return titleElement.textContent.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
}

function searchTodo(searchTerm) {
  if (!searchTerm) {
    return;
  }

  const todoElementList = document.querySelectorAll('ul#todoList > li');
  if (!todoElementList) {
    return;
  }
  [...todoElementList].filter((item) => {
    const needToShow = isMatch(item, searchTerm);
    item.hidden = !needToShow;
  });
}

function initSearchInput() {
  const searchTodoElement = document.getElementById('searchTerm');
  if (!searchTodoElement) {
    return;
  }
  searchTodoElement.addEventListener('input', () => {
    searchTodo(searchTodoElement.value);
  });
}
(() => {
  initSearchInput();
})();
