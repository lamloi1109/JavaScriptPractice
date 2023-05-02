// Create an empty object called dog
const dog = {};
// Print the the dog object on the console
console.log(dog);
// Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
dog.name = "TIen";
dog.legs = 2;
dog.age = 20;
dog.bark = "Con cho nayyyy";

// Get name, legs, color, age and bark value from the dog object
const { name, legs, age, bark } = dog;
console.log(name, legs, age, bark);
// Set new properties the dog object: breed, getDogInfo
dog.breed = "Male";
dog.getInfor = function () {
  const { name, legs, age, bark } = this;
  console.log(this);
  return `dog's name is ${name}, legs is ${legs}, age is ${age}`;
};
console.log(dog.getInfor());
