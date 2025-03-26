/**
 * Iterating an Array
 * 
 * 3 main ways to loop through arrays:
 */

const colors = ['red', 'green', 'blue'];

// 1. for-of loop (simple)
for (let color of colors) {
  console.log(color);
}

// 2. forEach method (modern)
colors.forEach(color => console.log(color));

// 3. Classic for loop
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}