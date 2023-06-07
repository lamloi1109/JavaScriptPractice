import { countries } from './countries_data.js';
const users = [
  {
    name: 'Brook',
    scores: 75,
    skills: ['HTM', 'CSS', 'JS'],
    age: 16,
  },
  {
    name: 'Alex',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'David',
    scores: 75,
    skills: ['HTM', 'CSS'],
    age: 22,
  },
  {
    name: 'John',
    scores: 85,
    skills: ['HTML'],
    age: 25,
  },
  {
    name: 'Sara',
    scores: 95,
    skills: ['HTM', 'CSS', 'JS'],
    age: 26,
  },
  {
    name: 'Martha',
    scores: 80,
    skills: ['HTM', 'CSS', 'JS'],
    age: 18,
  },
  {
    name: 'Thomas',
    scores: 90,
    skills: ['HTM', 'CSS', 'JS'],
    age: 20,
  },
];

// Destructure the countries object print name, capital, population and languages of all countries
// countries.forEach((country) => {
//   const { name, capital, population, languages } = country;
//   console.log(name, capital, population, languages);
// });

const student = {
  name: 'David',
  age: 25,
  skills: {
    frontEnd: [
      { skill: 'HTML', level: 10 },
      { skill: 'CSS', level: 8 },
      { skill: 'JS', level: 8 },
      { skill: 'React', level: 9 },
    ],
    backEnd: [
      { skill: 'Node', level: 7 },
      { skill: 'GraphQL', level: 8 },
    ],
    dataBase: [{ skill: 'MongoDB', level: 7.5 }],
    dataScience: ['Python', 'R', 'D3.js'],
  },
};

let array = Object.entries(student);
console.log(array);
let obj = Object.fromEntries(array);
console.log(obj);
// {
//   frontEnd: {
//     HTML: 10,
//     ...
//   }
// }

// ['frontEnd',[['HTML',10], ['CSS',8], ['JS',8], ['React',9]]]

// function convertArrayToObject(array) {
//   if (!Array.isArray(array) || array.length === 0) {
//     return undefined;
//   }

//   const obj = {};

//   for (const element of array) {

//   }

// }

// A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.

// Write a function called convertArrayToObject which can convert the array to a structure object.

function convertArrayToObject(array) {
  if (!Array.isArray(array) || array.length === 0) {
    return undefined;
  }

  const obj = {};

  for (let index = 0; index < array.length; index++) {
    const key = array[index][0];
    const val = array[index][1];
    if (Array.isArray(val)) {
      obj[key] = convertArrayToObject(val);
    } else {
      obj[key] = val;
    }
  }

  return obj;
}


console.log(convertArrayToObject(array));

// Copy the student object to newStudent without mutating the original object. In the new object add the following ?
// Add Bootstrap with level 8 to the front end skill sets
// Add Express with level 9 to the back end skill sets
// Add SQL with level 8 to the data base skill sets
// Add SQL without level to the data science skill sets

// function cloneArray(array) {
//   const newArray = [];

//   for (const element of array) {
//     if (Array.isArray(element)) {
//       newArray.push(cloneArray(element));
//     } else {
//       newArray.push(element);
//     }
//   }

//   return newArray;
// }

// function cloneObj(obj) {
//   const newObj = {};

//   for (const key in obj) {
//     if (typeof obj[key] === 'object') {
//       console.log(key);

//       if (Array.isArray(obj[key])) {
//         newObj[key] = cloneArray(obj[key]);
//         // newObj[key] = [...obj[key]];
//       } else {
//         newObj[key] = cloneObj(obj[key]);
//         // newObj[key] = { ...obj[key] };
//       }
//     } else {
//       newObj[key] = obj[key];
//     }
//   }

//   return newObj;
// }

// const newStudent = cloneObj(student);

// newStudent.skills.frontEnd.push({ skill: 'Bootstrap', level: 8 });
// newStudent.skills.backEnd.push({ skill: 'Express', level: 9 });
// newStudent.skills.dataBase.push({ skill: 'SQL', level: 8 });
// newStudent.skills.dataScience.push('SQL');
// console.log(newStudent);
// console.log(student);
// console.log(student.skills === newStudent.skills);
