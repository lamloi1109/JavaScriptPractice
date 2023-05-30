// Declare a function fullName and it print out your full name.
function fullName(yourName) {
  console.log(yourNamess);
}
// Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
function fullNameV2(firstName, fullName) {
  return `${firstName} - ${fullName}`;
}
// Declare a function addNumbers and it takes two two parameters and it returns sum.
function addNumbers(oneNumber, twoNumber) {
  return oneNumber + twoNumber;
}
// An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
function areaOfRectangle(length, width) {
  return length * width;
}
// A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
function calculatePerimeterRectangle(length, width) {
  return 2 * (length + width);
}
// A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.

function calculateVolumeOfRectPrism(length, width, height) {
  return (volume = length * width * height);
}

// Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle

function calcAreaOfCircle(r) {
  return Math.PI * r * r;
}

// Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle

function calculateCircumference(r) {
  return 2 * Math.PI * r;
}

// Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.

function calculateDensity(mass, volume) {
  return mass / volume;
}

// Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.

// Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.

function calculateWeight(mass, gravity) {
  return mass * gravity;
}

// Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.

function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.
// Check if a person is underweight, normal, overweight or obese based the information given below.

// The same groups apply to both men and women.
// Underweight: BMI is less than 18.5
// Normal weight: BMI is 18.5 to 24.9
// Overweight: BMI is 25 to 29.9
// Obese: BMI is 30 or more

function calculateBMI(weight, height) {
  return weight / (height * height);
}

function BMIInformation(weight, height) {
  const BMI = calculateBMI(weight, height);
  if (BMI < 18.5) {
    return 'Underweight';
  }

  if (BMI < 24.9) {
    return 'Normal weight';
  }

  if (BMI < 29.9) {
    return 'Over weight';
  }

  return 'Obese';
}

// Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.

function checkSeason(month) {
  if (month > 12 || month < 1) {
    return undefined;
  }

  if (month < 3 || month > 11) {
    return 'Winter';
  }

  if (month < 6) {
    return 'Spring';
  }

  if (month < 9) {
    return 'Summer';
  }

  return 'Autumn';
}

console.log(checkSeason(12));
console.log(checkSeason(8));
console.log(checkSeason(9));
console.log(checkSeason(11));




// Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

// console.log(findMax(0, 10, 5))
// 10
// console.log(findMax(0, -10, -2))
// 0

function findMax(a, b, c) {
  return Math.max(a, b, c);
}
