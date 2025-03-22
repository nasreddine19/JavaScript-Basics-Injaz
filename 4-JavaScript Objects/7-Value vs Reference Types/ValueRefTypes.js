/**
 * In JavaScript, data can be stored as value types (primitives) or reference types (objects).
    Value types: Numbers, strings, booleans, etc. They are copied by value.
    Reference types: Objects, arrays, functions. They are copied by reference.
 */

//Example:

let a = 10;
let b = a; // b is a copy of a
b = 20;
console.log(a); // 10 (unchanged)

let obj1 = { value: 10 };
let obj2 = obj1; // obj2 references obj1
obj2.value = 20;
console.log(obj1.value); // 20 (changed)
