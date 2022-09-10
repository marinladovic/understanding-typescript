// object with an infered type
// which include name: string and id: number
// const user = {
//   name: 'John',
//   id: 0,
// }

// You can explicitly describe this object’s
// shape using an interface declaration:
interface User {
  name: string;
  id: number;
}

// You can then declare that a JavaScript object conforms
// to the shape of your new interface by using syntax like :
// TypeName after a variable declaration:
const user: User = {
  name: "John",
  id: 0,
};

// Since JavaScript supports classes and object-oriented programming,
// so does TypeScript. You can use an interface declaration with classes:

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user2: User = new UserAccount("Jane", 1);

// You can use interfaces to annotate parameters and return values to functions:
// function getAdminUser(): User {
//   // ...
// }

// function deleteUser(user: User) {
//   // ...
// }

// ==== COMPOSING TYPES ====

// UNIONS ------------------
// With a union, you can declare that a type could be one of many types.
// For example, you can describe a boolean type as being either true or false:
type MyBool = true | false;

// A popular use-case for union types is to describe the set of string or number
//  literals that a value is allowed to be:
type WindowStates = "open" | "closed" | "minimized";
type LockedStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;

// Unions provide a way to handle different types too. For example,
// you may have a function that takes an array or a string:
function getLength(obj: string | string[]) {
  return obj.length;
}

getLength("Hi Mom!");

// For example, you can make a function return different values depending on whether it is passed a string or an array:
function wrapInArray(obj: string | string[]) {
  if (typeof obj === "string") {
    return [obj];
  }
  return obj;
}

wrapInArray("abcdefgh");
wrapInArray(["a", "b", "c", "d", "e", "f", "g", "h"]);

// GENERICS ------------------

// Generics provide variables to types. A common example is an array. An array without generics could contain anything. An array with generics can describe the values that the array contains.

type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;

// You can declare your own types that use generics:
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

// This line is a shortcut to tell TypeScript there is a constant called `backpack`, and to not worry about where it came from.
//declare const backpack: Backpack<string>;

// object is a string, because we declared it above as the variable part of Backpack.
//const object = backpack.get();

// Since the backpack variable is a string, you can't pass a number to the add function.
//backpack.add(23);

// ==== STRUCTURAL TYPE SYSTEM ====
// One of TypeScript’s core principles is that type checking focuses on the shape that values have. This is sometimes called “duck typing” or “structural typing”.

// In a structural type system, if two objects have the same shape, they are considered to be of the same type.

interface Point {
  x: number;
  y: number;
}

// The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.
function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

const point = { x: 12, y: 26 };
logPoint(point);

// The shape-matching only requires a subset of the object’s fields to match.
const point3 = { x: 18, y: 33, z: 89 };
logPoint(point3);

const rect = { x: 33, y: 3, width: 30, height: 80 };
logPoint(rect);

const color = { hex: "#187ABF" };
// logPoint(color);

// There is no difference between how classes and objects conform to shapes:
class VirtualPoint {
  x: number;
  y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }
}

const newVPoint = new VirtualPoint(13, 56);
logPoint(newVPoint);
