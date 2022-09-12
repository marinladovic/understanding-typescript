/**
 * DECORATORS are functions that can be attached to classes, methods, properties, and parameters.
 * They can be used to modify the behavior of the class, method, property, or parameter they are
 * attached to. Decorators are a feature of the ECMAScript 2015 (ES2015) specification.
 *
 * Meta Programming
 */

/**
 * Decorator that we add to a class
 */

function Logger(logString: string) {
  console.log("LOGGER FACTORY");
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

function WithTemplate(template: string, hookId: string) {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: T
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
        super();
        console.log("Rendering template factory");
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector("h1")!.textContent = this.name;
        }
      }
    };
  };
}

@Logger("LOGGING - PERSON")
@WithTemplate("<h1>My Person Object</h1>", "decorators")
class Person {
  name = "Slaven";

  constructor() {
    console.log("Creating person object...");
  }
}

const person = new Person();
console.log(person);

/**
 * PROPERTY DECORATOR - Decorator that we add to a property
 */
function Log(target: any, propertyName: string | Symbol) {
  console.log("==== Property decorator! ====");
  console.log(target, propertyName);
}

/**
 * ACCESSOR DECORATOR - Decorator that we add to a accessor (getter/setter)
 */
function Log2(target: any, name: string, decsriptor: PropertyDescriptor) {
  console.log("==== Accessor decorator! ====");
  console.log(target);
  console.log(name);
  console.log(decsriptor);
}

/**
 * METHOD DECORATOR - Decorator that we add to a method
 */
function Log3(
  target: any,
  name: string | Symbol,
  decsriptor: PropertyDescriptor
) {
  console.log("==== Method decorator! ====");
  console.log(target);
  console.log(name);
  console.log(decsriptor);
}

/**
 * PARAMETER DECORATOR - Decorator that we add to a parameter
 */
function Log4(target: any, name: string | Symbol, position: number) {
  console.log("==== Parameter decorator! ====");
  console.log(target);
  console.log(name);
  console.log(position);
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Invalid price - should be a positive value!");
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this._price * (1 + tax);
  }
}

const prod_1 = new Product("Book", 19);
const prod_2 = new Product("Shoes", 49);

function Autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMehthod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMehthod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

class Printer {
  message = "This works!";

  @Autobind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer();

const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);

/**
 * Decorator for validation
 */

interface ValidatorConfig {
  [property: string]: {
    [validatableProp: string]: string[]; // ['required', 'positive']
  };
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "required",
    ],
  };
}

function PositiveNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: [
      ...(registeredValidators[target.constructor.name]?.[propName] ?? []),
      "positive",
    ],
  };
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name];
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case "required":
          isValid = isValid && !!obj[prop];
          break;
        case "positive":
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form")!;
courseForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const titleEl = document.getElementById("title") as HTMLInputElement;
  const priceEl = document.getElementById("price") as HTMLInputElement;

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price);
  if (!validate(createdCourse)) {
    alert("Invalid input, please try again!");
    return;
  }
  console.log(createdCourse);
});
