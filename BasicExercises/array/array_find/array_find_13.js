// Tìm student đầu tiên có tất cả điểm >= 5, trừ một môn
// Viết hàm findStudent(studentList) để tìm ra student đầu tiên có trong mảng có tất cả các điểm đều lớn
// hơn hoặc bằng 5, tuy nhiên có một môn dưới 5

export function findStudent(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) {
    return {};
  }
  for (let index = 0; index < studentList.length; index++) {
    const student = studentList[index];
    let targetStudent = Object.values(student.marks).filter((mark) => mark < 5);
    if (targetStudent.length === 1) {
      return student;
    }
  }
  return {};
}

export function findStudentV2(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) {
    return {};
  }

  return (
    studentList.find(
      (student) => Object.values(student.marks).filter((mark) => mark < 5).length === 1
    ) ?? {}
  );
}
