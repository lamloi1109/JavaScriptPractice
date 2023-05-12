// Kiểm tra có từ easy frontend trong mảng không
// Viết hàm hasEasyFrontend(wordList) để kiểm tra xem nội dung tất cả các từ có chứa easy và frontend
// không nhé
// Trả về true nếu:
// Một phần tử có chứa cả 2 từ: "easy" và "frontend"
// Một phần tử chứa từ "easy" và một phần tử khác chứa "frontend"
// Ngược lại trả về false.
export function hasEasyFrontend(wordList) {
  return (
    wordList.join("").includes("easy") && wordList.join("").includes("frontend")
  );
}
  