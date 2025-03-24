/**
 * Finding Elements (Reference Types)
 */

const profiles = [
  {
    id: 1,
    userName: 'alice',
    job: 'Software Developer'
  },

  {
    id: 2,
    userName: 'Bob',
    job: 'Graphic Designer'
  },

  {
    id: 3,
    userName: 'Alex',
    job: 'Ai Engineer'
  }
];


const secondProfile = profiles.find(function(person) {
    return person.id === 2
})

console.log(secondProfile.userName) // 'Bob'