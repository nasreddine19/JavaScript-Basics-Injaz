// ==============================================
// (9) Let vs Var
// ==============================================

/**
 * DEFINITIONS:
 * - let: Block-scoped variable
 * - var: Function-scoped variable (avoid in modern JS)
 */

if (true) {
  let letVar = "block-scoped";
  var varVar = "function-scoped";
}
// console.log(letVar); // Error
console.log(varVar); // Works (bad!)
