// 1. CLASSES ==========================================

import { describe } from "node:test";

// Classes are a blueprint for creating objects with pre-defined properties and methods.
// Define how objects look like, which properties and methods they have.
// Classes make creation of objects easier and more organized.
// Objects are instances of classes.

class Department {
  // private id: string;
  // private name: string; // public by default
  private employees: string[] = [];

  // constructor(n: string, id: string) {
  //   this.name = n;
  //   this.id = id;
  // }

  constructor(private readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  // methods
  // this should allways refer to a object of the class Department
  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc.
    // this.id = "d2"; // error: cannot assign to 'id' because it is a read-only property.
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const accounting = new Department("d1", "Accounting"); // creates a new object
accounting.addEmployee("Max");
accounting.addEmployee("Manu");

// you can access properties and methods of the class with the dot notation
// you want to use the dot notation only for public properties and methods of a class
// usually you want to avoid accessing properties and methods directly
// accounting.employees[2] = "Anna";
accounting.addEmployee("Anna");

accounting.describe();
accounting.printEmployeeInformation();
// this keyword refers to the object that is calling the method
// in this case, accountingCopy object is calling the describe method
// this == accountingCopy
//const accountingCopy = { describe: accounting.describe };
//accountingCopy.describe(); // will throw an error because accountingCopy does not adhere to the Department class

// const accountingCopy2 = { name: "DUMMY", describe: accounting.describe };
// accountingCopy2.describe();
