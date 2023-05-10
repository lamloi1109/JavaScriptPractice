// Tìm từ dài nhất nhưng nhỏ hơn 5 trong mảng
// Viết hàm findLongestWord(wordList) để tìm ra từ dài nhất trong mảng wordList
// Từ cần tìm có độ dài không quá 5
// Từ cần tìm không có chứa khoảng trắng (space)
// Trường hợp không tìm thấy từ thoả điều kiện thì trả về empty string

export function findLongestWord(wordList) {
  if (!Array.isArray(wordList) || wordList.length === 0) return "";

  // Method sort
  // Nếu kết quả của callBackFn < 0 thì [b , a]
  // Nếu kết quả của callBackFn > 0 thì [a, b]
  // Nếu kết quả của callBackFn === 0 thì giữ nguyên
  // nullish coalescing -> đi tìm đứa khác undefined và null đầu tiên và trả về
  // Trong trường hợp filter trả vể empty array -> sort trả về empty array (Mảng rỗng sắp xếp cũng ra rỗng)
  // [][0] -> undefined
  // undefined ?? "" -> ""
  return (
    wordList
      .filter((word) => word.length <= 5 && !word.includes(" "))
      .sort((a, b) => {
        // a: cool - b: super
        // 4 < 5
        if (a.length > b.length) return -1;
        if (a.length === b.length) return 0;
        return 1;
      })[0] ?? ""
  );
}
