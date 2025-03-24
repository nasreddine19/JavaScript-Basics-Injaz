/**
 * Finding Elements (Primitives Values)
 * 
 * For simple things like text strings or numbers:
 */

const colors = ['red', 'blue', 'purple', 'blue'];


// indexOf() - Finds FIRST position of item
console.log(colors.indexOf('blue')); // 1 (first 'blue')
console.log(colors.indexOf('yellow')); // -1 (not found)

// lastIndexOf() - Finds LAST position
console.log(colors.lastIndexOf('blue')); // 3 (last 'blue')

// includes() - Just checks if item exists
console.log(colors.includes('green')); // false
console.log(colors.includes('purple')); // true
