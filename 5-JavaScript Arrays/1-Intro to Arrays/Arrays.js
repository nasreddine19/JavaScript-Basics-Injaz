/**
 * Introduction to Arrays
 * 
 * Think of an array like a shopping list. Instead of writing each item on separate papers,
 * you write all items together on one paper - that's an array!
 * 
 * In JavaScript, we use square brackets [] to make an array, and separate items with commas.
 */


// Making a fruits array (like a fruits shopping list)
const fruits = ['apple', 'banana', 'orange'];

// How to get items from the array:
// Computers count starting from 0 (not 1 like humans)
console.log(fruits[0]); // 'apple' (first item)
console.log(fruits[1]); // 'banana' (second item)
console.log(fruits[2]); // 'orange' (third item)

// Counting how many fruits are in the box:
console.log('I have', fruits.length, 'fruits'); // Shows "I have 3 fruits"