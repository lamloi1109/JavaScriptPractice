// Tìm student có điểm trung bình môn thấp nhất cuối cùng
// Viết hàm findLastStudentHavingMinAvg(studentList) để tìm ra student có điểm trung bình môn thấp nhất
// cuối cùng trong mảng

import { findLastStudentHavingMinAvg, findLastStudentHavingMinAvgV2 } from './array_find_12.js';

describe('findLastStudentHavingMinAvg(studentList)', () => {
  const studentList = [
    { id: 1, name: 'Alice', math: 9, english: 9 },
    { id: 2, name: 'Bob', math: 5, english: 5 },
    { id: 3, name: 'John', math: 5, english: 5 },
  ];
  it('should return {} if list is not an array', () => {
    expect(findLastStudentHavingMinAvg('DSADSA')).toStrictEqual({});
  });
  it('should return {} if list is empty array', () => {
    expect(findLastStudentHavingMinAvg([])).toStrictEqual({});
  });
  it('should return bad student if list student have min avg mark', () => {
    expect(findLastStudentHavingMinAvg(studentList)).toStrictEqual({
      id: 3,
      name: 'John',
      math: 5,
      english: 5,
    });
  });
});



describe('findLastStudentHavingMinAvgV2(studentList)', () => {
    const studentList = [
      { id: 1, name: 'Alice', math: 9, english: 9 },
      { id: 2, name: 'Bob', math: 5, english: 5 },
      { id: 3, name: 'John', math: 5, english: 5 },
    ];
    it('should return {} if list is not an array', () => {
      expect(findLastStudentHavingMinAvgV2('DSADSA')).toStrictEqual({});
    });
    it('should return {} if list is empty array', () => {
      expect(findLastStudentHavingMinAvgV2([])).toStrictEqual({});
    });
    it('should return bad student if list student have min avg mark', () => {
      expect(findLastStudentHavingMinAvgV2(studentList)).toStrictEqual({
        id: 3,
        name: 'John',
        math: 5,
        english: 5,
      });
    });
  });
  