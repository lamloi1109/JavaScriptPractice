const users = {
  Alex: {
    email: "alex@alex.com",
    skills: [],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

// Find the person who has many skills in the users object.
function findPersonByKeyWord(keyWord) {
  if (typeof keyWord !== "string") return undefined;

  let persons = [];
  for (const user in users) {
    if (!keyWord in users[user]) return undefined;
    let currUser = users[user];
    if (currUser[keyWord].length > 0) persons.push([user, users[user]]);
  }
  return persons;
}

console.log(findPersonByKeyWord("skills"));

// Count logged in users, count users having greater than equal to 50 points from the following object.
function countUser(userList, key, callBackFn) {
  if (typeof userList !== "object" || Object.keys(userList).length === 0)
    return -1;
  let count = 0;
  for (const user in userList) {
    if (!key in userList[user]) return -1;

    if (callBackFn(userList[user][key])) count++;
  }
  return count;
}
console.log(countUser(users, "points", (key) => key >= 50));
console.log(countUser(users, "isLoggedIn", (key) => !!key));

// Find people who are MERN stack developer from the users object
function findPeople(userList, callBackFn) {
  if (typeof userList !== "object" || Object.keys(userList).length === 0)
    return -1;
  let users = [];
  for (const user in userList) {
    if (userList[user].skills.length < 4) continue;
    let valid = false;
    ["MongoDB", "Express", "React", "Node"].forEach((e) => {
      console.log(e, userList[user].skills);
      userList[user].skills.includes(e) ? (valid = true) : (valid = false);
    });
    valid && users.push([user, userList[user]]);
  }
  return users;
}
console.log(findPeople(users));
// Set your name in the users object without modifying the original users object

// Get all keys or properties of users object
console.log(Object.keys(users));
console.log(Object.entries(users));

// Get all the values of users object
console.log(Object.values(users));

// Use the countries object to print a country name, capital, populatoins and languages.
