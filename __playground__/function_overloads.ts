/**
 * FUNCTION OVERLOADS - allow us to define multiple function signatures for a function
 * - the first signature is the most specific one
 * - the last signature is the most general one
 */

type Combinable = number | string;
type Numeric = number | boolean;

type Universal = Combinable & Numeric; // type Universal = number

/**
 * function overloads - when you dont want TS to infer the return type
 * here we are saying that if we pass in two numbers, we will get a number back
 */
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
