/**
 * We need to make a function that takes a number and checks:
    If the number is divisible by both 3 and 5, it returns "FizzBuzz".
    If the number is only divisible by 3, it returns "Fizz".
    If the number is only divisible by 5, it returns "Buzz".
    If the number is not divisible by 3 or 5, it returns the original number.
 */

// Solution

function Fizz(x) {
   if (x % 3 === 0 && x % 5 ===0) {
      return 'FizzBuzz'
   } else if (x % 3 === 0) {
      return 'Fizz'
   } else if (x % 5 === 0) {
      return 'Buzz'
   } else {
      return x
   }
}

console.log(Fizz(6))
console.log(Fizz(35))
console.log(Fizz(75))
console.log(Fizz(16))