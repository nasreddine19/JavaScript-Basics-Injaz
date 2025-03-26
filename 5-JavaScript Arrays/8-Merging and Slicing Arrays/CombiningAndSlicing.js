/**
 * Merging (Combining) and Slicing Arrays
 */

const first = [1, 2, 3];
const second = [4, 5, 6];

// Combine arrays
const combined = first.concat(second);
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Slice array (like cutting a piece)
const slice1 = combined.slice(2); // From index 2 to end
console.log(slice1); // [3, 4, 5, 6]

const slice2 = combined.slice(2, 4); // From index 2 to 4 (not included)
console.log(slice2); // [3, 4]