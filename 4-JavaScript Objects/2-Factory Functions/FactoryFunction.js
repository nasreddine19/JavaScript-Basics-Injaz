/**
 * A factory function is a function that creates and returns an object.
 * It is like a factory that produces objects.
 */

// Example

function createProfile(userName, age) {
  return {
    userName: userName,
    age: age,
    studentAt: function () {
      console.log("Faculty of Science and Technology");
    },

    introduce() {
        console.log('My name is '+ userName + ' and I am '+ age + ' years old.');
    },
  };
}

const profile1 = createProfile('Nasreddine', 22);
console.log(profile1)
profile1.studentAt()
profile1.introduce()
const profile2 = createProfile('Alex', 26);




