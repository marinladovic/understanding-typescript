// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
// } = {
// const person: {
//   name: string; // string
//   age: number; // number
//   hobbies: string[]; // array of strings
//   role: [number, string]; // Tuple
// } = {
//   name: "Max",
//   age: 30,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };

// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;

enum Role {
  ADMIN, // 0
  READ_ONLY, // 1
  AUTHOR, // 2
}

// You can also assign values to the enum
// enum Role {
//   ADMIN = 5, // 5
//   READ_ONLY, // 6
//   AUTHOR, // 7
// };

const person = {
  name: "Max",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

// person.role.push("admin");
// person.role[1] = 10; // Error

//person.role = [0, "admin"]; // OK

let favoriteActivities: string[];
favoriteActivities = ["Sports"];

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase());
  // console.log(hobby.map()); // !!! ERROR !!!
}

if (person.role === Role.ADMIN) {
  console.log("is admin");
}
