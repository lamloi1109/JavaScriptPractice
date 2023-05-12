// Xoá một student có id cho trước
// Viết hàm removeStudentById(studentList, studentId) để remove student có id là studentId ra khỏi
// mảng studentList và trả về mảng mới

export function removeStudentById(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  return studentList.filter((student) => student.id !== studentId);
}

export function removeStudentByIdV2(studentList, studentId) {
  if (!Array.isArray(studentList) || studentList.length === 0) return [];

  const newStudentList = [...studentList];
  const targetStudentIdx = studentList.findIndex((student) => student.id === studentId);
  if (targetStudentIdx !== -1) {
    newStudentList.splice(targetStudentIdx, 1);
  }
  return newStudentList;
}
