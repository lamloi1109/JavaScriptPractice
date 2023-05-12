// Tìm student có điểm môn toán lớn nhất đầu tiên
// Viết hàm findStudentHavingHighestMark(studentList) để tìm ra student để điểm môn toán cao nhất.
export function findStudentHavingHighestMark(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return {};

  let highestMark = Number.MIN_SAFE_INTEGER;

  for (let index = 0; index < studentList.length; index++) {
    const student = studentList[index];
    if (student.math > highestMark) highestMark = student.math;
  }

  let studentIndex = studentList.findIndex((student) => student.math === highestMark);
  return studentList[studentIndex];
}

export function findStudentHavingHighestMarkV2(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return {};

  let highestMark = studentList.reduce((acc, curr) => {
    if (curr.math > acc) {
      acc = curr.math;
    }
    return acc;
  }, Number.MIN_SAFE_INTEGER);

  let studentIndex = studentList.findIndex((student) => student.math === highestMark);
  return studentList[studentIndex];
}
