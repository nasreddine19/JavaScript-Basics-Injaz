/**
 * Equality operators check if two values are equal or not.
 */

// Loose equality (==): Checks if two values are equal, but it doesn't care about the type.
let looseEquality = 5 == '5' // true (because it converts the string '5' to a number)

// Strict equality (===): Checks if two values are equal AND of the same type.
let strictEquality = 5 === '5' // false (because one is a number and the other is a string)