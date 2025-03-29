// ==============================================
// (3) Arguments
// ==============================================

/**
 * DEFINITION:
 * The values passed to a function when it is called.
 */

function showArgs(a, b) {
  console.log("First:", a);
  console.log("Second:", b);
  console.log("All arguments:", arguments); // Special array-like object
}
showArgs(1, 2, 3);
