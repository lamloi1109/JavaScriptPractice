import { hasAlice, hasAliceV2, hasAliceV3, hasAliceV4, hasAliceV5 } from "./array_check_07";
// Kiểm tra có student giới tính là Nữ tên Alice không
// Viết hàm hasAlice(studentList) để kiểm tra trong mảng studentList có student nữ nào tên là Alice không?
// (không phân biệt hoa thường)

describe("hasAlice(studentList)", () => {
  const studentList = [
    { id: 1, name: "Alice", gender: "male" },
    { id: 2, name: "aliCE", gender: "female" },
    { id: 3, name: "Easy Frontend", gender: "male" },
    ,
  ];
  it("should return false when studentList is empty", () => {
    expect(hasAlice([])).toBe(false);
  });
  it("should return false if studentList does not have student name is alice", () => {
    expect(hasAlice([{ id: 3, name: "Easy Frontend", gender: "male" }])).toBe(
      false
    );
  });

  it("should return false if alice gender is female", () => {
    expect(
      hasAlice([
        { id: 2, name: "aliCE", gender: "female" },
        {
          id: 3,
          name: "Easy Frontend",
          gender: "male",
        },
      ])
    ).toBe(false);
  });

  it("should return correct if studentList has student name is alice and alice gender is male", () => {
    expect(hasAlice(studentList)).toBe(true);
  });
});

describe("hasAliceV2(studentList)", () => {
  const studentList = [
    { id: 1, name: "Alice", gender: "male" },
    { id: 2, name: "aliCE", gender: "female" },
    { id: 3, name: "Easy Frontend", gender: "male" },
    ,
  ];
  it("should return false when studentList is empty", () => {
    expect(hasAliceV2([])).toBe(false);
  });
  it("should return false if studentList does not have student name is alice", () => {
    expect(hasAliceV2([{ id: 3, name: "Easy Frontend", gender: "male" }])).toBe(
      false
    );
  });

  it("should return false if alice gender is female", () => {
    expect(
      hasAliceV2([
        { id: 2, name: "aliCE", gender: "female" },
        {
          id: 3,
          name: "Easy Frontend",
          gender: "male",
        },
      ])
    ).toBe(false);
  });

  it("should return correct if studentList has student name is alice and alice gender is male", () => {
    expect(hasAliceV2(studentList)).toBe(true);
  });
});

describe("hasAliceV3(studentList)", () => {
  const studentList = [
    { id: 1, name: "Alice", gender: "male" },
    { id: 2, name: "aliCE", gender: "female" },
    { id: 3, name: "Easy Frontend", gender: "male" },
    ,
  ];
  it("should return false when studentList is empty", () => {
    expect(hasAliceV3([])).toBe(false);
  });
  it("should return false if studentList does not have student name is alice", () => {
    expect(hasAliceV3([{ id: 3, name: "Easy Frontend", gender: "male" }])).toBe(
      false
    );
  });

  it("should return false if alice gender is female", () => {
    expect(
      hasAliceV3([
        { id: 2, name: "aliCE", gender: "female" },
        {
          id: 3,
          name: "Easy Frontend",
          gender: "male",
        },
      ])
    ).toBe(false);
  });

  it("should return correct if studentList has student name is alice and alice gender is male", () => {
    expect(hasAliceV3(studentList)).toBe(true);
  });
});
describe("hasAliceV4(studentList)", () => {
  const studentList = [
    { id: 1, name: "Alice", gender: "male" },
    { id: 2, name: "aliCE", gender: "female" },
    { id: 3, name: "Easy Frontend", gender: "male" },
    ,
  ];
  it("should return false when studentList is empty", () => {
    expect(hasAliceV4([])).toBe(false);
  });
  it("should return false if studentList does not have student name is alice", () => {
    expect(hasAliceV4([{ id: 3, name: "Easy Frontend", gender: "male" }])).toBe(
      false
    );
  });

  it("should return false if alice gender is female", () => {
    expect(
      hasAliceV4([
        { id: 2, name: "aliCE", gender: "female" },
        {
          id: 3,
          name: "Easy Frontend",
          gender: "male",
        },
      ])
    ).toBe(false);
  });

  it("should return correct if studentList has student name is alice and alice gender is male", () => {
    expect(hasAliceV4(studentList)).toBe(true);
  });
});

describe("hasAliceV5(studentList)", () => {
  const studentList = [
    { id: 1, name: "Alice", gender: "male" },
    { id: 2, name: "aliCE", gender: "female" },
    { id: 3, name: "Easy Frontend", gender: "male" },
    ,
  ];
  it("should return false when studentList is empty", () => {
    expect(hasAliceV5([])).toBe(false);
  });
  it("should return false if studentList does not have student name is alice", () => {
    expect(hasAliceV5([{ id: 3, name: "Easy Frontend", gender: "male" }])).toBe(
      false
    );
  });

  it("should return false if alice gender is female", () => {
    expect(
      hasAliceV5([
        { id: 2, name: "aliCE", gender: "female" },
        {
          id: 3,
          name: "Easy Frontend",
          gender: "male",
        },
      ])
    ).toBe(false);
  });

  it("should return correct if studentList has student name is alice and alice gender is male", () => {
    expect(hasAliceV5(studentList)).toBe(true);
  });
});