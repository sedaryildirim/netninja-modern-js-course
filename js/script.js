// Lesson 1 

// pop up on page load that says hello world
// alert('hello world');

// logs 1, 2, 3 to console in developer tools
console.log(1); 
console.log(2); 
console.log(3); 

// variables
// variables store value to be reused later
let age = 25;
let year = 2019;

// let age (variable) = 25
// let year (variable) = 2019
// let keyword creates variable
console.log(age, year);

// js reads in  order
// age is reassigned to 30
age = 30;
console.log(age, year);

// let allows variables to be changed/amended
// const keyword does not allow variables to be reassigned
const points = 100;
console.log(points);

// variables must use camelCase
// variables can only contain letters, numbers, underscores or $ sign
// variables cannot start with a number
// variables cannot use JS reserved keywords

// JS data Types
// Numbers - 1, 2, 3 
// String - Text in ' ' or " ", numbers in ' ' or " " become strings data type and not number data type
// Boolean - True or False
// Null - Explicity set a variable with no value
// Undefined - Automatically given to variables that have not yet been defined
// Object - Data Structures - Arrays, Dates, Literals
// Symbol - Used with Objects

//  Continue from here > https://youtu.be/FhguwBJeqWs?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=1239

// strings
console.log('hello, world');

// stores mario@thenetniinja.co.uk inside the variable, email, console.log then prints email to the console
let email = 'mario@thenetninja.co.uk';
console.log(email);

// string concatenation
// adds 2 or more strings together which can also be placed into another variable

let firstName = 'brandon';
let lastName = 'ninja';

console.log(firstName + lastName);

let fullName = firstName + ' ' + lastName;

console.log(fullName);

// getting characters
// below will console log the 1st letter starting from 0
console.log(fullName[0]);
// below will console log the 1st and 5th letters starting from 0
console.log(fullName[0, 5]);

// string length
// returns the length of the fullName variable, spaces also count as a length
console.log(fullName.length);

// string methods - methods are associated with objects, while functions are not
// Function — a set of instructions that perform a task.
// Method — a set of instructions that are associated with an object.
// below is a method to turn string into uppercase
console.log(fullName.toUpperCase());
// below is a method to turn string into lowercase
console.log(fullName.toLowerCase());

// () means that something is a method, eg .toLowerCase() is a method
// below stores saved value to another variable that can be called again
let result = fullName.toLocaleLowerCase();

console.log(result);

// creates new variable that searches the string of email variable and finds the position of a '@' string
let index = email.indexOf('@');
// logs it to console
console.log(index);

// common string methods
// methods are just functions that belong to a specific object or object type


// continue from here
// https://youtu.be/FhguwBJeqWs?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=1875