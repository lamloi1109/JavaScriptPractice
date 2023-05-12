import { countWords, countWordsV2, countWordsV3 } from "./string_01";
// Ðếm số từ có trong câu
// Viêt hàm countWords(str) để đếm số từ có trong str.
// Ví dụ: countWords('easy frontend') --> 2

// words is not string
// words.length === 0
// return countWords

describe("countWords(string)", () => {
  test("should return 0 when words are not strings and words.length === 0", () => {
    ["", {}, [], null, undefined].forEach((element) => {
      expect(countWords(element)).toBe(0);
    });
  });
  test("should return 0 when words are not strings and words.length === 0", () => {
    expect(countWords("easy frontend easy")).toBe(3);
  });

  test("should return correct when str have redundant spaces", () => {
    expect(countWords(" easy   frontend    easy   ")).toBe(3);
  });
});

describe("countWordsV2(string)", () => {
  test("should return 0 when words are not strings and words.length === 0", () => {
    ["", {}, [], null, undefined].forEach((element) => {
      expect(countWordsV2(element)).toBe(0);
    });
  });
  test("should return 0 when words are not strings and words.length === 0", () => {
    expect(countWordsV2("easy frontend easy")).toBe(3);
  });
  test("should return correct when str have redundant spaces", () => {
    expect(countWordsV2(" easy   frontend    easy   ")).toBe(3);
  });
});

describe("countWordsV3(string)", () => {
  test("should return 0 when words are not strings and words.length === 0", () => {
    ["", {}, [], null, undefined].forEach((element) => {
      expect(countWordsV3(element)).toBe(0);
    });
  });
  test("should return 0 when words are not strings and words.length === 0", () => {
    expect(countWordsV3("easy frontend easy")).toBe(3);
  });
  test("should return correct when str have redundant spaces", () => {
    expect(countWordsV3(" easy   frontend    easy   ")).toBe(3);
  });
});
