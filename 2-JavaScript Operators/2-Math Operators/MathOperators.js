/**
 * Arithmetic(Math) operators are used to do math operations like addition, 
 * subtraction, multiplication, and division.
 */


// Addition (+)
let x = 25
let y = 3
let sum = x + y // sum is 28

// Subtraction (-)
let z = 25
let t = 3
let difference = z - t // sum is 22

// Multiplication (*)
let product = 5 * 2 // product is 10

// Division (/)
let div = 10 / 2 // div is 5

// Modulus (%)
let reminder = 10 % 3 // reminder is 1 (because 10 div by 3 is 3 with 1 left over)


/**
 * Other Ways to Increase and Decrease:
    In JavaScript, you can increase or decrease a value in multiple ways:
 */

/* Increment Operations */
let Inc = 10; // Initialize `Inc` with the value 10
Inc = Inc + 1; // Explicitly add 1 to `Inc` and assign the result back to `Inc`
// Now, `Inc` becomes 11

Inc += 1; // Shorthand for `Inc = Inc + 1`; adds 1 to `Inc` and assigns the result back
// Now, `Inc` becomes 12

Inc++; // Post-increment: increments `Inc` by 1, but returns the original value (12) if used in an expression
// Now, `Inc` becomes 13

++Inc; // Pre-increment: increments `Inc` by 1 and returns the new value (14) if used in an expression
// Now, `Inc` becomes 14

/* Decrement Operations */
let Dec = 10; // Initialize `Dec` with the value 10
Dec = Dec - 1; // Explicitly subtract 1 from `Dec` and assign the result back to `Dec`
// Now, `Dec` becomes 9

Dec -= 1; // Shorthand for `Dec = Dec - 1`; subtracts 1 from `Dec` and assigns the result back
// Now, `Dec` becomes 8

Dec--; // Post-decrement: decrements `Dec` by 1, but returns the original value (8) if used in an expression
// Now, `Dec` becomes 7

--Dec; // Pre-decrement: decrements `Dec` by 1 and returns the new value (6) if used in an expression
// Now, `Dec` becomes 6