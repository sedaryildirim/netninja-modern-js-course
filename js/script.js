// Lesson 1 

// pop up on page load that says hello world
// alert('hello world');

// logs 1, 2, 3 to console in developer tools
// console.log(1); 
// console.log(2); 
// console.log(3); 

// variables
// variables store value to be reused later
// let age = 25;
// let year = 2019;

// let age (variable) = 25
// let year (variable) = 2019
// let keyword creates variable
// console.log(age, year);

// js reads in  order
// age is reassigned to 30
// age = 30;
// console.log(age, year);

// let allows variables to be changed/amended
// const keyword does not allow variables to be reassigned
// const points = 100;
// console.log(points);

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
// console.log('hello, world');

// stores mario@thenetniinja.co.uk inside the variable, email, console.log then prints email to the console
// let email = 'mario@thenetninja.co.uk';
// console.log(email);

// string concatenation
// adds 2 or more strings together which can also be placed into another variable

// let firstName = 'brandon';
// let lastName = 'ninja';

// console.log(firstName + lastName);

// let fullName = firstName + ' ' + lastName;

// console.log(fullName);

// getting characters
// below will console log the 1st letter starting from 0
// console.log(fullName[0]);
// below will console log the 1st and 5th letters starting from 0
// console.log(fullName[0, 5]);

// string length
// returns the length of the fullName variable, spaces also count as a length
// console.log(fullName.length);

// string methods - methods are associated with objects, while functions are not
// Function — a set of instructions that perform a task.
// Method — a set of instructions that are associated with an object.
// below is a method to turn string into uppercase
// console.log(fullName.toUpperCase()); 
// .toUpperCase is a method being called on a string

// below is a method to turn string into lowercase
// console.log(fullName.toLowerCase());
// .toLowerCase is a method being called on a string

// () means that something is a method, eg .toLowerCase() is a method
// below stores saved value to another variable that can be called again
// let result = fullName.toLowerCase();

// console.log(result);

// creates new variable that searches the string of email variable and finds the position of a '@' string
// let index = email.indexOf('@');
// logs it to console
// console.log(index);

// continue from here
// https://youtu.be/FhguwBJeqWs?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=1875

// common string methods
// methods are just functions that belong to a specific object or object type

// let email = 'mario@thenetninja.co.uk';

// .lastIndexOf is method called on email, which is an object, which is inside the variable email
// it finds the last index of N, and returns it as a number data type

// let result0 = email.lastIndexOf('n');
// console.log(result0);

// below slices the object from position 0 to position 5, which will show first 5 characters in the string

// let result0 = email.slice(0,5);
// console.log(result0);

// substr gets 10 characters, starting from position 4, going to position 14
// 0 1 2 3 >4< 5 6 7 8 9 10 11 12 13 >14< 15 16 17 18 19 20 21 22 23
// let result0 = email.substr(4,10);
// let result0 = email.substr(4,10);
// console.log(email.length);
// console.log(result0);

// .replace replaces the first M with a W
// let result0 = email.replace('m', 'w');

// will only replace the first instance of
// let result0 = email.replace('n', 'w');
// console.log(result0);

// Number Data Types

//  let radius = 10;
//  const pi = 3.14;
 
//  console.log(radius, pi);

// math operators >> +, -, *. /, ** to the power of, % get remainder of
// console.log(10/2);

// takes the variable radius, divides by 3 and gives us the remainder
// let result = radius % 3;

// works out the area of radius
// let result = pi * radius **2;

// order of operation
// BIDMAS
// BRACKETS > INDICES > DIVISION > MULTIPLICATION > ADDITION > SUBTRACTION

// let result = 5 * (10-3)**2;
// console.log(result);

// let likes = 10;

// likes = likes + 1;
// has a shorthand to add +
// likes++;

// subtraction shorthand
// likes--;

// below adds 10
// + takes the current value, and = adds on 10
// likes +=10;

// works with subtraction
// likes -=5;

// multiplication
// likes *=02;

// division
// likes /=2;

// console.log(likes);

// NaN not a number

// below will log nan, aka an error
// console.log(5/'hello');

// concatenate numbers

// let result = 'the blog has ' + likes + ' likes'
// console.log(result);

// template strings
// const title = 'best reads of 2019';
// const author = 'mario';
// const likes = 30;

// concatenation way
// result = 'the blog called ' + title + ' by ' + ' author' + ' has ' + likes + ' likes';
// console.log(result);

// https://youtu.be/FhguwBJeqWs?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=3001
// watch above
// template string way
// let result = `the blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);

// creating html templates
// let html = `
// <h2>${title}</h2>
// <p>by ${author}</p>
// <span> this blog has ${likes} </span>
// `

// console.log(html);

// variable array
// let ninjas = ['ninja one', 'ninja two', 'ninja three'];
// console.log(ninjas);

// logs the first position of array (starts from 0)
// console.log(ninjas[1]);

// overrides the ninja two with ninja alpha
// ninjas[1] = 'ninja alpha'
// console.log(ninjas);

// let ages = [20, 25, 30, 35];
// console.log(ages[2]);

// arrays can store different data types and multiple data types
// let ages = ['one', 'two', 25, 30, 35];
// console.log(ages[2]);

// logs how many items in an array
// console.log(ages.length);

// array methods
// joining array items into a string
// watch https://youtu.be/FhguwBJeqWs?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=3457

// let result = ninjas.join(',');
// console.log(result);
// above joins all items in ninjas array into a string, separated by a comma

// let result = ninjas.indexOf('ninja three');
// shows the position of ninja three in the array

// join 2 arrays together
// let result = ninjas.concat(['ken, crystal']);

// push method pushes a new value to the array, returns length of new array with item pushed into
// let result = ninjas.push('spam');
// console.log(result);

// pop REMOVES the end value of the array and returns the name of the popped item 
// let result = ninjas.pop();
// console.log(result);


// null and undefined
// null is intentional lack of value

// let age = null;
// console.log(age, age + 3,`the age is ${age}`);

// lesson 15
// https://github.com/iamshaunjp/modern-javascript/blob/lesson-15/chapter_2/sandbox.js
// booleans
// https://youtu.be/FhguwBJeqWs?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=3916

// console.log(true, false, "true", "false");

// booleans and comparisons
// let email = 'luigi@theenetninja.co.uk';
// let names = ['name one', 'name two', 'name three'];
// let result = email.includes('@');

// console.log(result);

// let result = email.includes('!');
// let result = names.includes('name one');

// console.log(result)

// methods can return booleans

// comparison operators
// let age = 25;

// console.log(age == 25);
// console.log(age == 30);
// below is age NOT equal to 30 so becomes true
// console.log(age != 30);

// console.log(age > 20);
// console.log(age < 20);
// less than  or equal to
// console.log(age <= 25);
// console.log(age >= 25);

// let name = 'shaun';

// console.log(name == 'shaun');
// console.log(name == 'shaun');

// shaun is greater than crystal because of alphabetical order
// console.log(name > 'crystal');
// lower case letters are greater than uppercase letters
// console.log(name > 'Shaun');
// lower case shaun is greater than upper case crystal
// console.log(name > 'Crystal');

// loose comparison types
let age = 25;

// different types can be equal with loose comparison types as JS does type conversion in the background
// console.log(age == 25);
// console.log(age == '25');

// console.log(age != 25);
// console.log(age != '25');

// strict comparison types
// is age the same type an value of number 25
console.log(age === 25);
//true
console.log(age === '25');
// false

// is age not equal to 25, false as it  is age = 25
console.log(age !== 25);

// is  age not equal to string 25 = true
console.log(age !== '25');

// type conversion

let score = '100';

// turns score string variable into a number data type from a string data type
score = Number(score)
console.log(score + 1);

// string(variable) works in opposite
score = String(score);
console.log(score + 1);

// shows data type of variable
console.log(typeof score);


// NaN, hello is NaN so cant switch data types
let greeting = 'hello';
result = Number(greeting);
console.log(result);

result = String(50);
console.log(result);

// continue from here
// https://www.youtube.com/watch?v=JloLGV9DmtQ&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=4