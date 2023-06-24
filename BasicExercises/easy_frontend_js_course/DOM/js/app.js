function createTodoElement(todoItem) {
  if (!todoItem) return null;

  const templateElement = document.getElementById('todoTemplate');
  if (!templateElement) return null;

  const itemElement = templateElement.content.firstElementChild.cloneNode(true);
  itemElement.dataset.id = todoItem.id;
  itemElement.dataset.status = todoItem.status;

  const editButton = itemElement.querySelector('button.edit');
  const markAsDoneButton = itemElement.querySelector('button.mark-as-done');
  const removeButton = itemElement.querySelector('button.remove');
  const alertElement = itemElement.querySelector('div.todo.alert');
  const titleElement = itemElement.querySelector('.todo__title');

  if (!alertElement || !titleElement || !editButton || !markAsDoneButton || !removeButton)
    return null;

  const alertClass = todoItem.status === 'pending' ? 'alert-secondary' : 'alert-success';

  alertElement.classList.add(alertClass);
  titleElement.textContent = todoItem.title;

  handleEditButton(editButton, todoItem);

  handleMarkAsDoneButton({
    markAsDoneButton: markAsDoneButton,
    itemElement: itemElement,
    alertElement: alertElement,
    todoItem: todoItem,
  });

  handleRemoveButton(removeButton, todoItem, itemElement);

  return itemElement;
}

function renderTodoList(todoListElementId, todoList) {
  if (!Array.isArray(todoList) || todoList.length === 0) {
    return;
  }

  const todoListElement = document.getElementById(todoListElementId);
  if (!todoListElement) return;

  for (const item of todoList) {
    const itemElement = createTodoElement(item);
    todoListElement.appendChild(itemElement);
  }
}

function getTodoList() {
  try {
    const todoList = localStorage.getItem('todo_list');
    return JSON.parse(todoList) ?? [];
  } catch {
    return [];
  }
}

function handleTodoFormSubmit(event) {
  event.preventDefault();

  const todoForm = document.getElementById('todoFormId');
  if (!todoForm) {
    return;
  }
  const todoText = document.getElementById('todoText');
  if (!todoText) {
    return;
  }

  const isEdit = Boolean(todoForm.dataset.id);

  isEdit ? editTodo(todoForm, todoText.value) : addTodo(todoForm, todoText.value);

  // reset form
  const selectElement = todoForm.querySelector('.selectTodo');
  if (!selectElement) return;

  delete todoForm.dataset.id;
  todoForm.reset();
  const todoButton = todoForm.querySelector('button.btn');
  todoButton.textContent = 'Save Todo';
}

function updateCurrentStatusMarkAsDoneButton(itemElement, markAsDoneButton) {
  if (!itemElement || !markAsDoneButton) {
    return;
  }
  const currentStatus = itemElement.dataset.status;
  const currentButtonClass = currentStatus === 'pending' ? 'btn-success' : 'btn-secondary';
  const currentButtonText = currentStatus === 'pending' ? 'Finish' : 'Reset';

  markAsDoneButton.classList.remove('btn-success', 'btn-secondary');
  markAsDoneButton.classList.add(currentButtonClass);
  markAsDoneButton.textContent = currentButtonText;
}

function handleMarkAsDoneButton({ markAsDoneButton, itemElement, alertElement, todoItem }) {
  if (!markAsDoneButton || !alertElement || !itemElement) {
    return;
  }

  updateCurrentStatusMarkAsDoneButton(itemElement, markAsDoneButton);

  markAsDoneButton.addEventListener('click', () => {
    // Lấy current status một lần nữa vì ko có live attributes
    // Nên nó không cập nhật status
    // Do vậy khi click button thì nó vẫn ở status cũ
    const currentStatus = itemElement.dataset.status;
    const newStatus = currentStatus === 'pending' ? 'completed' : 'pending';
    const newAlertClass = newStatus === 'pending' ? 'alert-success' : 'alert-secondary';
    const newButtonClass = newStatus === 'pending' ? 'btn-success' : 'btn-secondary';
    const newButtonText = newStatus === 'pending' ? 'Finish' : 'Reset';
    const todoList = getTodoList();
    const index = todoList.findIndex((item) => item.id === todoItem.id);
    if (index >= 0) {
      todoList[index].status = newStatus;
      localStorage.setItem('todo_list', JSON.stringify(todoList));
    }

    itemElement.dataset.status = newStatus;

    alertElement.classList.remove('alert-secondary', 'alert-success');
    alertElement.classList.add(newAlertClass);

    markAsDoneButton.classList.remove('btn-success', 'btn-secondary');
    markAsDoneButton.classList.add(newButtonClass);
    markAsDoneButton.textContent = newButtonText;
  });
}

function handleRemoveButton(removeButton, todoItem, itemElement) {
  if (!removeButton) return;
  removeButton.addEventListener('click', () => {
    const todoList = getTodoList();
    const newTodoList = todoList.filter((item) => item.id !== todoItem.id);
    localStorage.setItem('todo_list', JSON.stringify(newTodoList));

    itemElement.remove();
  });
}

function handleEditButton(editButton, todoItem) {
  if (!editButton) return;

  editButton.addEventListener('click', () => {
    const todoList = getTodoList();

    const latestTodoItem = todoList.find((item) => item.id === todoItem.id);
    if (!latestTodoItem) return;

    populateTodoForm(latestTodoItem);
  });
}

function addTodo(todoForm, todoValue) {
  if (!todoForm) {
    return;
  }
  // validate todo value
  // ...

  const todoList = getTodoList();
  const selectTodo = todoForm.querySelector('.selectTodo');
  if (!selectTodo) return;

  const newTodo = {
    id: new Date().getTime(),
    title: todoValue,
    status: selectTodo.value,
  };

  todoList.push(newTodo);
  localStorage.setItem('todo_list', JSON.stringify(todoList));

  const todoListElement = document.getElementById('todoList');
  if (!todoListElement) return;

  const itemElement = createTodoElement(newTodo);
  todoListElement.appendChild(itemElement);
}

function editTodo(todoForm, todoValue) {
  if (!todoForm) return;

  const todoList = getTodoList();
  // target.id is a string while todoItem.id is a number -> use == -> coercion
  const index = todoList.findIndex((item) => item.id.toString() == todoForm.dataset.id);

  if (index < 0) return;

  todoList[index].title = todoValue;

  const selectTodo = todoForm.querySelector('.selectTodo');

  if (!selectTodo) return;

  todoList[index].status = selectTodo.value;

  localStorage.setItem('todo_list', JSON.stringify(todoList));

  const itemElement = document.querySelector(`ul#todoList > li[data-id='${todoForm.dataset.id}']`);

  if (!itemElement) return;

  const titleElement = itemElement.querySelector('.todo__title');
  if (!titleElement) return;

  titleElement.textContent = todoValue;
  itemElement.dataset.status = selectTodo.value;

  const markAsDoneButton = itemElement.querySelector('button.mark-as-done');
  if (!markAsDoneButton) return;
  updateCurrentStatusMarkAsDoneButton(itemElement, markAsDoneButton);
}

function populateTodoForm(todoItem) {
  const todoForm = document.getElementById('todoFormId');
  if (!todoForm) return;

  todoForm.dataset.id = todoItem.id;

  const todoButton = todoForm.querySelector('button.btn');
  if (!todoButton) return;

  todoButton.textContent = 'Edit Todo';

  const todoText = document.getElementById('todoText');
  if (!todoText) return;

  todoText.value = todoItem.title;

  // get select element
  const selectElement = todoForm.querySelector('.selectTodo');
  if (!selectElement) return;

  const optionListElement = selectElement.querySelectorAll('.selectTodo > option');

  if (!optionListElement) return;

  optionListElement.forEach((option) => {
    option.removeAttribute('selected');
    if (option.value === todoItem.status) {
      option.setAttribute('selected', 'selected');
    }
  });
}

(() => {
  const todoList = getTodoList();

  renderTodoList('todoList', todoList);

  const todoForm = document.getElementById('todoFormId');

  if (todoForm) {
    todoForm.addEventListener('submit', handleTodoFormSubmit);
  }
})();
