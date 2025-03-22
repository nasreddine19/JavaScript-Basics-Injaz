/**
 * To create a copy of an object, you can clone it. 
 * There are different ways to clone an object.
 */

// Example 
let x = {value: 2}
let y = x

y.value = 4
console.log(x) // 4
console.log(y) // 4

/* If we want to create a copy of an object without affecting 
   the original object's values, we use Object.assign() (to clone it).
*/

let z = {value: 2}
let t = {}

Object.assign(t, z)

t.value = 4
console.log(z) // 2
console.log(t) // 4