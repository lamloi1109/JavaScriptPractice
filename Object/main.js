// Pass by value
function changePrimitive(value) {
  value = 11;
}
let value = 10;
changePrimitive(value);
console.log(value);
// value không thay đổi giá trị mặc dù bên trong hàm changePrimive ta đã gán nó bằng 11 vì
// Khi truyển tham số vào fnc thật chất nó chỉ coppy giá trị của biến value sang một biến khác mà thôi
// Nên khi bên trong hàm ta thay đổi giá trị thì nó vẫn không đổi ở bên ngoài
function changeReference(obj) {
  obj.value = 11;
}
let obj = {
  value: 10,
};
changeReference(obj);
console.log(obj.value);
// Còn đối với obj vì nó là kiểu tham chiếu nên khi ta truyền nó vào hàm thật chất ta chỉ giao địa chỉ của nó cho biến tham
// Số mà thôi nên khi trong hàm ta thay đổi giá trị nghĩa là ta chỉ truy cập đến địa chỉ của obj và thay đổi giá trị vì cả
// 2 thằng đều chung 1 địa chỉ

// Clone Obj
const obj1 = {
  value: 10,
};
const obj2 = { ...obj1 };
console.log(obj1);
console.log("obj2: ", obj2);
obj2.value = 12;
console.log("obj2 Sau khi thay đổi giá trị của key value thành 12", obj2);
// -->  Nó không làm thay đổi giá trị của obj1
// Nó chỉ clone dc 1 tầng obj

const student = {
  name: "Loi",
  age: 24,
  mark: {
    js: 5,
  },
};

const cloneStudent = { ...student };
cloneStudent.mark.js = 10;
console.log(student); // js point đã thay đôi từ 5 -> Nguyên nhân là do khi clone obj với spread operators thì mark trả về địa chỉ
// Nên sẽ có 2 thằng trở về cùng 1 địa chỉ của obj chứa js point
// Solution

const cloneStudent2 = {
  ...student,
  mark: {
    ...student.mark,
  },
};
console.log("Sau khi clone ", cloneStudent2);
cloneStudent2.mark.js = 5;
console.log("Sau khi thay đổi giá  trị ở clonestd2 ", cloneStudent2, student);
// js point ở student là 10 trong khi ở cloneStudent2 là 5
