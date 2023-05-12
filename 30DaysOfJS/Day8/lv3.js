const users = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];
const personAccount = {
  firstName: "Alexddddddddd",
  lastName: "dsa2",
  incomes: [],
  expenses: [],
  totalIncome: () => {},
  totalExpense: () => {},
  accountInfoL: () => {},
  addIncome: () => {},
  addExpense: () => {},
  accountBalance: () => {},
};

// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
// b. Create a function called signIn which allows user to sign in to the application
const characters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

function generateString(length) {
  let result = "";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function signUp(userList, { username, email, password }) {
  if (!Array.isArray(userList) || userList.length === 0)
    throw new Error("Cannot get userList from Server");

  let isValidAccount = !userList.find(
    (user) => user.username === username || user.email === email
  );
  // check username
  // check password
  // chek email
  if (!isValidAccount) return "already an account";
  const _id = generateString(6);
  const isLoggedIn = false;
  const createdAt = new Date();
  userList.push({
    _id,
    username,
    email,
    password,
    createdAt,
    isLoggedIn,
  });
  return "SignUp is successfull";
}
console.log(
  signUp(users, {
    username: "dsadsa",
    email: "dsad@alex.com",
    password: "12345",
  })
);
console.log(users);
function signIn(userList, { username, password }) {
  if (!Array.isArray(userList) || userList.length === 0)
    throw new Error("Cannot get userList from Server");
  let isValidAccount = !!userList.find(
    (user) => user.username === username && user.password === password
  );
  return isValidAccount ? `Success` : "Failed";
}

console.log(signIn(users, { username: "dsadsa", password: "1234d5" }));
// The products array has three elements and each of them has six properties. a. Create a function called rateProduct which rates the product b. Create a function called averageRating which calculate the average rating of a product

function averageRating(products) {
  if (!Array.isArray(products) || products.length === 0) return -1;
  let sum = 0;
  for (let index = 0; index < products.length; index++) {
    const element = products[index];
    for (let index2 = 0; index2 < element.ratings.length; index2++) {
      if (element.ratings[index]?.rate) {
        sum = sum + element.ratings[index]?.rate;
      }
    }
  }

  console.log(sum);
}
averageRating(products);
// Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
// Lile => _id -> likes[_id]
// unLike => likes[]
function likeProduct(productList, userList, productId, userId) {
  if (!Array.isArray(productList) || productList.length === 0) return -1;
  // Sản phẩm có tồn tại hay ko
  let getProduct = productList.find((product) => product._id === productId);
  if (!getProduct) return -1;
  // User có tồn tại hay ko
  isValid = !!userList.find((user) => user._id === userId);
  if (!isValid) return -1;
  // Đã like sản phẩm hay chưa
  for (const iterator of productList) {
    if (iterator._id === getProduct._id) {
      return iterator.likes.includes(userId)
        ? iterator.likes.splice(
            iterator.likes.findIndex((e) => e === userId),
            1
          )
        : iterator.likes.push(userId);
    }
  }
}
console.log(likeProduct(products, users, "eedfcf", "ghderc"));
console.log(products[0]);
console.log(likeProduct(products, users, "eedfcf", "ghderc"));
console.log(products[0]);
