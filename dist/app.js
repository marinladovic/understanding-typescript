"use strict";
const userName = "Max";
let age = 30;
age = 29;
const addNumbers = (a, b = 1) => a + b;
console.log(addNumbers(5, 2));
console.log(addNumbers(5));
const printOutput = (output) => console.log(output);
printOutput(addNumbers(5));
const button = document.querySelector("button");
if (button) {
    button.addEventListener("click", (event) => console.log(event));
}
const hobbies = ["Sports", "Cooking"];
console.log(hobbies);
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);
console.log(activeHobbies);
const activeHobbies2 = ["Hiking", ...hobbies];
const person = {
    name: "Max",
    age: 30,
};
const copiedPerson = Object.assign({}, person);
const add = (...numbers) => {
    return numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
};
const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);
