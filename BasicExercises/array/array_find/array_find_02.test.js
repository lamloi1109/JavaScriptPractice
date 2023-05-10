import { findLongestWord } from "./array_find_02";
// Tìm từ dài nhất nhưng nhỏ hơn 5 trong mảng
// Viết hàm findLongestWord(wordList) để tìm ra từ dài nhất trong mảng wordList
// Từ cần tìm có độ dài không quá 5
// Từ cần tìm không có chứa khoảng trắng (space)
// Trường hợp không tìm thấy từ thoả điều kiện thì trả về empty string

// wordList is not an array
// wordList is empty array
// word.length > 5
// word.includes(' ') -> true
// word.length < 5 &&  word.includes(' ') -> false

describe("findLongestWord(wordList)", () => {
  test(`should return '' if wordList is not an array `, () => {
    expect(findLongestWord("")).toBe("");
  });
  test(`should return '' if wordList is empty array `, () => {
    expect(findLongestWord([])).toBe("");
  });

  test(`should return '' if wordList does not have word.length > 5 `, () => {
    expect(findLongestWord(["superIdol, superMannnn"])).toBe("");
  });

  test(`should return '' if wordList does not have word !== '' `, () => {
    expect(findLongestWord(["super ", "cool dsadsad"])).toBe("");
  });
  test(`should return correct if wordList has word length < 5 and it not include '' `, () => {
    expect(findLongestWord(["super", "cool"])).toBe('super');
  });
});
