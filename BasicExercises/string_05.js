// Ðếm số lượng url có trong câu
// Viết hàm countURLs(str) để đếm số lượng URLs có trong câu.
// URL có định dạng: protocol://domain.com/path-name
// URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
// Domain có thể là .com, .com.vn hoặc .vn
// Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ
// Trả về số lượng URLs tìm thấy trong câu

// str is not a string return -1
// str length is 0 return 0
// protocol://domain.com/path-name
// str has not a URL -> return 0
// str return number URL
// protocol in [http, https, ws, wss]
// domainName && domain not has speacial character

// function splitURL -> [protocol, domailName, domain,pathName]
// isURL
// isValidCharacter

function isValidCharacter(str) {
  // check args
  if (typeof str !== "string" || str.length === 0) return false;

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (!characters.includes(element)) return false;
  }
  return true;
}

function isURL(url) {
  if (typeof url !== "string" || url.length === 0) return false;

  if (!url.includes("/") || !url.includes(".")) {
    return false;
  }

  const protocols = ["http://", "https://", "ws://", "wss://"];

  let wordList = url.split("/");

  const protocol = wordList[0] + "//";

  if (!protocols.includes(protocol)) {
    return false;
  }

  const domain = wordList[2].split(".");

  const pathName =
    wordList.length >= 3 ? wordList.slice(3, wordList.length) : "";

  wordList = [...domain];

  if (wordList[0].length < 3) {
    return false;
  }

  for (let index = 1; index < wordList.length; index++) {
    const element = wordList[index];

    if (element.length < 2) {
      return false;
    }

    if (!isValidCharacter(element)) return false;
  }

  return true;
}

export function countURLs(str) {
  if (typeof str !== "string") return -1;

  if (str.length === 0) return 0;

  let count = 0;

  str = str.split(" ");

  for (let index = 0; index < str.length; index++) {
    const element = str[index];
    if (isURL(element)) count++;
  }
  return count;
}
