/**
 * A constructor function is used to create objects with a specific structure. 
 * We use the new keyword to create objects from a constructor function.
 * We name our Functions using PascalCase notatioon
 */

// Example: 

function Profile(userName,age){
    this.userName  = userName
    this.age = age

    this.studentAt = function() {
        console.log('Faculty of Science and Technology');
    }
}

const anotherProfile = new Profile('Nasreddine', 22);

console.log(anotherProfile)