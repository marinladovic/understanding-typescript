/**
 * GENERICS - A way to create a reusable block of code that can be used with different types
 *
 * DEFAULT TYPES - A way to set a default type for a generic type
 * BUILT-IN GENERICS - Array, Promise, Map, Set
 *
 * ARRAYS
 * Array<T> - An array of type T (T[])
 * const names: Array<string> = ['John', 'Jane', 'Mary', 'Bob', 'Alice']; // this array can only contain strings
 * const numbers: Array<number> = []; // this array can only contain numbers
 */
// const names: Array<string> = ['John', 'Jane', 'Mary', 'Bob', 'Alice'];
// const numbers: Array<number> = [];

/**
 * PROMISES
 * Promise<T> - A promise that resolves to a value of type T
 * const promise: Promise<string> -> this promise will resolve to a string
 * const promise_2: Promise<number> -> this promise will resolve to a number
 */
// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('This is done!');
//   }, 2000);
// });

/**
 * CREATING A GENERIC FUNCTION - A function that can be used with different types
 * function fnName<T> -> in this case T can be of any type
 * function merge<T, U>(objA: T, objB: U) -> in this case T and U can be of any type
 *
 * CONSTRAINTS - A way to limit the types that can be used with a generic type (extends)
 */
function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
  return Object.assign(objA, objB);
}

/**
 * this is what TS infers from the arguments passed to the merge function
 * <{name: string, hobbies: string[]}, {age: number}> - this is the generic type for the merge function
 * {name: 'John', hobbies: ['Sports', 'Cooking'], age: 30} - this is the object that will be passed to the merge function
 */
const mergeObj = merge(
  { name: "John", hobbies: ["Sports", "Cooking"] },
  { age: 30 }
);
mergeObj;
mergeObj.name;
mergeObj.age;

/**
 * Another generic function
 */
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element.";
  } else if (element.length > 1) {
    descriptionText = `Got ${element.length} elements.`;
  }
  return [element, descriptionText];
}

countAndDescribe("Hi there!");
countAndDescribe(["Sports", "Cooking"]);
countAndDescribe([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
countAndDescribe([]);

/**
 * The keyof constraint - A way to limit the types that can be used with a generic type
 *
 * <T extends object, U extends keyof T> -> the first parameter should be any kind of object,
 *    and the second parameter should be a key of the first parameter
 */
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value ${obj[key]}`;
}

//extractAndConvert({}, "name");
extractAndConvert({ name: "May" }, "name");

/**
 * GENERIC CLASSES - A way to create a reusable block of code that can be used with different types
 *
 * DataStorage now works only with strings, numbers or booleans
 * DataStorage<T extends string | number | boolean>
 */
class DataStorage<T extends string | number | boolean> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }

  removeItem(item: T) {
    /**
     * Here when working with objects, splice will not work as expected because it will remove last object
     * data.indexOf(item) -> this will result in -1 because the objects are not the same
     * and splice will remove the last item in the array
     *
     * this.data.splice(this.data.indexOf(item), 1);
     */

    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

/**
 * const objStorage = new DataStorage<object>();
 * objStorage.addItem({name: 'John'});
 * const janeObject = {name: 'Jane'};
 * objStorage.addItem(janeObject);
 * objStorage.addItem({name: 'Mary'});
 * objStorage.getItems();
 * // objStorage.removeItem({name: 'Jane'});  // removed Mary instead of Jane because of the reference type
 * objStorage.removeItem(janeObject); // removed Jane
 * objStorage.getItems();
 */

const textStorage = new DataStorage<string>();
textStorage.addItem("John");
textStorage.addItem("Jane");
textStorage.addItem("Mary");
textStorage.getItems();
textStorage.removeItem("Jane");
textStorage.getItems();

const numberStorage = new DataStorage<number>();
numberStorage.addItem(1);
numberStorage.addItem(2);
numberStorage.addItem(3);
numberStorage.getItems();
numberStorage.removeItem(2);
numberStorage.getItems();

/**
 * GENERIC UTILITY TYPES
 *
 * PARTIAL - A way to make all properties of an interface optional (Partial<T>)
 */
interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  // return {title: title, description: description, completeUntil: date};
  let courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = date;
  return courseGoal as CourseGoal;
}

/**
 * READONLY - A way to make all properties of an interface readonly (Readonly<T>)
 */
const names: Readonly<string[]> = ["John", "Jane", "Mary", "Bob", "Alice"];
/**
 * names.push('May');  // Error: Property 'push' does not exist on type 'readonly string[]'
 * names.pop(); // Error: Property 'pop' does not exist on type 'readonly string[]'
 */
