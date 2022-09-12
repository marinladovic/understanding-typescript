// TYPE CASTING

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

//const paragraph = document.getElementById('meassage-output')! as HTMLParagraphElement;
/**
 * Type Casting
 * here we are telling typescript that userInputElement is an HTMLInputElement (not just an HTML element) - this is called type casting
 */
//const userInputEl = <HTMLInputElement>document.getElementById('user-input')!;

/**
 * alternative way to type cast
 */
// const userInputEl = document.getElementById('user-input')! as HTMLInputElement;

const userInputEl = document.getElementById("user-input")!;
if (userInputEl) {
  (userInputEl as HTMLInputElement).value = "Hi there!";
}
