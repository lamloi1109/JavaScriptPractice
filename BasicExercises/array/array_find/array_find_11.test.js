// Tìm student có điểm môn toán lớn nhất đầu tiên
// Viết hàm findStudentHavingHighestMark(studentList) để tìm ra student để điểm môn toán cao nhất.

import { findStudentHavingHighestMark, findStudentHavingHighestMarkV2 } from './array_find_11.js';

describe('findStudentHavingHighestMark(studentList)', () => {
  const studentList = [
    { id: 1, name: 'Alice', math: 9 },
    { id: 2, name: 'Bob', math: 10 },
    { id: 3, name: 'John', math: 10 },
  ];
  it('should return {} if list is not an array', () => {
    expect(findStudentHavingHighestMark('DSADSA')).toStrictEqual({});
  });
  it('should return {} if list is empty array', () => {
    expect(findStudentHavingHighestMark([])).toStrictEqual({});
  });
  it('should return best student if list student have highest mark', () => {
    expect(findStudentHavingHighestMark(studentList)).toStrictEqual({
      id: 2,
      name: 'Bob',
      math: 10,
    });
  });
});


describe('findStudentHavingHighestMarkV2(studentList)', () => {
    const studentList = [
      { id: 1, name: 'Alice', math: 9 },
      { id: 2, name: 'Bob', math: 10 },
      { id: 3, name: 'John', math: 10 },
    ];
    it('should return {} if list is not an array', () => {
      expect(findStudentHavingHighestMarkV2('DSADSA')).toStrictEqual({});
    });
    it('should return {} if list is empty array', () => {
      expect(findStudentHavingHighestMarkV2([])).toStrictEqual({});
    });
    it('should return best student if list student have highest mark', () => {
      expect(findStudentHavingHighestMarkV2(studentList)).toStrictEqual({
        id: 2,
        name: 'Bob',
        math: 10,
      });
    });
  });
  