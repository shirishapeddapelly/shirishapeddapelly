//find the count of all the characters of string and display them in a key:value pair using for loops//
var stringsearch = "b",
  str = "this is foo ar";
for (
  var count = -1, index = -2;
  index != -1;
  count++, index = str.indexOf(stringsearch, index + 1)
);
console.log(count);
//example:2
let countCharacters = (string) => {
  let count = 1;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === string[i + 1]) {
      count++;
    } else {
      console.log(`${string[i]} occur ${count} times`);
      count = 1;
    }
  }
};
countCharacters("1232 helloqdkdmcijdiswme");

//example3
function count_occur(str) {
  // checking string is valid or not
  //if (str.length == 0) {
  //console.log("Invalid string");
  //return;
  //}
  //cor loop to iterate over string
  for (let i = 0; i < str.length; i++) {
    //variable counting occurrence
    let count = 0;
    for (let j = 0; j < str.length; j++) {
      if (str[i] == str[j] && i > j) {
        break;
      }
      if (str[i] == str[j]) {
        count++;
      }
    }
    if (count > 0) console.log(`${str[i]} occurs ${count} times`);
  }
}

// test string
let test_str = "gfghello";
count_occur(test_str);

//write a code to remove duplicate value from an array?/

var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));

//write a code to find highest and lowest value in an array using loops?/
var Numbers = [4, 2, 101, 45, 55, 100];

var l = Numbers.length;
var max = -Infinity;
var i;
for (i = 0; l > i; i++) {
  if (Numbers[i] > max) {
    max = Numbers[i];
  }
}

console.info(max);
//
var min = Infinity;
var i;
for (i = 0; l > i; i++) {
  if (Numbers[i] < min) {
    min = Numbers[i];
  }
}

console.info(min);

//write a code to capitalize every first letter in an array?/
function ABC(abc) {
  return abc.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  });
}

console.log(ABC(["hello", "world", "capitalize", "words"]));

//write a code to reverse a string without using mthods?/
//const Astring = (str = null) => {
//let newStr = [];
//let string = "";
//let reverseStr = "";
//for (i = 0; i < str.length; i++) {
//if (str[i] == " ") {
//newStr.push(string);
// string = "";
//} else {
// string += str[i];
// }
//}
//if (string) {
//newStr.push(string);
//}
//for (i = newStr.length - 1; i >= 0; i--) {
//reverseStr += newStr[i] + " ";
//}
//return reverseStr;
//};
//let val = Astring("My name is mohd jagir");
//console.log(val)
function rev(str) {
  let r = "";
  for (let i = str.length - 1; i >= 0; i--) {
    r += str[i];
  }
  return r;
}

console.log(rev("my name is shirisha"));
console.log(str.length); //14

//write a code to reverse a array without using mthods?/
function reverseArray(arr) {
  var newArr = [];
  for (var i = 0, j = arr.length - 1; i < arr.length; i++, j--) {
    newArr[i] = arr[j];
  }
  return newArr;
}
console.log(reverseArray(["A", "B", "C", "D", "E", "F"]));

//write a code to display fibonacci series from 0-20//
//fibonacci series:each number in the sequence is equal to the sum of two numbers before it.....
//0,1,1,2,3,5,8,13,21,34,55,89,144.....
//0
//1
//0+1=1
//1+1=2
//2+1=3
//3+2=5
//5+3=8...........etc
const number = 20; //parseInt(prompt("Enter a positive number: "));
let n1 = 0,
  n2 = 1,
  nextTerm;

console.log("Fibonacci Series:");
console.log(n1); // print 0
console.log(n2); // print 1

nextTerm = n1 + n2;

while (nextTerm <= number) {
  //print the next term
  console.log(nextTerm);

  n1 = n2;
  n2 = nextTerm;
  nextTerm = n1 + n2;
}
// take input from the user
//const number = parseInt(prompt("Enter the number of terms: "));
//let n1 = 0,
// n2 = 1,
// nextTerm;

//console.log("Fibonacci Series:");

//for (let i = 1; i <= number; i++) {
//console.log(n1);
//nextTerm = n1 + n2;
//n1 = n2;
//n2 = nextTerm;
//}

//write  a program to swap 2 numbers  without using 3rd variable//
var x = 10;
var y = 20;
x = x + y;
y = x - y;
x = x - y;
console.log(x);
console.log(y);

//example2
var x = 10;
var y = 20;
[x, y] = [y, x];
//alert("Value of X=" + x + " and value of Y=" + y);
console.log(x);
console.log(y);
//example3
var x = 10;
var y = 20;
x ^= y;
y ^= x;
x ^= y;
console.log(x);
console.log(y);
//write a program to make first letter capital in every word of a string?/
const toTitleCase = (phrase) => {
  return phrase
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

let result = toTitleCase("maRy hAd a lIttLe LaMb");
console.log(result);
