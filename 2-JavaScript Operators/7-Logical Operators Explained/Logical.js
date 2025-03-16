/**
 * Logical operators are used to check conditions in your code. 
 * They help you make decisions and combine multiple conditions. 
 * In JavaScript, there are four main logical operators:
    1- && (AND)
    2- || (OR)
    3- ! (NOT)
    4- ?? (Nullish Coalescing )
 */

// && (AND)
let and = (10 > 3) && (1 < 3) // true
console.log(true && true) // true
console.log(true && false) // false
console.log(false && true) // false 
console.log(false && false) // false

// || (Or)
let or = (5 > 3) ||  (10 > 100)
console.log(true || true) // true
console.log(false|| true) // true
console.log(true || false) // true
console.log(false|| false) // false 

// !(NOT)
let not = !(4 > 2) // false (because 4 > 2 is true, but NOT true is false)

// ?? (Nullish Coalescing) : Returns the right value if the left value is `null` or `undefined`
let z = null ?? 'Default' // z is 'Default'

let x = null
const RESULT_1 = (x !== null && x !== undefined) ? x : false

let y = null
const RESULT_2 = y ?? false
