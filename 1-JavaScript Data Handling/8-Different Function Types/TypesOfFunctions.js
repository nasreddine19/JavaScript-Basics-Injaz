/**
 * Types of Functions
    - Functions are reusable blocks of code.
    - They can either do something (like print a message) or calculate and return a value.
    - If a function doesn’t have a return statement, it will return undefined by default.
 */

// Example:

// Function with return:
function sumOfTwoNumbers(x,y) {
    return x + y
}

let outPut1 = sumOfTwoNumbers(4,2)
console.log(outPut1) // 6

// Function without return:
function sumOfTwoNumbers(x,y) {
    const sum = x + y
}

let outPut2 = sumOfTwoNumbers(8,2)
console.log(outPut2) // undefined
