// Tìm vị trí của student có id cho trước

import { findStudentById, findStudentByIdV2 } from './array_find_09.js';

// Viết hàm findStudentById(studentList, studentId) để tìm ra vị trí của student có id bằng với studentId.
describe('findStudentById(studentList, studentId)', () => {
  const studentList = [
    { id: 1, name: 'Easy' },
    { id: 2, name: 'Frontend' },
  ];
  it('should return -1 if studentList is not an array', () => {
    expect(findStudentById('DSADSA', 1)).toBe(-1);
  });
  it('should return -1 if studentList is empty array', () => {
    expect(findStudentById([], 1)).toBe(-1);
  });
  it('should return -1 if studentId not found', () => {
    expect(findStudentById(studentList)).toBe(-1);
  });
  it('should return -1 if studentId is not a number', () => {
    expect(findStudentById(studentList, "dasdsa")).toBe(-1);
  });
  it('should return -1 if studentList does have studentId', () => {
    expect(findStudentById(studentList, 3)).toBe(-1);
  });
  
  it('should return student index in List if studentList has studentId', () => {
    expect(findStudentById(studentList, 1)).toBe(0);
  });
});

describe('findStudentByIdV2(studentList, studentId)', () => {
    const studentList = [
      { id: 1, name: 'Easy' },
      { id: 2, name: 'Frontend' },
    ];
    it('should return -1 if studentList is not an array', () => {
      expect(findStudentByIdV2('DSADSA', 1)).toBe(-1);
    });
    it('should return -1 if studentList is empty array', () => {
      expect(findStudentByIdV2([], 1)).toBe(-1);
    });
    it('should return -1 if studentId not found', () => {
      expect(findStudentByIdV2(studentList)).toBe(-1);
    });
    it('should return -1 if studentId is not a number', () => {
      expect(findStudentByIdV2(studentList, "dasdsa")).toBe(-1);
    });
    it('should return -1 if studentList does have studentId', () => {
      expect(findStudentByIdV2(studentList, 3)).toBe(-1);
    });
    
    it('should return student index in List if studentList has studentId', () => {
      expect(findStudentByIdV2(studentList, 1)).toBe(0);
    });
  });
  