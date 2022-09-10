// 1.3. SINGLETONS AND PRIVATE CONSTRUCTORS ==========================================
// Singleton is a design pattern that restricts the instantiation of a class to one object.
// This is useful when exactly one object is needed to coordinate actions across the system.

abstract class Department {
  protected employees: string[] = [];
  static fiscalYear = 2022;

  constructor(protected readonly id: string, public name: string) {
    this.id = id;
    this.name = name;
  }

  // METHODS
  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

  static createEmployee(name: string) {
    return { name: name };
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }

  describe(this: ITDepartment) {
    console.log("IT Department - ID: " + this.id);
  }
}

// Singleton class
class AccountingDepartment extends Department {
  private lastReport: string;
  private static instance: AccountingDepartment; // Singleton instance

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

  // PRIVATE CONSTRUCTOR
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  static getInstance() {
    if (this.instance) {
      // if instance exists
      return this.instance; // return the one inatance of the class we already have
    }
    this.instance = new AccountingDepartment("d2", []); // else create a new instance
    return this.instance; // return the new instance
  }

  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
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

const accounting = AccountingDepartment.getInstance();
