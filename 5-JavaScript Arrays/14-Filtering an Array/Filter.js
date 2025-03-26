/**
 * Filtering an Array
 * 
 * Create new array with matching items
 */

const ages = [18, 21, 25, 30];

const filteredAges = ages.filter(age => age >= 21);
console.log("21+ ages:", filteredAges); // [21, 25, 30]