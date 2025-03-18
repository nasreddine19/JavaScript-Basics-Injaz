/**
 * A for-in loop is used to loop through the properties of an object.
 */

// Example
let profile = { userName: 'Geminor', age: 22, job: 'Software Developer' };

for (let key in profile) {
  console.log(key + ': ' + profile[key]);
}