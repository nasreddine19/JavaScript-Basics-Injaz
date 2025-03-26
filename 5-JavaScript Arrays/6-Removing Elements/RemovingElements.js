/**
 * Removing Elements
 * 
 * We can remove elements from an array in 3 main ways:
 * 1. pop() - removes from END
 * 2. shift() - removes from BEGINNING
 * 3. splice() - removes from MIDDLE
 */


const colors = ['purple', 'blue', 'yellow', 'green']


// 1. pop() - removes last element
const lastColor = colors.pop();
console.log(colors); // ['purple', 'blue', 'yellow']
console.log("Removed:", lastColor); // 'green'

// 2. shift() - removes first element
const firstColor = colors.shift();
console.log(colors); // ['blue', 'yellow']
console.log("Removed:", firstColor); // 'purple'

// 3. splice() - removes from middle
// First number = where to start removing
// Second number = how many to remove
const removedItems = colors.splice(0, 1); // Remove 1 item at position 0
console.log(colors); // ['yellow']
console.log("Removed:", removedItems); // ['blue']