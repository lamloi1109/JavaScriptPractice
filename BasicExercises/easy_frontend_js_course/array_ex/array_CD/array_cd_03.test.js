// Xoá một student có id cho trước
// Viết hàm removeStudentById(studentList, studentId) để remove student có id là studentId ra khỏi
// mảng studentList và trả về mảng mới

import { removeStudentById, removeStudentByIdV2 } from './array_cd_03.js';

describe('removeStudentById(studentList, studentId)', () => {
  const studentList = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
  ];
  it('should return [] if list is not an array', () => {
    expect(removeStudentById(null, 1)).toEqual([]);
    expect(removeStudentById(undefined, 1)).toEqual([]);
    expect(removeStudentById({}, 1)).toEqual([]);
    expect(removeStudentById('', 1)).toEqual([]);
    expect(removeStudentById(123, 1)).toEqual([]);
  });
  it('should return [] if list is empty ', () => {
    expect(removeStudentById([], 1)).toEqual([]);
  });

  it('should return list if list does not have studentId ', () => {
    expect(removeStudentById(studentList, 3)).toEqual(studentList);
  });

  it('should return new arr after remove student by id', () => {
    expect(removeStudentById(studentList, 2)).toEqual([{ id: 1, name: 'Alice' }]);
  });
});

describe('removeStudentByIdV2(studentList, studentId)', () => {
    const studentList = [
      { id: 1, name: 'Alice' },
      { id: 2, name: 'Bob' },
    ];
    it('should return [] if list is not an array', () => {
      expect(removeStudentByIdV2(null, 1)).toEqual([]);
      expect(removeStudentByIdV2(undefined, 1)).toEqual([]);
      expect(removeStudentByIdV2({}, 1)).toEqual([]);
      expect(removeStudentByIdV2('', 1)).toEqual([]);
      expect(removeStudentByIdV2(123, 1)).toEqual([]);
    });
    it('should return [] if list is empty ', () => {
      expect(removeStudentByIdV2([], 1)).toEqual([]);
    });
  
    it('should return list if list does not have studentId ', () => {
      expect(removeStudentByIdV2(studentList, 3)).toEqual(studentList);
    });
  
    it('should return new arr after remove student by id', () => {
      expect(removeStudentByIdV2(studentList, 2)).toEqual([{ id: 1, name: 'Alice' }]);
    });
  });