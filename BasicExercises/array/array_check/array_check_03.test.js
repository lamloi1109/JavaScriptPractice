import { hasEasyFrontend } from "./array_check_03";
// Kiểm tra có từ easy frontend trong mảng không
// Viết hàm hasEasyFrontend(wordList) để kiểm tra xem nội dung tất cả các từ có chứa easy và frontend
// không nhé
// Trả về true nếu:
// Một phần tử có chứa cả 2 từ: "easy" và "frontend"
// Một phần tử chứa từ "easy" và một phần tử khác chứa "frontend"
// Ngược lại trả về false.

// wordList is empty array
// wordList does not have 'easyFronted'
// wordList have 'easyFronted'

describe("hasEasyFrontend(wordList)", () => {
  test("should return false when wordList is empty array", () => {
    expect(hasEasyFrontend([])).toBe(false);
  });
  test("should return false when wordList does not have 'easy', 'Frontend'", () => {
    expect(hasEasyFrontend(["easy", ""])).toBe(false);
  });
  test("should return true when wordList does not have 'easy', 'Frontend'", () => {
    [
      ["easy", "frontend"],
      ["easy frontend", ""],
    ].forEach((numberList) => {
      expect(hasEasyFrontend(numberList)).toBe(true);
    });
  });
  test("should return true when wordList has redundant spaces", () => {
    [
      [" easy    ", "        frontend        "],
      ["          easy frontend", ""],
    ].forEach((numberList) => {
      expect(hasEasyFrontend(numberList)).toBe(true);
    });
  });
});
