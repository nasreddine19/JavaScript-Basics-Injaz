/**
 * Sorting Arrays
 */

const randomNumbers = [3, 1, 4, 2];

// Sort numbers (needs special handling)
const sortedNumbers = [...randomNumbers].sort((a, b) => a - b);
/**
 * The Compare Function (a, b) => a - b
    This is where the real magic happens. The compare function determines the sort order:

    1-How it works:
        The function should return:
            -Negative value if a should come before b
            -Positive value if a should come after b
            -Zero if they're equal

    2-Numerical sorting logic:
        a - b gives us ascending order (small to large)
            -If a < b, a - b is negative → a comes first
            -If a > b, a - b is positive → b comes first
            -If equal, returns 0 → order unchanged

    3-Example Walkthrough:
        For array [3, 1, 2]:
            -Compare 3 and 1: 3 - 1 = 2 (positive) → [1, 3, 2]
            -Compare 3 and 2: 3 - 2 = 1 (positive) → [1, 2, 3]
            -Compare 1 and 2: 1 - 2 = -1 (negative) → order correct
 */
console.log(sortedNumbers); // [1, 2, 3, 4]

// Sort strings
const names = ['Carl', 'Alice', 'Bob'];
console.log(names.sort()); // ['Alice', 'Bob', 'Carl']