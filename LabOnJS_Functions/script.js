//Challenge 1
// Step 1: Create a function with the function name as ageCalculator and pass two parameters, first one is birthYear and the second one is the presentYear.
//Step 2: Pass two arguments as birthYear and presentYear while calling the function.
//Step 3: Calculate the possible age and return it.
//Step 4: Display the age on the console.
// Your code goes here
function ageCalculator(birthYear, presentYear) {
  let currentAge = presentYear - birthYear;
  return currentAge;
}

var birth = 2005;
var date = 2023;
var age = ageCalculator(birth, date);
console.log('Current age is: ' + age);
document.write('Current age is: ' + age + '<br><br>');

//Challenge 2: Following is the code snippet commented , remove the comments and get started with the challenge. Find the errors and rewrite the function.

//Function Addition(){
//let a = a+b;
//return a;
//console.log(a);
//}
//Addition(2,3)

// the keyword is function, not Function, a,b are parameters to be passed
function Addition(a, b) {
  // we cannot redefine a variable using 'let' keyword

  let c = a + b;
  return c;
}
// we need to assign the value returned from the function
var a = Addition(2, 3);
// the fuction stops after return statement
console.log(a);
document.write('The sum is: ' + a + '<br><br>');

//Challenge 3:
// Step 1: Declare the variable "x" with "var" keyword and store a string value "I can access it."
//Step 2: Console log the value above the declaration of x variable.
//Step 3: Console log the value after the decalaration of x.
console.log(x); // This will log "undefined"
document.write(x + '<br><br>');
var x = 'I can access it.';
console.log(x); // This will log "I can access it."
document.write(x + '<br><br>');

//Challenge 4: Create an arrow function for adding two numbers. Console log the value.
var addNumbers = (a, b) => {
  let sum = a + b;
  console.log(sum);
  return sum;
};
var sum = addNumbers(5, 7);
document.write(sum + '<br><br>');
