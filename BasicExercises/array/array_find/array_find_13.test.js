// Tìm student đầu tiên có tất cả điểm >= 5, trừ một môn
// Viết hàm findStudent(studentList) để tìm ra student đầu tiên có trong mảng có tất cả các điểm đều lớn
// hơn hoặc bằng 5, tuy nhiên có một môn dưới 5.

import { findStudent, findStudentV2 } from './array_find_13.js';

describe('findStudent(studentList)', () => {
  const studentList = [
    { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
    { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
    { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
    { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
  ];
  
  it('should return {} if list is not an array', () => {
    expect(findStudent('DSADSA')).toStrictEqual({});
  });

  it('should return {} if list is empty array', () => {
    expect(findStudent([])).toStrictEqual({});
  });

  it('should return {} if list does not have student mark < 5', () => {
    expect(
      findStudent([
        { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
        { id: 4, name: 'Sarah', marks: { math: 8, english: 8, programming: 10 } },
      ])
    ).toStrictEqual({});
  });

  it('should return first student has only mark < 5', () => {
    expect(findStudent(studentList)).toStrictEqual({
      id: 3,
      name: 'John',
      marks: { math: 4, english: 7, programming: 9 },
    });
  });
});

describe('findStudentV2(studentList)', () => {
    const studentList = [
      { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
      { id: 2, name: 'Bob', marks: { math: 2, english: 3, programming: 5 } },
      { id: 3, name: 'John', marks: { math: 4, english: 7, programming: 9 } },
      { id: 4, name: 'Sarah', marks: { math: 2, english: 8, programming: 10 } },
    ];
    it('should return {} if list is not an array', () => {
      expect(findStudentV2('DSADSA')).toStrictEqual({});
    });
  
    it('should return {} if list is empty array', () => {
      expect(findStudentV2([])).toStrictEqual({});
    });
  
    it('should return {} if list does not have student mark < 5', () => {
      expect(
        findStudentV2([
          { id: 1, name: 'Alice', marks: { math: 9, english: 9, programming: 5 } },
          { id: 4, name: 'Sarah', marks: { math: 8, english: 8, programming: 10 } },
        ])
      ).toStrictEqual({});
    });
  
    it('should return first student has only mark < 5', () => {
      expect(findStudentV2(studentList)).toStrictEqual({
        id: 3,
        name: 'John',
        marks: { math: 4, english: 7, programming: 9 },
      });
    });
  });