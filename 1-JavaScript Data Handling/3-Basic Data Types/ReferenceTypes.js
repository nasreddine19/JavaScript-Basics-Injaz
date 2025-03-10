/**
 * Reference Types
    These are more complex data types. They are mutable (can be changed) and are stored as references in memory. 
    When you use a reference type, you are working with a "pointer" to the actual data, not the data itself.
 */

/** Examples: */

// Objects: Represents a collection of key-value pairs.
let profile = {userName: 'Nasro', age: 22}

// Arrays: Represents an ordered list of values.
let favGames = ['CS2', 'Among US', 'Blood Strike']

// Functions: Represents reusable blocks of code.
function hi() {
    console.log('Hi Buddy !')
}

hi()

/**
 * Key Points About Reference Types:
    1- They are mutable (can be changed).
    2- When you assign a reference type to a variable, you are creating a reference to the same data in memory.
    3- Changing one variable will affect the other because they both point to the same data.
 */
// Example: 
let profile1 = {userName: 'Sarah', age:18}
let profile2 = profile1

profile1.age = 22

console.log(profile1)
console.log(profile2)       
