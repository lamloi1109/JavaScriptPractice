const person = {
  firstName: "Asabeneh",
  age: 250,
  country: "Finland",
  city: "Helsinki",
  skills: ["HTML", "CSS", "JS"],
  title: "teacher",
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },
  getPersonInfo: function () {
    return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`;
  },
};

//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

const copyPerson = Object.assign({}, person);
console.log(copyPerson);
const keys = Object.keys(copyPerson);
console.log(keys);
const values = Object.values(copyPerson); // Value in obj  -> arrays[value1, ..., valueN]
console.log(copyPerson, values);
const entries = Object.entries(copyPerson); // -> Array[[key1, value1],...,[keyN, valueN]
console.log(entries);
console.log(copyPerson.hasOwnProperty('name')) // Check key isExist in obj?
console.log(copyPerson.hasOwnProperty('score'))