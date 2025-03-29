// ==============================================
// (6) Getters and Setters
// ==============================================

/**
 * DEFINITION:
 * Special methods that control access to object properties.
 */

const person = {
  firstName: "Nasreddine",
  lastName: "Boudellal",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(" ");
  },
};

person.fullName = "Injaz Club";
console.log(person.firstName); // 'Injaz'
