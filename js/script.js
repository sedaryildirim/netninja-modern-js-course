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
// let age = 25;

// different types can be equal with loose comparison types as JS does type conversion in the background
// console.log(age == 25);
// console.log(age == '25');

// console.log(age != 25);
// console.log(age != '25');

// strict comparison types
// is age the same type an value of number 25
// console.log(age === 25);
// true
// console.log(age === '25');
// false

// is age not equal to 25, false as it  is age = 25
// console.log(age !== 25);

// is  age not equal to string 25 = true
// console.log(age !== '25');

// type conversion

// let score = '100';

// turns score string variable into a number data type from a string data type
// score = Number(score)
// console.log(score + 1);

// string(variable) works in opposite
// score = String(score);
// console.log(score + 1);

// shows data type of variable
// console.log(typeof score);


// NaN, hello is NaN so cant switch data types
// let greeting = 'hello';
// result = Number(greeting);
// console.log(result);

// result = String(50);
// console.log(result);

// continue from here
// https://www.youtube.com/watch?v=JloLGV9DmtQ&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=4

// control flows
// for loop

// for(let i = 0; i < 5; i++){
//     console.log('in loop', i);
// }

// console.log('loop finished');

// const names = ['shaun', 'mario', 'luigi'];

// for(let i = 0; i < names.length; i++){
//     console.log(i)
// }

// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }

// for(let i = 0; i < names.length; i++){
//     let html = `<div> ${names[i]} </div>`
//     console.log(html);
// }

//control flows
// while loop
// const names = ['shaun', 'mario', 'luigi'];
// let i = 0;

// while (i < names.length) {
//     console.log(names[i]);
//     i++;
// }

// do while loops
// https://youtu.be/JloLGV9DmtQ?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=1051
// let i = 3;

// do {
//     console.log('val of i is ', i);
//     i++;
// } while (i<5);

// if statements
// conditional statements
// code block only executes if true once
// https://youtu.be/JloLGV9DmtQ?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=1121
// const age = 25;

// if(age > 20) {
//     console.log('you are over 20');
// }

// const ninjas = ['sid', 'ryu', 'chun-li', 'whoops'];

// if(ninjas.length >3) {
//     console.log("that's a lot of ninjas");
// }

// else statements 
// https://youtu.be/JloLGV9DmtQ?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=1388
// const password = 'passd11';

// if(password.length >= 8) {
//     console.log("that's a long password");
// } else {
//     console.log("that's not long enough");
// }

// different multiple conditions - chaining else ifs
// https://youtu.be/JloLGV9DmtQ?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=1542
// const password = 'pas12312312sd11';

// if(password.length >=12){
//     console.log("that's a very very very strong password")
// } else if (password.length >= 8) {
//     console.log("that's a long password");
// } else {
//     console.log("that's not long enough");
// }

// logical operators OR || and AND &&
// https://youtu.be/JloLGV9DmtQ?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=1654

// const password = 'p@1234';

// checks for length for greater than 12 AND has @ symbol, other wise runs to next else if
// if(password.length >=12 && password.includes('@')){
// console.log("that's a very very very strong password")
// checks for length greater 8 OR includes @ symbol and runs like 450
// } else if (password.length >= 8 || password.includes('@') && password.length >5) {
//     console.log("that's a strong password");
// } else {
//     console.log("that's not strong enough");
// }

// logical NOT (!)
// https://youtu.be/JloLGV9DmtQ?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=1925

// let user = false;
// switches false to true
// if (!user)  {
//     console.log('you have to be logged in');
// }

// console.log(true);
// console.log(false);
// console.log(!true);
// console.log(!false);


// break and continue
// https://youtu.be/JloLGV9DmtQ?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=2126

// const scores = [50, 25, 0, 30, 100, 20, 10];

// for(let i = 0; i < scores.length;  i++) {

//     if(scores[i] === 0){
//         continue;
//     }

//     console.log('your score is', scores[i]);

//     if(scores[i] === 100) {
//         console.log('congrats, top score');
//         break;
//     }
// }

// break breaks the loop when score === 100
// continue continues the loop without progressing to the following loop

// switch statements
// https://youtu.be/JloLGV9DmtQ?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=2352

// const grade = 'd';

// switch(grade){
//     case 'a':
//     console.log('you got an a!');
//     break;
//     case 'b':
//     console.log('you got an b!');
//     break;
//     case 'c':
//     console.log('you got an c!');
//     break;
//     case 'd':
//     console.log('you got an d!');
//     break;
//     case 'e':
//     console.log('you got an e!');
//     break;
//     case 'f':
//     console.log('you got an f!');
//     break;
//     default:
//     console.log('not a valid grade');
// }

// https://youtu.be/JloLGV9DmtQ?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=2599

// Switch statements use strict equality

// Variables & Block scope
// https://youtu.be/JloLGV9DmtQ?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=2685

// this is a global scope variable, can be accessed any where
// let age = 30;/

// if (true) {
// let age = 40; //  is a local variable, can only be accessed inside the current code block / local scope
// let name = 'sid';
// console.log('inside first code block', age, name);
// }

// console.log('inside first code block', age, name);

// also true for nested code blocks within other code blocks

// Chapter 4
// Functions and Methods
// https://www.youtube.com/watch?v=xUI5Tsl2JpY&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=4
// functions allow us to define a block of code and allow us to call it whenever we want

// function declaration

// function greet(){
//     console.log('hello');
// }

// function expression
// const variable expressed as a function
// const speak = function(){
//     console.log('good day');
// };

// greet();
// speak();

// arguments and parameters
// https://youtu.be/xUI5Tsl2JpY?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=544

// const speak = function(name = 'luigi', time = 'night'){
//     console.log(`good ${time} ${name}`);
// };

// speak();
// speak('sid', 'morning');

// return functions 
// https://youtu.be/xUI5Tsl2JpY?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=832

// const calcArea = function(radius){
//     return 3.14* radius ** 2;
// };

// const area = calcArea(5);
// console.log(area);

// arrow functions 
// https://youtu.be/xUI5Tsl2JpY?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=1102


// no brackets if 1 parameter, need brackets if no parameter or more than 1 parameter
// const calcArea = radius => 3.14 * radius **2;;

// const area = calcArea(5);
// console.log(area);

// const greet = () => 'hello, world';
// const result = greet();
// console.log(result);

// const bill = function(products, tax){
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] *tax;
//     }
//     return total
// }

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++){
//         total += products[i] + products[i] *tax;
//     }
//     return total
// };

// console.log(bill([10, 15, 30], 0.2));

// methods and functions

// const name = 'sid';

// functions

// const greet = () => 'hello';

// let resultOne = greet();

// console.log(resultOne);

// methods
//  let resultTwo = name.toUpperCase();
//  console.log(resultTwo);

// call back functions
// https://youtu.be/xUI5Tsl2JpY?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=1845

// const myFunc = (callBackFunc) => {
// do something
// let value = 50;
// callBackFunc(value);
// };

// myFunc(value  => {
// do something
// console.log(value);
// });

// let people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// const logPerson = (person, index) => {
// console.log(`${index} - hello ${person}`);
// };

// people.forEach(logPerson);

// people.forEach((person, index) => {
//     console.log(index, person);
// });

// Reference to UI

// const ul = document.querySelector('.people');

// const people = ['mario', 'luigi', 'ryu', 'shaun', 'chun-li'];

// let html = '';

// people.forEach(person => {
// create html template
//     html += `<li style"color: purple"> ${person}</li>`;
// });

// console.log(html);
// ul.innerHTML = html;


// chapter 5
// https://youtu.be/X0ipw1k7ygU?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=8
// objects

// object literals
// objects start with {}

// let user = {
//     name: 'Crystal',
//     age: '30',
//     email: 'crystal@netninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac and cheese rules', '1000 things to make with marmite']
// };

// console.log(user);
// console.log(user.name); // calls name from var user

// updating properties properties
// https://youtu.be/X0ipw1k7ygU?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=462

// user.age = 35;
// console.log(user.age);

// both work

// console.log(user['name']);
// user['name'] = 'chun-li';
// console.log(user['name']);

// shows user is a object type
// console.log(typeof user); 

// adding methods to objects
// https://youtu.be/X0ipw1k7ygU?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=566
// function inside a object
// let user = {
//     name: 'Crystal',
//     age: '30',
//     email: 'crystal@netninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac and cheese rules', '1000 things to make with marmite'],
//     login: function(){
//         console.log('user has logged in');
//     },
//     logout: function(){
//         console.log('the user has logged out');
//     },
//     logBlogs: function(){

//     }
// };

// user.login();
// user.logout();

// const name = 'mario';

// this keyword
// https://youtu.be/X0ipw1k7ygU?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=745

// let user = {
//     name: 'Crystal',
//     age: '30',
//     email: 'crystal@netninja.co.uk',
//     location: 'berlin',
//     blogs: ['why mac and cheese rules', '1000 things to make with marmite'],
//     login() {
//         console.log('user has logged in');
//     },
//     logout()  {
//         console.log('the user has logged out');
//     },
//     logBlogs() {
//         // this refers to THIS object
//         console.log('this user has written the following blogs: ');
//         this.blogs.forEach(blog =>{
//             console.log(blog);
//         })
//     }
// };

// user.logBlogs();

// math object
// https://youtu.be/X0ipw1k7ygU?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=1356

console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

// rounds number to nearest integer, up or down
console.log(Math.round(area));
// floors the number to lowest full integer
console.log(Math.floor(area));
// ceiling of nearest full number, opposite of floor
console.log(Math.ceil(area));
// takes away the decimal point integer 
console.log(Math.trunc(area));

// random numbers

// random number between 0 and 1
const random = Math.random();
console.log(random);

// rounds number to either 0 or 1, then times by 100 to give number between 0-100
console.log(Math.round(random * 100));

// primitive and reference types
// https://youtu.be/X0ipw1k7ygU?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=1700

// JS & The Dom
// https://youtu.be/wKBu_dEaF9E?list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&t=2