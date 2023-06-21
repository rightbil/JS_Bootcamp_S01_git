/*1. Write a program to compute sales commission based on following rules:
• If the salesman is salaried then
• These is no commission for sales below $300
• 1% for sales between $300 and $500 (exclusive)
• 2% for sales above $500
• If the salesman is not salaried then
• 2% for sales between $300 and $500 (exclusive)
• 3% for sales above $500
*/ 
console.log("Q1 - Commission calculation for salaried and non-salaried employees")
let prompt = require("prompt-sync")()
let isEmployeeSalaried = prompt("Is the employee salarid (Y/N)? ")
let salesAmount = prompt("Enter the Salary amount ? $")

if (isEmployeeSalaried === "Y") { // why .isuppercase is not working 

    if (salesAmount < 300) {
        console.log(`No commision for this amount $ ${salesAmount}`)
    } else if (salesAmount > 300 && salesAmount < 500) {
        commission = salesAmount * 0.01
        console.log(`The Commission for $${salesAmount} is $${commission} `)
    } else {
        commission = salesAmount * 0.02
        console.log(`The Commission for $${salesAmount} is $${commission} `)
    }
} 
// if employee is not salaried 
else {

    if (salesAmount > 300 && salesAmount < 500) {
        commission = salesAmount * 0.02
        console.log(`The Commission for $${salesAmount} is $${commission} `)
    } else if (salesAmount > 500) {
        commission = salesAmount * 0.03
        console.log(`The Commission for $${salesAmount} is $${commission} `)
    }
}
// /*else {

//     (salesAmount > 300 && salesAmount < 500) ? {
//         commission = salesAmount * 0.02
//         console.log(`The Commission for $${salesAmount} is $${commission} `)
//     } :
//     salesAmount > 500 {
//         commission = salesAmount * 0.03
//         console.log(`The Commission for $${salesAmount} is $${commission} `)
//     }
// }
// */


/*2. Write a loop that continually prompts for age until you enter age older than 18
• Write both while and do while versions.
 */
console.log("\nQ -2 Enter till you get age older than 18")
let userInput;
let age;
do {
  userInput = require("prompt-sync")();
   age = userInput("Enter the age ?");
  console.log(`you entered age ${age}`);
} while (age < 18 );
console.log("Good Bye!");


/*
3. Make a defining table and program to print out the balance of a savings account that compounds interest monthly. 
 Prompt the user for the
• initial amount
• annual interest rate
• number of years to compound
*/
 console.log("\nQ3 - Total Savings for annually compounded interest")
let financialInformation = require("prompt-sync")()
let initialAmount = financialInformation("Initial Amount ? "); 
let annualInterestRate =financialInformation("Annual interest Rate (eg. 5 to mean 5%? ");
let numberOfYearsToCompound=financialInformation("Number of years to Compound? "); 
let totalBalance = initialAmount * Math.pow((1 + (annualInterestRate/100)),numberOfYearsToCompound)
console.log(totalBalance)


/*4. Write code to print the number patterns on the console
12345
12345
12345
12345
12345
1 
22 
333 
4444 
55555
55555 
4444 
333 
22 
1
*/
console.log("\nQ4 - printing designs, loops")
for(let i =1; i<=5; i++){
    let catchAsString=''
    for(let j=1; j<=5; j++){
    catchAsString = catchAsString + j;
 }
 console.log(catchAsString)
}


for (let i = 1; i <= 5; i++) {
  let catchAsString2 = "";
  for (let j = 1; j <= i; j++) {
    catchAsString2 = catchAsString2 + j;
  }
  console.log(catchAsString2);
}

/*
5. Cost of House Down Payment
Make a defining table and then write a program that calculates down payment for a home loan based on following rules.
Your program should prompt for the cost and write the down payment amount to the console.
Cost of House
Down Payment
$0 to less than 50K     || 5% of the cost 
$50K to less than 100K  || $1000 + 10% of (cost - $50K)
$100K to less than 200K || $2000 + 15% of (cost - $100K)
$200K and above         || $5000 + 10% of (cost - $200K)
*/
console.log("\nQ5- Downpayment calculations ")
let userNumberInput= require("prompt-sync")()
let costOfHouse = userNumberInput('Cost of Your House ? ($)')
let downpayment =0
if(costOfHouse < 50000) 
  downpayment = costOfHouse * 0.05

else if (costOfHouse >=50000 && costOfHouse < 100000)
downpayment= 1000 + (costOfHouse - 50000 ) * 0.1

else if (costOfHouse >= 100000 && costOfHouse <= 200000)
downpayment= 2000 + (costOfHouse - 100000 ) * 0.15

else if (costOfHouse > 200000)
downpayment= 5000 + (costOfHouse - 200000 ) * 0.01

console.log(`The house costs $${costOfHouse} and its downpayment $${downpayment} `)


// Question 6
/*
6. Write a JavaScript program to prompt for an integer and compute the sum of all the digits.
Input | Output
123   | 6
102   | 3
8     | 8
*/
console.log("\nQ6- compute the sum of digits in a given interger")
let input = require("prompt-sync")()
let givenNumber = input("Enter a whole number eg. 14783? ")
let remainder;
let sumOfDigits =0;

do{

  remainder= givenNumber%10
  sumOfDigits = sumOfDigits + remainder
  givenNumber = Math.floor(givenNumber/10) // floor is needed to force integer divisioin
}
while(givenNumber > 9)
sumOfDigits+=givenNumber
console.log(`sum of all the digits is ${sumOfDigits}`)


// Questions for Sami / class 
//1. toupper why not working 
//2. are there cousine prompt-sync 
//3. question #2 the non salaried logic why it doesn't work with short circuite show the code 
