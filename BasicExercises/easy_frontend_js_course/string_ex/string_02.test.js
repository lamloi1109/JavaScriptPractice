import {
  statisticsWords,
  statisticsWordsV2,
  statisticsWordsV3,
} from "./string_02";
// Thống kê số lượng từ trong câu
// Viết hàm statisticsWords(str) để đếm tần số xuất hiện của môi từ trong str.
// Trả về một object với:
// key là từ có xuất hiện trong str
// value là số lần xuất hiện của key

// statisticsWords('easy frontend easy')
// should return an object like this:
// { easy: 2, frontend: 1 }

// words are not string
// words.length === 0
// return obj

describe("statisticsWords(str)", () => {
  test("should return {} when str is not a string and length of string is 0 ", () => {
    [[], "", {}, null, undefined].forEach((element) => {
      expect(statisticsWords(element)).toStrictEqual({});
    });
  });

  test("should return correct statistics when str doesn't have redundant spaces", () => {
    expect(statisticsWords("easy frontend easy")).toStrictEqual({
      easy: 2,
      frontend: 1,
    });
  });

  test("should return correct statistics when str has redundant spaces", () => {
    expect(statisticsWords(" easy   frontend    easy   ")).toStrictEqual({
      easy: 2,
      frontend: 1,
    });
  });
});

describe("statisticsWordsV2(str)", () => {
  test("should return {} when str is not a string and length of string is 0 ", () => {
    [[], "", {}, null, undefined].forEach((element) => {
      expect(statisticsWordsV2(element)).toStrictEqual({});
    });
  });

  test("should return correct statistics when str doesn't have redundant spaces", () => {
    expect(statisticsWordsV2("easy frontend easy")).toStrictEqual({
      easy: 2,
      frontend: 1,
    });
  });

  test("should return correct statistics when str has redundant spaces", () => {
    expect(statisticsWordsV2(" easy   frontend    easy   ")).toStrictEqual({
      easy: 2,
      frontend: 1,
    });
  });
});

describe("statisticsWordsV3(str)", () => {
  test("should return {} when str is not a string and length of string is 0 ", () => {
    [[], "", {}, null, undefined].forEach((element) => {
      expect(statisticsWordsV3(element)).toStrictEqual({});
    });
  });

  test("should return correct statistics when str doesn't have redundant spaces", () => {
    expect(statisticsWordsV3("easy frontend easy")).toStrictEqual({
      easy: 2,
      frontend: 1,
    });
  });

  test("should return correct statistics when str has redundant spaces", () => {
    expect(statisticsWordsV3(" easy   frontend    easy   ")).toStrictEqual({
      easy: 2,
      frontend: 1,
    });
  });
});
