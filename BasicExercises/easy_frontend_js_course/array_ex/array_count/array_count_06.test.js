// Ðếm số lượng students có điểm trung bình lớn hơn hoặc bằng avgMark
// Viết hàm countStudents(studentList, avgMark) để đếm số lượng student có điểm trung bình môn lớn hơn

import { countStudents, countStudentsV2, countStudentsV3 } from './array_count_06.js';

// hoặc bằng avgMark
describe('countStudents(studentList, avgMark)', () => {
  const studentList = [
    { id: 1, name: 'Alice', marks: { math: 8 } },
    { id: 2, name: 'Bob', marks: { math: 9 } },
  ];
  it('should return 0 if list is not an array', () => {
    expect(countStudents(null, 1)).toBe(0);
    expect(countStudents(undefined, 1)).toBe(0);
    expect(countStudents(123, 1)).toBe(0);
    expect(countStudents('', 1)).toBe(0);
    expect(countStudents({}, 1)).toBe(0);
  });

  it('should return 0 if list is empty array', () => {
    expect(countStudents([], 1)).toBe(0);
  });

  it('should return 0 if avgMark is not a number', () => {
    expect(countStudents(studentList, null)).toBe(0);
    expect(countStudents(studentList, undefined)).toBe(0);
    expect(countStudents(studentList, {})).toBe(0);
    expect(countStudents(studentList, [])).toBe(0);
    expect(countStudents(studentList, '')).toBe(0);
  });

  it('should return 0 if avgMark < 0', () => {
    expect(countStudents([{ id: 1, name: 'Alice', marks: { math: 5, english: 6 } }], -1)).toBe(0);
  });

  it('should return correct count number student if lis has student avg < avgMark', () => {
    expect(countStudents([{ id: 1, name: 'Alice', marks: { math: 5, english: 6 } }], 7)).toBe(0);
  });

  it('should return correct count number student if lis has student avg >= avgMark', () => {
    expect(countStudents(studentList, 7)).toBe(2);
    expect(
      countStudents(
        [
          { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
          { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
        ],
        7
      )
    ).toBe(1);
  });
});

describe('countStudentsV2(studentList, avgMark)', () => {
    const studentList = [
      { id: 1, name: 'Alice', marks: { math: 8 } },
      { id: 2, name: 'Bob', marks: { math: 9 } },
    ];
    it('should return 0 if list is not an array', () => {
      expect(countStudentsV2(null, 1)).toBe(0);
      expect(countStudentsV2(undefined, 1)).toBe(0);
      expect(countStudentsV2(123, 1)).toBe(0);
      expect(countStudentsV2('', 1)).toBe(0);
      expect(countStudentsV2({}, 1)).toBe(0);
    });
  
    it('should return 0 if list is empty array', () => {
      expect(countStudentsV2([], 1)).toBe(0);
    });
  
    it('should return 0 if avgMark is not a number', () => {
      expect(countStudentsV2(studentList, null)).toBe(0);
      expect(countStudentsV2(studentList, undefined)).toBe(0);
      expect(countStudentsV2(studentList, {})).toBe(0);
      expect(countStudentsV2(studentList, [])).toBe(0);
      expect(countStudentsV2(studentList, '')).toBe(0);
    });
  
    it('should return 0 if avgMark < 0', () => {
      expect(countStudentsV2([{ id: 1, name: 'Alice', marks: { math: 5, english: 6 } }], -1)).toBe(0);
    });
  
    it('should return correct count number student if lis has student avg < avgMark', () => {
      expect(countStudentsV2([{ id: 1, name: 'Alice', marks: { math: 5, english: 6 } }], 7)).toBe(0);
    });
  
    it('should return correct count number student if lis has student avg >= avgMark', () => {
      expect(countStudentsV2(studentList, 7)).toBe(2);
      expect(
        countStudentsV2(
          [
            { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
            { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
          ],
          7
        )
      ).toBe(1);
    });
  });

  describe('countStudentsV3(studentList, avgMark)', () => {
    const studentList = [
      { id: 1, name: 'Alice', marks: { math: 8 } },
      { id: 2, name: 'Bob', marks: { math: 9 } },
    ];
    it('should return 0 if list is not an array', () => {
      expect(countStudentsV3(null, 1)).toBe(0);
      expect(countStudentsV3(undefined, 1)).toBe(0);
      expect(countStudentsV3(123, 1)).toBe(0);
      expect(countStudentsV3('', 1)).toBe(0);
      expect(countStudentsV3({}, 1)).toBe(0);
    });
  
    it('should return 0 if list is empty array', () => {
      expect(countStudentsV3([], 1)).toBe(0);
    });
  
    it('should return 0 if avgMark is not a number', () => {
      expect(countStudentsV3(studentList, null)).toBe(0);
      expect(countStudentsV3(studentList, undefined)).toBe(0);
      expect(countStudentsV3(studentList, {})).toBe(0);
      expect(countStudentsV3(studentList, [])).toBe(0);
      expect(countStudentsV3(studentList, '')).toBe(0);
    });
  
    it('should return 0 if avgMark < 0', () => {
      expect(countStudentsV3([{ id: 1, name: 'Alice', marks: { math: 5, english: 6 } }], -1)).toBe(0);
    });
  
    it('should return correct count number student if lis has student avg < avgMark', () => {
      expect(countStudentsV3([{ id: 1, name: 'Alice', marks: { math: 5, english: 6 } }], 7)).toBe(0);
    });
  
    it('should return correct count number student if lis has student avg >= avgMark', () => {
      expect(countStudentsV3(studentList, 7)).toBe(2);
      expect(
        countStudentsV3(
          [
            { id: 1, name: 'Alice', marks: { math: 5, english: 6 } },
            { id: 2, name: 'Bob', marks: { math: 9, english: 8 } },
          ],
          7
        )
      ).toBe(1);
    });
  });