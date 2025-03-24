/**
 * Adding Elements
 * 
 * There are 3 main ways to add items to your array (shopping list):
 * 1. push() - adds to the END (like adding at bottom of list)
 * 2. unshift() - adds to the BEGINNING (like adding at top of list)
 * 3. splice() - adds in the MIDDLE (like inserting between items)
 */


const fruits = ['apple', 'banana', 'orange'];


// 1. push() - Easiest way to add to end
fruits.push('grape'); // Add 'grape' to end
console.log(fruits); // Now: ['apple', 'banana', 'orange', 'grape']

// 2. unshift() - Add to beginning
fruits.unshift('kiwi'); // Add 'kiwi' to start
console.log(fruits); // Now: ['kiwi', 'apple', 'banana', 'orange', 'grape']

// 3. splice() - For adding in middle
// First number = where to add (position 2 means after banana)
// Second number = how many to remove (we put 0 to just add)
// Then the item(s) to add
fruits.splice(2, 0, 'melon'); // Add 'melon' after banana
console.log(fruits); // Now has melon in middle