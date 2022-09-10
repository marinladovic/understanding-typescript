// Next gen JS features are supported in TypeScript
// TypeScript is a typed superset of JavaScript that compiles to plain JavaScript

// let and const are block scoped variables
const userName = "Max";
let age = 30;

//userName = "Maximilian"; // Error: Cannot assign to 'userName' because it is a constant.
age = 29;

// var is function scoped variable
// var result;
// let sum = add(5, 12);

// function add(a: number, b: number) {
//   result = a + b;
//   return result;
// }

// console.log(result);

// Arrow functions
// Assign default values to function parameters in TypeScript
// default arguments need to be last in the parameter list
const addNumbers = (a: number, b: number = 1) => a + b;
console.log(addNumbers(5, 2));
console.log(addNumbers(5));

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

printOutput(addNumbers(5));

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

// Spread operator - spread out the array elements
const hobbies = ["Sports", "Cooking"]; // [ 'Sports', 'Cooking' ]
console.log(hobbies);

const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies); // [ 'Hiking', 'Sports', 'Cooking' ]
console.log(activeHobbies);

const activeHobbies2 = ["Hiking", ...hobbies]; // [ 'Hiking', 'Sports', 'Cooking' ]

const person = {
  name: "Max",
  age: 30,
};

// pull out the properties of the person object and create a new object
const copiedPerson = { ...person }; // { name: 'Max', age: 30 }

// Rest operator - collect multiple arguments into an array
const add = (...numbers: number[]) => {
  // reduce() executes a reducer function (that you provide) on each
  // element of the array, resulting in single output value.

  //   (method) Array<number>.reduce(callbackfn:
  //     (previousValue: number, currentValue: number,
  //       currentIndex: number, array: number[]) =>
  //       number, initialValue: number): number (+2 overloads)

  // Calls the specified callback function for all the elements
  // in an array. The return value of the callback function is the
  // accumulated result, and is provided as an argument in the next
  // call to the callback function.

  // @param callbackfn — A function that accepts up to four arguments.
  // The reduce method calls the callbackfn function one time for each
  // element in the array.

  // @param initialValue — If initialValue is specified, it is used as
  // the initial value to start the accumulation. The first call to the
  // callbackfn function provides this value as an argument instead of
  // an array value.

  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
