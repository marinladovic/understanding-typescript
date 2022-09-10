// When you are confident that your code is correct,
// you can use the --no-check flag ( ! ) to skip type checking.
const button = document.querySelector("button")!;

function clickHandler(message: string) {
  console.log("clicked! " + message);
}

// You need to ensure you return a value from the function
function add(n1: number, n2: number) {
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

// Check if button is null
if (button) {
  // .bind() -> For a given function, creates a bound function that has
  // the same body as the original function. The this object of the bound
  // function is associated with the specified object, and has the specified
  // initial parameters.
  // @param thisArg — An object to which the this keyword can refer
  // inside the new function.
  // @param argArray — A list of arguments to be passed to the new function.
  button.addEventListener("click", clickHandler.bind(null, "You're welcome!"));
}
