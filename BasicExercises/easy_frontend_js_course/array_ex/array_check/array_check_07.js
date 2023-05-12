// Kiểm tra có student giới tính là Nữ tên Alice không
// Viết hàm hasAlice(studentList) để kiểm tra trong mảng studentList có student nữ nào tên là Alice không?
// (không phân biệt hoa thường)

// studentList is empty array
// studentList does not have student's name is Alice
// Alice's gender is feMale - Ko có học sinh Alice là nữ
// Có cả nam và nữ tên ALice

// Chia để trị
function isAlice(student) {
  return student.name.toLowerCase() === "alice" && student.gender === "male";
}

export function hasAlice(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  for (let index = 0; index < studentList.length; index++) {
    const student = studentList[index];
    if (isAlice(student)) {
      return true;
    }
  }
  return false;
}

export function hasAliceV2(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;
  let result = false;
  studentList.forEach((student) => {
    if (isAlice(student)) result = true;
  });
  return result;
}

export function hasAliceV3(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  return studentList.reduce((acc, curr) => (isAlice(curr) ? true : acc), false);
}

export function hasAliceV4(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;
  for (const student of studentList) {
    if (isAlice(student)) return true;
  }
  return false;
}

export function hasAliceV5(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return false;

  return studentList.some((student) => isAlice(student));
}
