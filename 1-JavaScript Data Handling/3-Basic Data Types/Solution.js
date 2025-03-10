/**========Solution 1========*/

// Step 1: Create variables
let age = 18;
let userName = 'Nasreddine';
let isStudent = true;
let bigNumber = 99439842743929349298n;
let uniqueId = Symbol('12313');

// Step 2: Log variables
console.log(age,userName,isStudent,bigNumber,uniqueId)

// Step 3: Change age and log
age = 22
console.log(age)

// Step 4: Copy name and change original
let copyUserName = userName
userName = 'Nasro'
console.log(copyUserName) // Nasreddine
console.log(userName) // Nasro

/**========Solution 2========*/
// Step 1: Create profile object
let profile = {
    userName: 'Nasreddine',
    age: 22,
    hobbies: ['reading', 'coding']
}
// Step 2: Log profile
console.log(profile) // { userName: "Nasreddine", age: 22, hobbies: ['reading', 'coding'] }

// Step 3: Assign profile to friend and modify friend
let friend = profile
friend.userName = 'Alex'

console.log(profile) // { userName: "Alex", age: 22, hobbies: ['reading', 'coding'] }
console.log(friend) // { userName: "Alex", age: 22, hobbies: ['reading', 'coding'] }
// Both are the same because objects are copied by reference.

// Step 4: Create a clone of profile
let cloneProfile = {...profile} // Using spread operator to create a shallow copy
cloneProfile.userName = 'Sarah'
cloneProfile.age = 35
cloneProfile.hobbies = ['swimming']

console.log(profile) // { userName: "Alex", age: 22, hobbies: ['reading', 'coding'] }
console.log(cloneProfile) // { userName: "Sarah", age: 35, hobbies: ['reading', 'coding'] }
// The objects are independent, but the nested array is still shared because it's a shallow copy.