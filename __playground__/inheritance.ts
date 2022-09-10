// 1.2. INHERITANCE ==========================================

abstract class Department {
  // private employees: string[] = [];
  protected employees: string[] = []; // available to all classes that inherit from Department
  static fiscalYear = 2022;

  constructor(protected readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  // METHODS
  // describe(this: Department) {
  //   console.log(`Department (${this.id}): ${this.name}`);
  // }

  // abstract methods can only be defined in abstract classes
  // abstract methods do not contain an implementation and they MUST be implemented in derived classes
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  // static method
  // static methods are available on the class itself, not on the instances of the class
  static createEmployee(name: string) {
    return { name: name };
  }
}

// Inheritance allows us to create a new class based on an existing class.
class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT"); // call the constructor of the parent class
    this.admins = admins;
  }

  describe(this: ITDepartment) {
    console.log("IT Department - ID: " + this.id);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  // getters and setters
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value!");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting"); // call the constructor of the parent class
    //this.reports = reports;
    this.lastReport = reports[0];
  }

  // override a method of the parent class
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name); // this.employees is private in the parent class and cannot be accessed here
  }

  describe(this: AccountingDepartment) {
    console.log("Accounting Department - ID: " + this.id);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Max"]);
it.addEmployee("Max");
it.addEmployee("Manu");
it.addEmployee("Anna");
it.describe();
it.printEmployeeInformation();

const acc = new AccountingDepartment("d2", []);
acc.addEmployee("Max");
acc.addEmployee("Sebastian");
//acc.mostRecentReport; // No report found.
acc.addReport("Something went wrong...");
acc.mostRecentReport;
acc.addReport("Something went wrong again...");
//acc.mostRecentReport = '';  // Please pass in a valid value!
acc.mostRecentReport = "Year End Report";
acc.describe();
acc.printEmployeeInformation();
acc.printReports();

const employee1 = Department.createEmployee("Sandra"); // use the static method
Department.fiscalYear; // use the static property
