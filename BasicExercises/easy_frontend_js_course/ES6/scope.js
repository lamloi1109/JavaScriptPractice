// Scope là gì -> Phạm vi truy cập của biến
// Có bao nhiêu loại scope
// Block scope [const, let] -> Giới hạn trong {}
// Function scope [var] -> Giới hạn trong function
// Lexical scope -> Nơi định nghĩa scope (Hàm bên trong truy cập biến bên ngoài hàm)
const name = 'Easy Frontend';
function sayHello() {
  const language = 'en';
  console.log(name);
  // the lexical scope of name is global scope
  function printLanguage() {
    console.log(language);
    // the lexical scope of language is function scope sayHello
  }
  printLanguage();
}
sayHello();
// Global scope [var, const, let] -> ko nằm trong bất cứ function nào
// Global object in browser is window
// Global object in nodejs is global
// globalThis -> get global object
// [var variable -> global Object]
var channelName = 'Easy Frontend';
console.log(globalThis.channelName); 
// undefined vì biến được khai báo với var chỉ được add vào global object trên môi trường browser
// Scope chain
const fullName = 'Easy';

function proFile() {
  function sayName() {
    function writeName() {
      return fullName;
    }
    // const fullName = 'Boom';
    return writeName();
  }
  //   const fullName = 'Frontend';
  return sayName();
}
console.log(proFile());
// Lý thuyết trình biên dịch

// Engine
// Biên soạn và thực thi chương trình js từ đầu tới cuối
// Compiler
// Phân tích cú pháp và xử lý mã
// Scope
// Một danh sách các định danh đã khai báo (biến), và
// thực hiện một tập hợp các quy tắc nghiêm ngặt về
// cách thức truy cập các mã vừa thực thi.
// Scope với Engine và compiler
