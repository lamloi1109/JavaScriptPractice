// Tìm student có điểm trung bình môn thấp nhất cuối cùng
// Viết hàm findLastStudentHavingMinAvg(studentList) để tìm ra student có điểm trung bình môn thấp nhất
// cuối cùng trong mảng

export function findLastStudentHavingMinAvg(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return {};

  let minAvg = Number.MAX_SAFE_INTEGER;

  for (let index = 0; index < studentList.length; index++) {
    const student = studentList[index];
    const avgMark = (student.math + student.english) / 2;
    if (avgMark < minAvg) minAvg = avgMark;
  }

  return studentList[
    studentList.reverse().findIndex((student) => {
      const avgMark = (student.math + student.english) / 2;

      return avgMark === minAvg;
    })
  ];
}

export function findLastStudentHavingMinAvgV2(studentList) {
  if (!Array.isArray(studentList) || studentList.length === 0) return {};

  let minAvg = studentList.reduce((acc, curr) => {
    const avgMark = (curr.math + curr.english) / 2;
    if (avgMark < acc) acc = avgMark;
    return acc;
  }, Number.MAX_SAFE_INTEGER);

  return studentList[
    studentList.reverse().findIndex((student) => {
      const avgMark = (student.math + student.english) / 2;

      return avgMark === minAvg;
    })
  ];
}
