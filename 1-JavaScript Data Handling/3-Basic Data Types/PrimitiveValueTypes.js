/**
 * In JavaScript, the data you work with can be divided into two main categories:
        - Primitive Value Types
        - Reference Types
 * Primitive Value Types
    These are the most basic types of data. They are simple, 
    immutable (cannot be changed), and are stored directly in memory. 
    When you use a primitive value, you are working with the actual value itself.

 */

/*Examples of Primitive Types: */ 

// Numbers: Represents numeric values.
let pi = 3.14
let days = 10

// Strings: Represents text.
let name = 'Nasreddine'
let message = 'Hi There!'

// Booleans: Represents true or false.
let isStudent = true
let isFemale = false

// Undefined: Represents a variable that has been declared but not assigned a value.
let und;
console.log(und) // Undefined

// Null: Represents an intentional absence of any value.
let n = null
console.log(n)

// BigInt: Represents very large integers that cannot be handled by the regular Number type.
let bigNum = 3761253761253761253715316312312354127361273n
/** OR */
let bigNumer = BigInt('3761253761253761253715316312312354127361273')
console.log(bigNum) // 3761253761253761253715316312312354127361273n
console.log(bigNumer) // 3761253761253761253715316312312354127361273n

// Symbol: Represents a unique and immutable value, often used as object property keys.
let id = Symbol('1235562')
console.log(id) // Symbol('1235562')


/*
    Key Points About Primitive Types:
        1- They are immutable (cannot be changed).
        2- When you assign a primitive value to a variable, a copy of that value is created.
        3- Changing one variable does not affect another.
*/

// Example 
let x = 5
let y = x // y gets a copy of x  value
x = 10 // changing x doesn't affect y
console.log(x) // 10
console.log(y) // 5