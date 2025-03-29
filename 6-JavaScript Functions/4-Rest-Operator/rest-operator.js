// ==============================================
// (4) The Rest Operator (...)
// ==============================================

/**
 * DEFINITION:
 * Collects multiple elements into a single array parameter.
 */

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3)); // 6
