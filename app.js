// FUNCTIONS
// return type is inferred (recommended)
// use this instead of explicitly defining the return type
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }
// return type is explicitly defined (not recommended)
function add(n1, n2) {
    return n1 + n2;
}
// void return type
function printResult(num) {
    console.log("Result: " + num);
}
printResult(add(5, 12));
// undefined return type (not recommended) - use void instead
function printResult2(num) {
    console.log("Result: " + num);
    return;
}
printResult2(add(5, 12));
// function types
// let combineValues: Function; // not recommended
// describe the function type explicitly
var combineValues; // function type (recommended)
combineValues = add;
console.log(combineValues(8, 8));
// function types and callbacks (function as an argument)
function addAndHandle(n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, function (result) {
    console.log(result);
});
// UNKNOWN TYPE
var userInput;
var userName;
userInput = 5;
userInput = "Max";
// userName = userInput; // Error - Type 'unknown' is not assignable to type 'string'
// Type guard; use typeof to check the type of the variable (recommended)
// use instead of any type, but make sure to check the type of the variable
if (typeof userInput === "string") {
    userName = userInput;
}
// NEVER TYPE (function never returns a value)
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError("An error occurred!", 500);
