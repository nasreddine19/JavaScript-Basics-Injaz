/**
 * The switch-case statement is used when we have many conditions to check. 
 * It is like a shortcut for many if-else statements.
 */

// Example
let day = 'Monday';

switch (day) {
  case 'Monday':
    console.log('Today is Monday.');
    break;
  case 'Tuesday':
    console.log('Today is Tuesday.');
    break;
  default:
    console.log('Today is another day.');
}