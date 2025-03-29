// ==============================================
// (8) Local vs Global Scope
// ==============================================

/**
 * DEFINITIONS:
 * - Global: Accessible everywhere in the file
 * - Local: Only accessible within its block {}
 */

// Global variable
const globalVar = "I'm global";

function testScope() {
  // Local variable
  const localVar = "I'm local";
  console.log(globalVar); // Works
}

testScope();
// console.log(localVar); // Would throw ReferenceError
