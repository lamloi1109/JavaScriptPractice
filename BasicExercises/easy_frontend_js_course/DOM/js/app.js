function createTodoElement(todoItem) {
  if (!todoItem) {
    return;
  }

  const templateElement = document.getElementById('todoTemplate');
  if (!templateElement) {
    return null;
  }

  const itemElement = templateElement.content.firstElementChild.cloneNode(true);

  const titleElement = itemElement.querySelector('.todo__title');
  itemElement.dataset.id = todoItem.id;
  itemElement.dataset.status = todoItem.status;

  const alertElement = itemElement.querySelector('div.todo.alert');

  if (!alertElement) {
    return null;
  }

  const alertClass = todoItem.status === 'pending' ? 'alert-secondary' : 'alert-success';
  alertElement.classList.add(alertClass);

  if (titleElement) {
    titleElement.textContent = todoItem.title;
  }

  const editButton = itemElement.querySelector('button.edit');
  if (editButton) {
    editButton.addEventListener('click', () => {
      editButton.disabled = true;
      editButton.textContent = 'Editing...';
      populateTodoForm(itemElement);
    });
  }
  const markAsDoneButton = itemElement.querySelector('button.mark-as-done');

  if (markAsDoneButton) {
    const currentStatus = itemElement.dataset.status;
    const currentButtonClass = currentStatus === 'pending' ? 'btn-success' : 'btn-secondary';
    const currentButtonText = currentStatus === 'pending' ? 'Finish' : 'Reset';

    markAsDoneButton.classList.remove('btn-success', 'btn-secondary');
    markAsDoneButton.classList.add(currentButtonClass);
    markAsDoneButton.textContent = currentButtonText;

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

  const removeButton = itemElement.querySelector('button.remove');

  if (removeButton) {
    removeButton.addEventListener('click', () => {
      const todoList = getTodoList();
      const newTodoList = todoList.filter((item) => item.id !== todoItem.id);
      localStorage.setItem('todo_list', JSON.stringify(newTodoList));

      itemElement.remove();
    });
  }

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
  // preventDefault
  event.preventDefault();
  // get value from input
  const todoText = document.getElementById('todoText');

  // validate
  // save value to localStorage
  const todoList = getTodoList();

  let newTodo;
  if (event.target.dataset.id) {
    // target.id is a string while todoItem.id is a number -> use == -> coercion
    const index = todoList.findIndex((item) => item.id == event.target.dataset.id);
    
    if (index >= 0) {
      todoList[index].title = todoText.value;
    }
  } else {
    newTodo = {
      id: new Date().getTime(),
      title: todoText.value,
      status: 'pending',
    };
    todoList.push(newTodo);
  }

  localStorage.setItem('todo_list', JSON.stringify(todoList));
  // apply DOM change
  const todoListElement = document.getElementById('todoList');
  if (!todoListElement) return;

  if (event.target.dataset.id) {
    const itemElementList = todoListElement.querySelectorAll('li');
    itemElementList.forEach((element) => {
      if (element.dataset.id === event.target.dataset.id) {
        const titleElement = element.querySelector('.todo__title');
        titleElement.textContent = todoText.value;
        const editButton = element.querySelector('button.edit');
        editButton.disabled = false;
        editButton.textContent = 'Edit';
      }
    });
  } else {
    const itemElement = createTodoElement(newTodo);
    todoListElement.appendChild(itemElement);
  }

  // reset form
  const todoForm = document.getElementById('todoFormId');
  if (todoForm) {
    delete todoForm.dataset.id;
    todoForm.reset();
    const todoButton = todoForm.querySelector('button.btn');
    todoButton.textContent = 'Save Todo';
  }
}

function populateTodoForm(todoItem) {
  const todoForm = document.getElementById('todoFormId');
  if (todoForm) {
    console.log(todoItem);
    todoForm.dataset.id = todoItem.dataset.id;
    const todoButton = todoForm.querySelector('button.btn');
    if (todoButton) {
      todoButton.textContent = 'Edit Todo';
    }
    const todoText = document.getElementById('todoText');
    if (todoText) {
      const todoTitle = todoItem.querySelector('.todo__title');
      todoText.value = todoTitle.textContent;
    }
  }
}

(() => {
  const todoList = getTodoList();

  renderTodoList('todoList', todoList);

  const todoForm = document.getElementById('todoFormId');

  if (todoForm) {
    todoForm.addEventListener('submit', handleTodoFormSubmit);
  }
})();
