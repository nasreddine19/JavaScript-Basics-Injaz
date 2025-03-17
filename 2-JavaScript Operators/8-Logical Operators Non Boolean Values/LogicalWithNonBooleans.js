/**
 * In JavaScript, logical operators can work with non-boolean values.
 */


/* AND(&&) 
    If the first value is truthy, it returns the second value. 
    If the first value is falsy, it returns the first value.*/ 
let result = "Hello" && 10; // result is 10

/* OR(||) 
    If the first value is truthy, it returns the first value. 
    If the first value is falsy, it returns the second value.
*/
let x = '' || 'Hi There!' // x is 'Hi There!'

/**
 * Nullish Coalescing (??): Returns the right value only if the left value is null or undefined.
 */
let y = 0 ?? 'Nasreddine' // y is 0 (because 0 is not null or undefined)

/**
 * Truthy and Falsy Values
    In JavaScript, some values are considered falsy (treated as false), 
    and everything else is truthy (treated as true).

    1- Falsy Values:
        - false
        - 0 
        - '' (empty string)
        - null
        - undefined
        - NaN

    2- Truthy Values:
        - true
        - 1, -1 , 100 (any non zero number)
        - 'Nasreddine' (any non empty string)
        - [] (empty array)
        - {} (empty object)
 */

