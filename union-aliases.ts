// UNION TYPES
// number | string = union type (either number or string)
// can be used to combine types in a variable or function parameter or return type

// LITERAL TYPES (string literal types) - restrict the type to a specific value
// (e.g. "as-number" or "as-text")

// ALIAS TYPES - create a new type using a type alias (e.g. "numberOrString") and use it in the function

type numberOrString = number | string;
type conversionDescriptor = "as-number" | "as-text";

function combine(
  input1: numberOrString,
  input2: numberOrString,
  resultConversion: conversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
}

const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges);

const combinedStringAges = combine("30", "26", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
