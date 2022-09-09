// FUNCTIONS

// return type is inferred (recommended)
// use this instead of explicitly defining the return type
// function add(n1: number, n2: number) {
//   return n1 + n2;
// }

// return type is explicitly defined (not recommended)
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// void return type
function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

// undefined return type (not recommended) - use void instead
function printResult2(num: number): undefined {
  console.log("Result: " + num);
  return;
}

printResult2(add(5, 12));

// function types
// let combineValues: Function; // not recommended
// describe the function type explicitly
let combineValues: (a: number, b: number) => number; // function type (recommended)
combineValues = add;
console.log(combineValues(8, 8));

// function types and callbacks (function as an argument)
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});

// UNKNOWN TYPE
let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Max";
// userName = userInput; // Error - Type 'unknown' is not assignable to type 'string'

// Type guard; use typeof to check the type of the variable (recommended)
// use instead of any type, but make sure to check the type of the variable
if (typeof userInput === "string") {
  userName = userInput;
}

// NEVER TYPE (function never returns a value)
// this function never returns a value (it throws an error)
// void is typically inferred as the return type of this function
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occurred!", 500);
