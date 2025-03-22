/**
 * You can loop through the properties of an object using a for...in loop. 
 * JavaScript also provides a built-in class called Object 
 * with useful methods to work with objects.
 */

// Example with for...in
const profile = {
    name: "Bob",
    age: 30
};

for (const key in profile) {
    console.log(profile[key]);
}

// Example with Object class methods:
const keys = Object.keys(profile)
console.log(keys)