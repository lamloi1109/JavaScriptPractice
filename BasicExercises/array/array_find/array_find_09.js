// Tìm vị trí của student có id cho trước
// Viết hàm findStudentById(studentList, studentId) để tìm ra vị trí của student có id bằng với studentId.

function isStudent(student, studentId) {
  return student.id === studentId;
}

export function findStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0 || typeof studentId !== 'number')
    return -1;
    
  for (let index = 0; index < studentList.length; index++) {
    const student = studentList[index];
    if (isStudent(student, studentId)) return index;
  }
  return -1;
}

export function findStudentByIdV2(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0 || typeof studentId !== 'number')
    return -1;

  return studentList.findIndex((student) => isStudent(student, studentId));
}
