import {
  statisticsCharacters,
  statisticsCharactersV2,
  statisticsCharactersV3,
  statisticsCharactersV4,
} from "./string_03";
// Thống kê ký tự có trong câu
// Viết hàm statisticsCharacters(str) để thống kê số lượng ký tự có trong câu.
// Trả về một object với:
// key là character có xuất hiện trong str. Nếu là khoảng trắng thì key="space".
// value là số lần xuất hiện của

describe("statisticsCharacters(str)", () => {
  test("should return {} when str is not a string and length of string is 0 ", () => {
    [[], "", {}, null, undefined].forEach((element) => {
      expect(statisticsCharacters(element)).toStrictEqual({});
    });
  });

  test("should return {...} when str is a string and length of string is not 0 ", () => {
    expect(statisticsCharacters("aa b cc ")).toStrictEqual({
      a: 2,
      b: 1,
      c: 2,
      space: 3,
    });
  });
});

describe("statisticsCharactersV2(str)", () => {
  test("should return {} when str is not a string and length of string is 0 ", () => {
    [[], "", {}, null, undefined].forEach((element) => {
      expect(statisticsCharactersV2(element)).toStrictEqual({});
    });
  });

  test("should return {...} when str is a string and length of string is not 0 ", () => {
    expect(statisticsCharactersV2("aa b cc ")).toStrictEqual({
      a: 2,
      b: 1,
      c: 2,
      space: 3,
    });
  });
});

describe("statisticsCharactersV3(str)", () => {
  test("should return {} when str is not a string and length of string is 0 ", () => {
    [[], "", {}, null, undefined].forEach((element) => {
      expect(statisticsCharactersV3(element)).toStrictEqual({});
    });
  });

  test("should return {...} when str is a string and length of string is not 0 ", () => {
    expect(statisticsCharactersV3("aa b cc ")).toStrictEqual({
      a: 2,
      b: 1,
      c: 2,
      space: 3,
    });
  });
});

describe("statisticsCharactersV4(str)", () => {
  test("should return {} when str is not a string and length of string is 0 ", () => {
    [[], "", {}, null, undefined].forEach((element) => {
      expect(statisticsCharactersV4(element)).toStrictEqual({});
    });
  });

  test("should return {...} when str is a string and length of string is not 0 ", () => {
    expect(statisticsCharactersV4("aa b cc ")).toStrictEqual({
      a: 2,
      b: 1,
      c: 2,
      space: 3,
    });
  });
});
