/**
 * In this chapter, we will learn about JavaScript objects. 
 * Objects are very important in JavaScript because they help us 
 * store and organize data. We will cover many topics, so let’s start!
 */

/**
 * An object is a collection of key-value pairs. In JavaScript, 
   we can create objects using object literals. An object literal is a list 
   of key-value pairs inside curly braces {}. Objects can have two main parts:
     State: The data or properties of the object (e.g., userName, age).
     Behavior: The actions or methods of the object (e.g., functions that perform tasks).
 */

// Example:
const profile = {
    userName: 'Nasreddine',
    age: 22,
    studentAt: function() {
        console.log('Faculty of Science and Technology');
    },

    introduce() {
        console.log('My name is '+ profile.userName + ' and I am '+ profile.age + ' years old.');
    }

}

profile.studentAt()
profile.introduce()