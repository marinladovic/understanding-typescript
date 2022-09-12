// INDEX PROPERTIES - allows us to create a flexible object

/**
 * Validating user input
 */

interface ErrorContainer {
  // { email: 'Not a valid email', username: 'Must start with a character' }
  //id: string;
  /**
   *  whatever object we pass in, must have a string as a key and a string as a value
   *  can have any number of properties but they must be strings
   */
  [prop: string]: string;
}

const errorBag: ErrorContainer = {
  email: "Not a valid email!",
  username: "Must start with a capital character!",
};
