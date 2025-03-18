/**
 * Instructions:
    Use the provided code template to solve the problem.
    Follow the comments in the code to complete each step.
    Use camelCase for variables and UPPER_CASE for constants.
    Test your code and check the results in the console.

Problem:
You are given the following data:
    -Income: 1000
    -Expenses: 400
    -Tax Rate: 15% (0.15)

Your task is to calculate the net income after expenses and taxes, 
and then determine the following:
    1-Is the net income profitable? (Profitable means net income > 500)
    2-Are the expenses too high? (Expenses are too high if they are greater than 500)
    3-Compare income with the string "1000" using both loose equality (==) and strict equality (===).
    4-Use a ternary operator to set the status to "Good" if the net income is profitable, otherwise set it to "Bad".
    5-Use logical operators (&&, ||) to check if the status is "Good" and the net income is positive.
    6-Use logical operators with non-booleans to set default values for income and expenses.
    7-Use operator precedence to calculate a final result based on the net income.
 */

// Solution
const TAX_RATE = 0.15; // 15% tax rate
let income = 1000;
let expenses = 400;


let netIncome = income - expenses; // Subtract expenses from income
let tax = netIncome * TAX_RATE; // Calculate tax
netIncome -= tax; // Subtract tax from net income


let isProfitable = netIncome > 500; // Check if net income is profitable
let isExpensive = expenses > 500; // Check if expenses are too high


let isIncomeEqual = income == "1000"; // Loose equality (true, because values are the same)
let isIncomeStrictEqual = income === "1000"; // Strict equality (false, because types are different)


let statuus = isProfitable ? "Good" : "Bad"; // Set status based on profitability


let isGoodStatus = statuus === "Good" && netIncome > 0; // Check if status is "Good" and net income is positive
let isWarning = expenses > 500 || tax > 100; // Check if expenses are too high or tax is too high


let defaultIncome = income || 0; // Use income if it exists, otherwise use 0
let defaultExpenses = expenses && 0; // Use 0 if expenses exist, otherwise use expenses


let finalResult = (netIncome + 100) * 2 > 1500 ? "High" : "Low"; // Calculate final result


console.log("Net Income:", netIncome); // 510
console.log("Is Profitable?", isProfitable); // true
console.log("Is Expensive?", isExpensive); // false
console.log("Is Income Equal (Loose)?", isIncomeEqual); // true
console.log("Is Income Equal (Strict)?", isIncomeStrictEqual); // false
console.log("Status:", statuus); // "Good"
console.log("Is Good Status?", isGoodStatus); // true
console.log("Is Warning?", isWarning); // false
console.log("Default Income:", defaultIncome); // 1000
console.log("Default Expenses:", defaultExpenses); // 0
console.log("Final Result:", finalResult); // "High"