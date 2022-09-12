// DISCRIMINATED UNION TYPES
//
// Discriminated union types are a way of expressing that a value can be one of several different types.
// For example, a value can be a string, or a number, or a boolean, but not two of them at the same time.
//

interface Bird {
  type: "bird"; // discriminant
  flyingSpeed: number;
}

interface Horse {
  type: "horse"; // discriminant
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
    default:
      break;
  }
  console.log(`Mooving at speed: ${speed}`);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
moveAnimal({ type: "horse", runningSpeed: 15 });
