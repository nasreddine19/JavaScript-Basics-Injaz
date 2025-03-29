// ==============================================
// (5) Default Parameters
// ==============================================

/**
 * DEFINITION:
 * Parameters that get default values if no argument is provided.
 */

function createUser(name, role = "user") {
  return { name, role };
}
console.log(createUser("Alice")); // { name: 'Alice', role: 'user' }
