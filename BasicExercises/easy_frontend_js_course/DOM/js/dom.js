// DOM là gì?
// DOM là ánh xạ của document của HTML hoặc XML

// Rendering process
// Browser send request to server, server response resource HTML/CSS.
// File HTML sẽ được build nên DOM hay Document Object Model
// Trong khi CSS được build nên CSSOM (CSS Object Model)
// Có 2 cây:
// + 1 cây ánh xạ của HTML
// + 1 cây ánh xạ của CSS (Các style rule)
// Kết hợp DOM và CSSOM Lại trở thành render tree
// Render tree là những gì được render lên màn hình

// BOM: Browser Object Model

// Các bước khi làm việc với DOM
// Query Element
// Kiểm tra xem element có tồn tại trên cây dom hay không
// Xử lý element
// Attach/Detach event listener nếu cần

(() => {
  // Thu hẹp phạm vi tìm kiếm
  const todoListElement = document.getElementById('todoList');
  // Kiểm tra element có tồn tại
  if (todoListElement) {
    const todoElementList = document.querySelectorAll('li');

    for (const todoElement of todoElementList) {
      console.log(todoElement);
    }
  }
})();
