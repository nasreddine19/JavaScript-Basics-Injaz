/**
 * Reducing an Array
 * 
 * Combine all elements into single value
 */

const ages = [18, 21, 25, 30];

const totalAge = ages.reduce((sum, age) => sum + age, 0);
console.log("Total age:", totalAge); // 94