/**
 * Testing Elements of an array
 * 
 * Check if elements meet condition
 */

const ages = [18, 21, 25, 30];

// every() - ALL must pass test
const allAdult = ages.every(age => age >= 18);
console.log("All adults?", allAdult); // true

// some() - AT LEAST ONE must pass test
const hasTeen = ages.some(age => age < 20);
console.log("Has teen?", hasTeen); // true