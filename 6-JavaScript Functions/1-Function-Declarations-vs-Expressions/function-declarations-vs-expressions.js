/**
 * Chapter 6: JavaScript Functions
 *
 * DEFINITION: A function is a reusable block of code that performs
 * a specific task when called.
 */

// ==============================================
// (1) Function Declarations vs Expressions
// ==============================================

/**
 * DEFINITION:
 * - Declaration: Function defined with 'function' keyword at statement level
 * - Expression: Function assigned to a variable
 */

// Function Declaration (hoisted)
function add(a, b) {
  return a + b;
}

// Function Expression (not hoisted)
const multiply = function (a, b) {
  return a * b;
};

console.log(add(2, 3)); // 5
console.log(multiply(2, 3)); // 6
