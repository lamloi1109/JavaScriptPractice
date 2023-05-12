// Tìm tất cả student có điểm toán nhỏ hơn 5
// Viết hàm findAllStudents(studentList) để tìm ra tất cả student có điểm toán nhỏ hơn 5

export function findAllStudents(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  let targetStudentList = [];

  for (let index = 0; index < studentList.length; index++) {
    const student = studentList[index];
    if (student.math < 5) {
      targetStudentList.push(student);
    }
  }
  return targetStudentList;
}
// Các vòng for iterate tương tự for of - forEach

export function findAllStudentsV2(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.filter((student) => student.math < 5);
}
