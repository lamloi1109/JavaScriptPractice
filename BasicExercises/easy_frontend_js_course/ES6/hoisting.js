// Var - Const - Let                  |   var              | let             | const
// initializing                       | optional           | optional        | required
// re-declare                         | yes                | no              | no
// can be re-assigned                 | yes                | yes             | no
// scope                              | Global or function | Global or block | Global or block
// hoisting                           | yes                | yes ( but can not access until initializing)
// Access variable before initialization | yes              | no
// Temporal Dead Zone (TDZ)           | no                 | yes
// when to use                        | avoid using it     | changeable vars | constant, unchanged vars
// become a member of window in global| yes                | no              | no

// {
//   var name1 = 'Loi';
// }
// console.log(name);

// {
//   let name2 = 'Khen';
// }
// console.log(name2); // ReferenceError: name is not defined

// re-declare
// var channelName = '';
// var channelName = 'Easy Frontend'; // it works

// const channelName2 = '';
// const channelName2 = 'abc'; // Syntax Error

// let channelName3 = '';
// let channelName3 = 'abc'; // Syntax Error

function sayHello1() {
  console.log(message);

  {
    const language = 'en';
    var message = 'Hello';
  }
  //   console.log(language); // Language is not defined
  console.log(message);
}
sayHello1();

function sayHello2() {
  var message;
  console.log(message);

  {
    const language = 'en';
    message = 'Hello';
  }
  //   console.log(language); // Language is not defined
  console.log(message);
}
sayHello2();
console.log(age);
let age = 11;
