// Tìm tất cả student có điểm toán nhỏ hơn 5
// Viết hàm findAllStudents(studentList) để tìm ra tất cả student có điểm toán nhỏ hơn 5

import { findAllStudents, findAllStudentsV2 } from './array_filter_07.js';

describe('findAllStudents(studentList)', () => {
  const studentList = [
    { id: 1, name: 'Alice', math: 9 },
    { id: 2, name: 'Bob', math: 4 },
    { id: 3, name: 'John', math: 0 },
  ];
  it('should return [] if list is not an array', () => {
    expect(findAllStudents('DSa')).toStrictEqual([]);
  });
  it('should return [] if list is empty array', () => {
    expect(findAllStudents([])).toStrictEqual([]);
  });
  it('should return [] if list does have student math < 5', () => {
    expect(findAllStudents([])).toStrictEqual([]);
  });
  it('should return correct list if list has student math < 5', () => {
    expect(findAllStudents(studentList)).toStrictEqual([
      { id: 2, name: 'Bob', math: 4 },
      { id: 3, name: 'John', math: 0 },
    ]);
  });
});


describe('findAllStudentsV2(studentList)', () => {
    const studentList = [
      { id: 1, name: 'Alice', math: 9 },
      { id: 2, name: 'Bob', math: 4 },
      { id: 3, name: 'John', math: 0 },
    ];
    it('should return [] if list is not an array', () => {
      expect(findAllStudentsV2('DSa')).toStrictEqual([]);
    });
    it('should return [] if list is empty array', () => {
      expect(findAllStudentsV2([])).toStrictEqual([]);
    });
    it('should return [] if list does have student math < 5', () => {
      expect(findAllStudentsV2([])).toStrictEqual([]);
    });
    it('should return correct list if list has student math < 5', () => {
      expect(findAllStudentsV2(studentList)).toStrictEqual([
        { id: 2, name: 'Bob', math: 4 },
        { id: 3, name: 'John', math: 0 },
      ]);
    });
  });
  