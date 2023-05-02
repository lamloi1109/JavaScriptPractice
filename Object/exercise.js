// Viết hàm clone OBJ mà không dùng spread operators
function cloneObject(obj) {
  if (typeof obj !== "object" || Object.keys(obj).length === 0) {
    return {};
  }
  let newObj = {};
  for (const key in obj) {
    newObj[key] =
      typeof obj[key] === "object" ? cloneObject(obj[key]) : obj[key];
  }
  return newObj;
}

let obj = {
  name: "Loi",
  obj2: {
    value: "đasa",
  },
};

let newObj = cloneObject(obj);

console.log(obj, newObj);

newObj.obj2.value = "dsadsadsadsads";
console.log(obj, newObj);

// Kiểm tra xem 2 obj có bằng nhau hay không
function compareObj(obj1, obj2) {
  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    Object.keys(obj1).length === 0 ||
    Object.keys(obj2).length === 0 ||
    Object.keys(obj1).length !== Object.keys(obj2).length
  ) {
    return false;
  }

  for (const key in obj1) {
    // Kiểm tra xem key của obj1 có trong obj2 hay không
    if (!key in obj2) return false;
    // So sánh kiểu của giá trị
    if (typeof obj1[key] !== typeof obj2[key]) {
      return false;
    }
    // Nếu như giá trị của key là obj
    if (typeof obj1[key] === "object" && !compareObj(obj1[key], obj2[key]))
      return false;
    // so sánh
    if (typeof obj1[key] !== "object" && obj1[key] !== obj2[key]) return false;
  }
  return true;
}

let obj4 = {
  a: "abc",
  b: "123",
  c: "Dsad",
  d: {
    e: "dsad",
  },
};
let obj3 = {
  a: "abc",
  b: "123",
  c: "Dsad",
  d: {
    e: "dsade",
  },
};
const result = compareObj(obj4, obj3);
console.log(result);
