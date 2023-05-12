// Ðếm số lượng students có điểm trung bình lớn hơn hoặc bằng avgMark
// Viết hàm countStudents(studentList, avgMark) để đếm số lượng student có điểm trung bình môn lớn hơn
// hoặc bằng avgMark

//delegate
function getAvgFromStudent(student) {
  const totalMark = Object.values(student.marks).reduce((sum, mark) => {
    return sum + mark;
  }, 0);
  const avg = totalMark / Object.keys(student.marks).length;
  return avg;
}

export function countStudents(studentList, avgMark) {
  if (
    !Array.isArray(studentList) ||
    studentList.length === 0 ||
    typeof avgMark !== 'number' ||
    avgMark < 0
  )
    return 0;

  let count = 0;

  for (let index = 0; index < studentList.length; index++) {
    const student = studentList[index];
    const avg = getAvgFromStudent(student);
    if (avg >= avgMark) count++;
  }
  return count;
}

export function countStudentsV2(studentList, avgMark) {
  if (
    !Array.isArray(studentList) ||
    studentList.length === 0 ||
    typeof avgMark !== 'number' ||
    avgMark < 0
  )
    return 0;

  return studentList.reduce((count, student) => {
    if (getAvgFromStudent(student) >= avgMark) count++;
    return count;
  }, 0);
}

export function countStudentsV3(studentList, avgMark) {
  if (
    !Array.isArray(studentList) ||
    studentList.length === 0 ||
    typeof avgMark !== 'number' ||
    avgMark < 0
  )
    return 0;

  return studentList.filter((student) => getAvgFromStudent(student) >= avgMark).length;
}
