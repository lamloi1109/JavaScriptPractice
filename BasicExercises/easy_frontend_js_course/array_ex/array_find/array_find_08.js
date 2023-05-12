// Tìm url cuối cùng trong mảng
// Viết hàm findLastUrl(strList) để tìm ra URL cuối cùng có trong mảng strList
// Ðiều kiện cho một URL hợp lệ:
// URL có định dạng: protocol://domain.com/path-name
// URL có thể bắt đầu bằng protocol như: http, https, ws hoặc wss
// Domain có thể là .com, .com.vn hoặc .vn
// Phần tên domain phải có ít nhất 3 ký tự, như abc.com, chứ ab.com là không hợp lệ

function isValidCharacter(str) {
  const regExp = new RegExp(/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g);
  return !regExp.test(str);
}

function isURL(url) {
  const protocols = ['https:', 'http:', 'ws:', 'wss:'];
  const protocol = url.split('/')[0];
  if (!protocols.includes(protocol)) {
    return false;
  }
  const domainNames = url.split('/')[2].split('.');

  if (!domainNames.includes('com') && !domainNames.includes('vn')) {
    return false;
  }

  for (let index = 0; index < domainNames.length; index++) {
    const element = domainNames[index];
    if (element !== 'com' && element !== 'vn' && element.length < 3) {
      return false;
    }
    if (!isValidCharacter(element)) return false;
  }

  return true;
}

export function findLastUrl(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return undefined;
  let lastURL;
  for (let index = 0; index < strList.length; index++) {
    const element = strList[index];
    if (isURL(element)) lastURL = element;
  }
  return lastURL;
}

export function findLastUrlV2(strList) {
  if (!Array.isArray(strList) || strList.length === 0) return undefined;

  return strList.reverse().find(isURL);
}
