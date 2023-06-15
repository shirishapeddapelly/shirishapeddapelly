/*
BASICS IN A JS:
OBJECTS:
1.date 
2.math
3.setInterval
4.setTimeout
*/
//DATE()
const arrowFunction = () => {
  var A = new Date();
  console.log(A);
  var day = A.getDate();
  var month = A.getMonth();
  var year = A.getFullYear();
  var time = A.getHours();
  var minutes = A.getMinutes();
  var seconds = A.getSeconds();
  var millisec = A.getMilliseconds();
  console.log(`day ${day}`);
  console.log(`month ${month + 1}`);
  console.log(`year ${year}`);
  console.log(`hours ${time}`);
  console.log(`minutes ${minutes}`);
  console.log(`seconds ${seconds}`);
  console.log(`milliseconds ${millisec}`);
};
arrowFunction();

//MATH()
//max
console.log(Math.max(286, 345, 677, 767));
//
const sns = () => {
  var a = Math.max(286, 345, 677, 767);
  console.log(a); //767
};
sns();
//min
const sns1 = () => {
  var a = Math.min(286, 345, 677, 767);
  console.log(a); //286
};
sns1();

//ROUND
const sns2 = () => {
  var a = Math.round(28.49);
  console.log(a); //28
};
sns2();

//FLOOR//gives the out put decremented by 1
const sns3 = () => {
  var a = Math.floor(28.99);
  console.log(a); //28
};
sns3();
//ceil//gives the output incremeted by 1
const sns4 = () => {
  var a = Math.ceil(28.49);
  console.log(a); //29
};
sns4();

//RANDOM
const sns5 = () => {
  var a = Math.round(Math.random() * 100000);
  console.log(a);
};
sns5();
//setInterval() & setTimeout()
//SETINTERVAL//which print many times in the interval ofter delay time.By using clearTimeout() we can stop printing..
const intervalID = setInterval(myCallback, 5000);

function myCallback(a) {
  console.log("ten second(1)");

  //clearTimeout(intervalID);
}
//SETTIMEOUT//which print, only one time after the delay time
setTimeout(bca, 1000);
function bca() {
  console.log("hey hii");
}
console.log("10k coders");

//
//for each//
//let text = "";
const fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction() {
  console.log(fruits);
}

//map()
const numbers = [4, 625, 16, 25];
const newArr = numbers.map(Math.sqrt);
console.log(newArr);
//
//find
var items = [23, 56, 76, 78, 80];
var findOut = items.find((element) => element > 79);
console.log(findOut);
//fill
const numbers1 = [4, 625, 16, 25];
const newArr1 = numbers1.fill(15, 2, 4); //1st value,2nd start index,3rd end index
console.log(newArr1);
//
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
const fillTheFruits = fruits1.fill("Kiwi", 0, 1);
console.log(fillTheFruits);
//
//FILTER
const ages = [22, 17, 32, 43, 18];
function filterTheItems(age) {
  return age > 21;
}
//const ages = [22, 17, 32, 43, 18];
const result = ages.filter(filterTheItems);
console.log(result);
//
//for of loop
const cars = ["BMW", "Volvo", "Mini"];
for (let x of cars) {
  //(variable iterable)
  console.log(x);
}
//
const val = ["ammu", "cherry", "abhi", "pranay"];
for (let x of val) {
  console.log(x);
}
//FORin
const person = { fname: "John", lname: "Doe", age: 25 };

//let text1 = "";
for (let x in person) {
  //key itteration
  //text1 += person[x];
  console.log(person[x]);
}
//
const items1 = {
  name: "shirisha",
  surname: "peddapelly",
  age: 21,
};
for (let x in items1) {
  console.log(items1[x]);
}

//REDUCE
const numbers2 = [175, 50, 25];
const numbers3 = numbers2.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}
console.log(numbers3);
