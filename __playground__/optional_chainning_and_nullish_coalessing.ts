/**
 * OPTIONAL CHAINING (?.) AND NULLISH COALESCING (??)
 */

type Combinable = number | string;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const res_1 = add("Max", " Schwarz") as string;
res_1.split(" ");
const res_2 = add(1, 5);
const res_3 = add("Max", 1);

/**
 * OPTIONAL CHAINING (?.) - it is used to check if the property exists or not
 * and if it exists then it will return the value of that property otherwise it will return undefined
 */

/**
 * NULLISH COALESCING (??) - it is used to check if the value is null or undefined
 */

const fetchedUserData = {
  id: "u1",
  name: "Max",
  job: { title: "CEO", description: "My own company" },
};

const userInput = "";
/**
 * if userInput is null or undefined then it will return 'DEFAULT' otherwise it will return userInput
 */
const storedData = userInput ?? "DEFAULT";

storedData;
// (fetchedUserData.job && fetchedUserData.job.title) // this is the JS way of checking if the property exists or not
// fetchedUserData?.job?.title;
