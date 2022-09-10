// INTERFACES
// Interfaces are a way to describe the structure of an object
// Interfaces can be a contract with a class that a class must follow

// Creating a custom function type
type AddFn = (a: number, b: number) => number;
let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

// Creating function types with interfaces
interface AddFnInterface {
  // (paramater: type, parameter: type, ...): return type;
  (a: number, b: number): number;
}
let add2: AddFnInterface;
add2 = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
  // Optional properties
  outputName?: string;
}

// You can extend interfaces to create more complex interfaces
// you can also extend multiple interfaces with a comma
interface Greetable extends Named {
  // you can add a readonly property to an interface to make it immutable
  //readonly name: string;

  greet(phrase: string): void;
}

// Implementing an interface with a class
class Person implements Greetable {
  name: string;
  age: number;

  constructor(n: string, a: number) {
    this.name = n;
    this.age = a;
  }

  greet(phrase: string) {
    console.log(`${phrase} ${this.name}`);
  }
}

// You can implement multiple interfaces by separating them with a comma
// class Person implements Greetable, AnotherInterface {}

let user1: Greetable;

user1 = new Person("Max", 30);
//user1.name = 'Maximilian'; // this will throw an error because name is readonly
user1.greet("Hi there, I am");
