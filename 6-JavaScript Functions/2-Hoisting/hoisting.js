// ==============================================
// (2) Hoisting
// ==============================================

/**
 * DEFINITION:
 * JavaScript's default behavior of moving declarations to the top
 * of their scope before code execution.
 */

// Works because declaration is hoisted
console.log(greet("Alice")); // "Heey Alice"

function greet(name) {
  return `Heey ${name}`;
}
