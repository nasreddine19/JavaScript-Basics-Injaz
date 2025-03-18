/**
 * We need to make a function that takes two numbers and gives back the bigger one. 
 * If the first number is bigger, we return it. 
 * If the second number is bigger, we return that one instead.
 */

// Solution
function maxNum(a,b){
    return a >= b ? a :b
}

console.log(maxNum(32,45))