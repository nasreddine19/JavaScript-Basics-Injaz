/**
 * Clearing(Emptying) an Array
 * 
 * 3 ways to clear all elements:
 */

let numbers = [1,2,3,4];

// Method 1: Set length to 0
numbers.length = 0;
console.log(numbers); // []

// Method 2: Reassign empty array (original array remains in memory)
numbers = [5,6,7,8,9];
numbers = [];
console.log(numbers); // []

// Method 3: Use splice()
numbers = [10,11,12,13,14];
numbers.splice(0, numbers.length);
console.log(numbers); // []