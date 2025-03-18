/**
 * A while loop repeats a block of code as long as a condition is true. 
 * It is useful when you don’t know how many times the loop will run.
 */

// Example
let userInput = '';

while (userInput !== 'quit') {
  userInput = prompt("Enter something (type 'quit' to exit):");
  console.log("You entered: " + userInput);
}

console.log('You have quit the program.');