// Array and object destructuring

const hobbies = ["Sports", "Cooking", "Reading", "Writing"];

// const hobby1 = hobbies[0];
// const hobby2 = hobbies[1];

// Goes through the array and assigns the values to the variables in order
//const [hobby1, hobby2] = hobbies;

const [hobby1, hobby2, ...remainingHobbies] = hobbies;
hobbies;
hobby1;
hobby2;
remainingHobbies;

const person = {
  firstName: "Max",
  age: 30,
};

// overwrites the variable name, aliasing
const { firstName: username, age } = person;
username;
age;
