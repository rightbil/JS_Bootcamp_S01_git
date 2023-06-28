//Assignment W1D2 Functions
// First do the readings and complete the following tasks from The JavaScript Language book. Try to
// complete the answers before looking at the solutions. Implement the coding assignments in VSCode.
// JavaScript Fundamentals chapter
// Readings
// The “switch” statement
// • Rewrite the “Switch” into an “if”
// • Rewrite “if” into “switch”
// Functions
// • Rewrite the function using “?” or “||”
// • Function min(a, b)
// • Function pow(x, n)
// Programming homeworks
// Put your solutions for the following into your GitHub course repository according to the instructions in
// Sakai > Resources > lab helpers > setupGithubRepository.pdf. Be sure to include function calls that test
// your functions.

// Assignment05 - Taken from the pdf file
// 1. DONE 
// Write a function, computeSalesCommission that takes a Boolean argument for salaried and
// number argument for salesAmount. It should return the sales commission based on following
// rules. First make a defining table for the function.
// • If the salesman is salaried then
// • These is no commission for sales below $300
// • 1% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// • 2% for sales above $500 (only for the portion above 500 plus the 1% commission on the
// first 500)
// • If the salesman is not salaried then
// • no commission for sales below $300
// • 2% for sales between $300 and $500 (inclusive, and commission on the entire amount)
// • 3% for sales above $500 (only for the portion above 500 plus the 2% commission on the
// first 500)
function computeSalesCommission(isEmployeeSalaried, salesAmount) {
  let commission = 0;

  if (isEmployeeSalaried) {
    if (salesAmount >= 300 && salesAmount <= 500)
      commission = salesAmount * 0.01;
    else commission = 500 * 0.01 + (salesAmount - 500) * 0.02;
  }

  // if employee is not salaried
  else {
    if (salesAmount >= 300 && salesAmount < 500)
      commission = salesAmount * 0.02;
    else if (salesAmount > 500)
      commission = 500 * 0.02 + (salesAmount - 500) * 0.03;
  }
  return commission;
}

console.log("expect 0: ", computeSalesCommission(true, 200)); // ask sami why -1
console.log("expect 0: ", computeSalesCommission(false, 200));
console.log("expect 3: ", computeSalesCommission(true, 300));
console.log("expect 6: ", computeSalesCommission(false, 300));
console.log("expect 65: ", computeSalesCommission(true, 3500));
console.log("expect 100: ", computeSalesCommission(false, 3500));
// 2. DONE
// Make a defining table and function that will return the balance of a savings account that
// compounds interest monthly. Parameters for the function will be:
// • initial amount
// • annual interest rate
// • number of years to compound

let compoundInterest = (
  initialAmount,
  annualInterestRate,
  numberOfYearsToCompound
) =>
  initialAmount *
  Math.pow(1.0 + annualInterestRate / 100.0, numberOfYearsToCompound);

console.log("expect 110.47", compoundInterest(100, 10, 1)); // as of investor.gov it should be 110
console.log("expect 16470.09", compoundInterest(10000, 5, 10)); //and 16288.94 centes

// 3 DONE

let calcDownpayment = (costOfHouse) => {
  let downpayment = 0;
  if (costOfHouse < 50000) downpayment = costOfHouse * 0.05;
  else if (costOfHouse >= 50000 && costOfHouse < 100000)
    downpayment = 2500 + (costOfHouse - 50000) * 0.1;
  else if (costOfHouse >= 100000 && costOfHouse <= 200000)
    downpayment = 7500 + (costOfHouse - 100000) * 0.15;
  else if (costOfHouse > 200000)
    downpayment = 20000 + (costOfHouse - 200000) * 0.1;
  return downpayment;
};

console.log("expect 2000: ", calcDownpayment(40000));
console.log("expect 2500: ", calcDownpayment(50000));
console.log("expect 7500: ", calcDownpayment(100000));
console.log("expect 25000: ", calcDownpayment(250000));

 //4 Sum is DONE 

console.log("\nQ6- compute the sum of digits in a given interger");

let sumDigits = (givenNumber) => {
  let remainder;
  let sumOfDigits = 0;

  do {
    remainder = givenNumber % 10;
    sumOfDigits = sumOfDigits + remainder;
    givenNumber = Math.floor(givenNumber / 10); // floor is needed to force integer divisioin
  } while (givenNumber > 9);
  return (sumOfDigits += givenNumber);
};
console.log("expect 10:", sumDigits(1234));
console.log("expect 3:", sumDigits(102));
console.log("expect 8:", sumDigits(8));


let multDigits = (givenNumber) => {
    let remainder=1;
    let sumOfDigits = 1;
  // Needs correction here 
    do {
      remainder = givenNumber % 10;
      sumOfDigits = sumOfDigits * remainder;
      givenNumber = Math.floor(givenNumber / 10); // floor is needed to force integer divisioin
    } while (givenNumber > 9);
    return (sumOfDigits *= givenNumber);
  };

console.log("expect 24:",multDigits(1234));
console.log("expect 0:",multDigits(102));
console.log("expect 8:",multDigits(8));

//5

// Write a function, convertFahrenheit, that takes an input parameter with a temperature in Fahrenheit
// and returns the temperature in Celsius.
// console.log("expect 0: ", convertFahrenheit (32));
// console.log("expect -17.7778: ", convertFahrenheit (0));
// console.log("expect 100: ", convertFahrenheit (212));
// console.log("expect 37.7778: ", convertFahrenheit (100));
// //6
// Write a function that takes x and y co-ordinates of two points as inputs and returns the distance between these two points based on the formula, d = √( x 2 − x 1 ) 2 + ( y 2 − y 1 ) 2
// console.log("expect 7.07 : ", calcDistance (0, 0, 5, 5));
