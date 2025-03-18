/**
 * We need to create two functions:
    The first function will take an array of numbers and print the even numbers.
    The second function will take an array of numbers and print the odd numbers.
 */

// Solution
function evenNumbers(arr) {
   for (const num of arr)
       if (num % 2 === 0)
           console.log(num)
}

evenNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]) 

function oddNumbers(arr) {
   for (const num of arr)
       if (num % 2 === 1)
           console.log(num)
}

oddNumbers([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20])