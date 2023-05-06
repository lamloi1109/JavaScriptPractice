// Ðếm số lượng email có trong câu
// Viết hàm countEmails(str) để đếm số lượng email có trong str
// Email là một chuỗi có chứa ký tự @ ở giữa và không phải ở cuối từ.
// Email có thể có một số domain như: .com, .vn, .com.vn. Domain sẽ xuất hiện ở cuối từ.
// Email có định dạng là X@Y. Trong đó X có độ dài ít nhất 3 ký tự, Y có độ dài ít nhất 3 ký tự (ko tính
// phần domain nêu trên)
// Trả về số lượng email tìm thấy từ chuỗi truyền vào.

// str is not a string
// str length is 0
// string has email -> email number
// string not has email ->

// CHia nhỏ bài toán -> isValidEmail

// Email phải có @
// Email phải có đuôi .
// Email không chứa các ký tự đặc biệt khác ngoài @
// Email phải có ký tự trước @

// Cấu trúc email: nameEmail@domainName.domains

// Kiểm tra phía trước @
// Kiểm tra phía sau @

// Email is not a string
// Email length is 0

function isValidCharacter(character) {
  if (typeof character !== "string" || character.length === 0) return false;
  const characterList =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let index = 0; index < character.length; index++) {
    const element = character[index];
    if (!characterList.includes(element)) return false;
  }
  return true;
}

function isValidEmail(email) {
  if (typeof email !== "string" || email.length === 0) return false;

  if (!email.includes("@") || !email.includes(".")) return false;

  const index = email.indexOf("@");
  // Lọc ra các thành phần của email sau đó tách @ và . bằng split
  const nameEmail = [email.slice(0, index)];
  const domains = email.slice(index + 1, email.length).split(".");
  // Nối lại thành 1 mảng duy nhất để kiểm tra => Bài toán trở thành việc check xem str có phù hợp độ dài hay k và str có ký tự db hay ko
  const wordList = nameEmail.concat(domains);

  for (let index = 0; index < wordList.length; index++) {
    const element = wordList[index];
    if (index <= 1 && element.length < 3) return false;

    if (index > 1 && element.length < 2) return false;

    if (!isValidCharacter(element)) return false;
  }

  return true;
}

export function countEmails(str) {
  if (typeof str !== "string") return -1;
  if (str.length === 0) return 0;

  let strSplit = str.split(" ");
  let countEmail = 0;
  for (let index = 0; index < strSplit.length; index++) {
    const element = strSplit[index];
    if (isValidEmail(element)) countEmail++;
  }
  return countEmail;
}
