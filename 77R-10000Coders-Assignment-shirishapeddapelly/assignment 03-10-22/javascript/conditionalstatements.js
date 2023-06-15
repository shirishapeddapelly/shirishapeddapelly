// conditional statements;;
//Conditional statements are used to perform different actions based on different conditions.

//Very often when you write code, you want to perform different actions for different decisions.

//In JavaScript we have the following conditional statements:

//Use (if) to specify a block of code to be executed, if a specified condition is true
//Use (else) to specify a block of code to be executed, if the same condition is false
//Use (else if) to specify a new condition to test, if the first condition is false
//Use (switch) to specify many alternative blocks of code to be executed

// if/else condition
//Use if to specify a block of code to be executed,
//if a specified condition is true. Use else to specify a block of code to be executed, if the same condition is false. Use else if to specify a new condition to test,
//if the first condition is false.

//if condition
let time2 = 12;
let time3 = 64;
if (time2 < time3) {
  console.log("time3 is greater");
}
// if else condition

let time4 = 5;
let time5 = 4;
//if (time4 < time5) {
//console.log(" time5 is greater");
//} else {
//console.log("time4 is greater");
//}
//ternary operator;
time4 < time5
  ? console.log("time5 is greater")
  : console.log("time4 is greater");

//else if condition
let time = 10;
let time1 = 10;
if (time1 < time) {
  console.log("time is greater");
} else if (time1 > time) {
  console.log("time1 is greater");
} else {
  console.log("both are equal");
}
//switch:

const db = new Date();

console.dir(db);

// const date = db.getDate();

// const month = db.getMonth() + 1;

// const year = db.getFullYear();
//write a code to disply a message which is the current month using switch statement and date object?

const month = 10;

console.log(month);

switch (month) {
  case 1:
    console.log("Today is jan");
    break;

  case 2:
    console.log("Today is feb");
    break;

  case 3:
    console.log("Today is mar");
    break;

  case 4:
    console.log("Today is apr");
    break;

  case 5:
    console.log("Today is may");
    break;

  case 6:
    console.log("Today is june");
    break;

  case 7:
    console.log("Today is july");
    break;

  case 8:
    console.log("Today is aug");
    break;
  case 9:
    console.log("Today is sep");
    break;
  case 10:
    console.log("Today is oct");
    break;
  case 11:
    console.log("Today is nov");
    break;
  case 12:
    console.log("Today is dec");
    break;

  default:
    console.log("Please enter proper input");
    break;
}

//console.dir(db);const month = db.getMonth() + 1;
