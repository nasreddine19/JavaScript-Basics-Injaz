/**
 * In JavaScript, functions are also objects.
 * This means you can add properties and methods to a function.
 */

// Example:

function greet() {
  console.log('Hello!');
}

greet.language = "English"; // Add a property
greet.sayGoodbye = function () {
  // Add a method
  console.log("Goodbye!");
};

console.log(greet.language); // "English"
greet.sayGoodbye(); // "Goodbye!"
