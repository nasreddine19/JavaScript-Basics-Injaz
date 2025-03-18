/**
 * `break` is used to stop a loop immediately.
   `continue` is used to skip the current iteration and move to the next one.
 */

// Example with break
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      break; // stop the loop when i is 5
    }
    console.log(i);
}

// Example with continue
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
      continue; // skip the rest of the code when i is 3
    }
    console.log(i);
}