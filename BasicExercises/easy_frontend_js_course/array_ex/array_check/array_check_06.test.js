import { hasStudent, hasStudentV2, hasStudentV3, hasStudentV4, hasStudentV5 } from "./array_check_06";
// Kiểm tra có student có id nào đó trong mảng không
// Viết hàm hasStudent(studentList, studentId) để kiểm tra trong mảng studentList có student nào có id là
// studentId không?

// studentList is empty array
// studentId is not a number
describe("hasStudent(studentList, studentId)", () => {
  test("should return false when studentList is empty arr", () => {
    expect(hasStudent([], 13)).toBe(false);
  });
  test("should return false when studentId is empty string", () => {
    expect(
      hasStudent(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        ""
      )
    ).toBe(false);
  });
  test("should return false when studentList does not have studentID", () => {
    expect(
      hasStudent(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        3
      )
    ).toBe(false);
  });

  test("should return true when studentList has studentID", () => {
    expect(
      hasStudent(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        1
      )
    ).toBe(true);
  });
});


describe("hasStudentV2(studentList, studentId)", () => {
  test("should return false when studentList is empty arr", () => {
    expect(hasStudentV2([], 13)).toBe(false);
  });
  test("should return false when studentId is empty string", () => {
    expect(
      hasStudentV2(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        ""
      )
    ).toBe(false);
  });
  test("should return false when studentList does not have studentID", () => {
    expect(
      hasStudentV2(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        3
      )
    ).toBe(false);
  });

  test("should return true when studentList has studentID", () => {
    expect(
      hasStudentV2(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        1
      )
    ).toBe(true);
  });
});

describe("hasStudentV3(studentList, studentId)", () => {
  test("should return false when studentList is empty arr", () => {
    expect(hasStudentV3([], 13)).toBe(false);
  });
  test("should return false when studentId is empty string", () => {
    expect(
      hasStudentV3(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        ""
      )
    ).toBe(false);
  });
  test("should return false when studentList does not have studentID", () => {
    expect(
      hasStudentV3(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        3
      )
    ).toBe(false);
  });

  test("should return true when studentList has studentID", () => {
    expect(
      hasStudentV3(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        1
      )
    ).toBe(true);
  });
});

describe("hasStudentV4(studentList, studentId)", () => {
  test("should return false when studentList is empty arr", () => {
    expect(hasStudentV4([], 13)).toBe(false);
  });
  test("should return false when studentId is empty string", () => {
    expect(
      hasStudentV4(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        ""
      )
    ).toBe(false);
  });
  test("should return false when studentList does not have studentID", () => {
    expect(
      hasStudentV4(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        3
      )
    ).toBe(false);
  });

  test("should return true when studentList has studentID", () => {
    expect(
      hasStudentV4(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        1
      )
    ).toBe(true);
  });
});

describe("hasStudentV5(studentList, studentId)", () => {
  test("should return false when studentList is empty arr", () => {
    expect(hasStudentV5([], 13)).toBe(false);
  });
  test("should return false when studentId is empty string", () => {
    expect(
      hasStudentV5(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        ""
      )
    ).toBe(false);
  });
  test("should return false when studentList does not have studentID", () => {
    expect(
      hasStudentV5(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        3
      )
    ).toBe(false);
  });

  test("should return true when studentList has studentID", () => {
    expect(
      hasStudentV5(
        [
          { id: 1, name: "Easy" },
          { id: 2, name: "Frontend" },
        ],
        1
      )
    ).toBe(true);
  });
});
