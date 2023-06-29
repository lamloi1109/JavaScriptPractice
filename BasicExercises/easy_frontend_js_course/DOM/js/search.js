function handleFilterChange(filterName, filterValue) {
  const todoElementList = document.querySelectorAll('ul#todoList > li');
  if (!todoElementList) {
    return;
  }

  const url = new URL(window.location);
  url.searchParams.set(filterName, filterValue);
  history.pushState({}, '', url);

  for (const item of todoElementList) {
    const needToShow = isMatch(item, url.searchParams);
    item.hidden = !needToShow;
  }
}

function isMatchSearch(itemElement, searchTerm) {
  if (!itemElement) return false;
  if (searchTerm === '') return true;
  const titleElement = itemElement.querySelector('p.todo__title');
  if (!titleElement) return false;

  return titleElement.textContent.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase());
}

function isMatchFilter(itemElement, status) {
  if (status == null) {
    return true;
  }
  return status === 'all' || itemElement.dataset.status === status;
}

function isMatch(itemElement, params) {
  return (
    isMatchSearch(itemElement, params.get('search')) &&
    isMatchFilter(itemElement, params.get('status'))
  );
}

function searchTodo(searchTerm, todoStatus) {
  if (!searchTerm || !todoStatus) {
    return;
  }

  const todoElementList = document.querySelectorAll('ul#todoList > li');
  if (!todoElementList) {
    return;
  }

  for (const item of todoElementList) {
    const needToShow = isMatch(item, searchTerm, todoStatus);
    item.hidden = !needToShow;
  }
}

function initSearchInput(params) {
  const searchTodoElement = document.getElementById('searchTerm');
  const todoFilter = document.getElementById('todoFilter');
  if (!searchTodoElement || !todoFilter) {
    return;
  }

  if (params.get('search') != null) {
    searchTodoElement.value = params.get('search');
  }

  searchTodoElement.addEventListener('input', () => {
    handleFilterChange('search', searchTodoElement.value);
  });
}

function initFilter(params) {
  const searchTodoElement = document.getElementById('searchTerm');

  const todoFilter = document.getElementById('todoFilter');

  if (!todoFilter) return;

  if (params.get('status') != null) {
    todoFilter.value = params.get('status');
  }

  todoFilter.addEventListener('change', () => {
    handleFilterChange('status', todoFilter.value);
  });
}

(() => {
  const params = new URLSearchParams(window.location.search);

  initSearchInput(params);
  initFilter(params);
})();
