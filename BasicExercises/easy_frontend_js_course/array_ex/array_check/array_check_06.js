// Kiểm tra có student có id nào đó trong mảng không
// Viết hàm hasStudent(studentList, studentId) để kiểm tra trong mảng studentList có student nào có id là
// studentId không?

// studentList is empty array
// studentId is not a number
// studentId not in studentList
// studentId in studentList
export function hasStudent(studentList, studentId) {
  if (
    !Array.isArray(studentList) ||
    studentList.length === 0 ||
    typeof studentId !== "number"
  )
    return false;
  return studentList.reduce((acc, curr) => {
    acc = curr.id === studentId ? true : acc;
    return acc;
  }, false);
}

export function hasStudentV2(studentList, studentId) {
  if (
    !Array.isArray(studentList) ||
    studentList.length === 0 ||
    typeof studentId !== "number"
  )
    return false;

  for (let index = 0; index < studentList.length; index++) {
    const student = studentList[index];
    if (student.id === studentId) return true;
  }
  return false;
}

export function hasStudentV3(studentList, studentId) {
  if (
    !Array.isArray(studentList) ||
    studentList.length === 0 ||
    typeof studentId !== "number"
  )
    return false;

  for (let student of studentList) {
    if (student.id === studentId) return true;
  }
  return false;
}

export function hasStudentV4(studentList, studentId) {
  if (
    !Array.isArray(studentList) ||
    studentList.length === 0 ||
    typeof studentId !== "number"
  )
    return false;
  let result = false;

  studentList.forEach((student) => {
    if (student.id === studentId) result = true;
  });

  return result;
}

export function hasStudentV5(studentList, studentId) {
  if (
    !Array.isArray(studentList) ||
    studentList.length === 0 ||
    typeof studentId !== "number"
  )
    return false;

  return studentList.some((student) => student.id === studentId);
}
