/**
 * Every object in JavaScript has a constructor property. 
 * This property refers to the function that was used to create the object.
 */

// Example:

function Profile(userName,age){
    this.userName  = userName;
    this.age = age;

    this.studentAt = function() {
        console.log('Faculty of Science and Technology');
    }
}

const newProfile = new Profile('Alex', 20);

console.log(newProfile.constructor);