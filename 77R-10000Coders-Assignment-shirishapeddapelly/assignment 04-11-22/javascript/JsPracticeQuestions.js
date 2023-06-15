//1.create a function that takes two arguements and returns their sum.
function add(a, b) {
  console.log(a + b);
}
add(10, 20);

//2.write a function that takes an integer minute and convert it to seconds.
function convert(A) {
  var seconds = A * 60;
  console.log(`${A} minutes has ${seconds} seconds`);
}
convert(28);

//3.create a function that takes a number as arguement ,increments the number by +1 and return the result.
function increment(B) {
  B += 1;
  console.log(B);
}
increment(6);

//4.create a function that takes the age in years and return the age in days.
function convertAgeToDays(C) {
  var days = C * 365;
  console.log(` ${C} years has  ${days} days`);
}
convertAgeToDays(10);

//5.create a function that takes voltage and currert and return the calculated power.
function powercal(voltage, current) {
  var power = voltage * current;
  console.log(power);
}
powercal(40, 80);

//6.write a function that returns the string "something"joined the space "" and the given arguements  a,b.
function joining(a, b) {
  return a + " " + b;
}
console.log(joining('"some"', '"thing"'));

//7.create a function that takes 2 arguements.Both arguements are integers ,a and b. return true if one of them is 10 or if their sum is 10.
function integers(a, b) {
  if (a == 10 || b == 10 || a + b == 10) {
    console.log("true");
  } else {
    console.log("false");
  }
}
integers(2, 5);

//8.create a function that takes two strings as arguements and returns either true or false depending whether the total number of characters in the 1st string
//is equal to the total number of characters in the second string.
function comparing(str1, str2) {
  if (str1.length == str2.length) {
    console.log("true");
  } else {
    console.log("false");
  }
}
comparing("ramya", "pinky");
//////
//9.create a function that returns a greating in the form of a string dont use a normal function use arrow function?
var arrowfunction = () => {
  console.log("good morning");
};
arrowfunction();
//10.create a function that takes an array of 10 numbers(b/w 0 to 9)returns a string of those numbers formatted as a phone number (e.g(555)555-5555)
// function ABC(PHONENUMBER) {
//   let number1 = " ";
//   let number2 = " ";
//   let number3 = " ";
//   for (let i = 0; i < PHONENUMBER.length; i++) {
//     if (i < 3) {
//       number1 += PHONENUMBER[i].toString();
//     } else if (i >= 3 && i < 6) {
//       number2 += PHONENUMBER[i].toString();
//     } else if (i >= 6) {
//       number3 += PHONENUMBER[i].toString();
//     }
//   }
//   console.log(`(${number1})(${number2})-(${number3})`);
// }
// ABC([1, 4, 3, 2, 6, 8, 9, 0, 4, 5]);
//
function ARR(NUMBER) {
  let NUM1 = "";
  let NUM2 = "";
  let NUM3 = "";
  for (i = 0; i < NUMBER.length; i++) {
    if (i < 3) {
      NUM1 += NUMBER[i].toString();
    } else if (i >= 3 && i < 6) {
      NUM2 += NUMBER[i].toString();
    } else if (i >= 6) {
      NUM3 += NUMBER[i].toString();
    }
  }
  console.log(`(${NUM1})(${NUM2})-(${NUM3})`);
}
ARR([2, 3, 4, 5, 0, 2, 3, 4, 4, 5]);

//11.create a function that returns an array of strings sorted by length is asscending order.

function abc(str6) {
  for (i = 0; i < str6.length; i++) {
    for (j = 0; j < str6.length; j++) {
      if (str6[j].length > str6[j + 1].length) {
        var m = [];
        m = str6[j];
        str6[j] = str6[j + 1];
        str6[j + 1] = m;
      }
    }
  }
  return str6;
}
console.log(abc(["abc", "nabs", "nsjsha", "sa", "a"]));
//12.create a function that takes an array with numbers ,return a new (single)array with the largest numbers of each.
function largestOfFour(arr) {
  let answer = [];
  arr.forEach(function (array) {
    answer.push(Math.max(...array));
  });
  return answer;
}

console.log(
  largestOfFour([
    [2, 3, 4, 5, 5],
    [23, 33, 54, 5],
    [9, 7, 10, -1],
    [-1, -2, -3, -4],  
  ])
);

//13.create a function that takes an array of numbers and returns the second largest number.
//let numbers = [23, 455, 57, 6767, 4343, 2111];
function ABC(numbers) {
  for (i = 0; i < numbers.length; i++) {
    for (j = i + 1; j < numbers.length; j++) {
      if (numbers[i] > numbers[j]) {
        m = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = m;
      }
    }
  }
  return numbers[numbers.length - 2];
}
console.log(ABC([23, 455, 57, 6767, 4343, 2111]));
//
let numbers1 = [23, 455, 57, 6767, 4343, 2111];
numbers1.sort(function (a, b) {
  return a - b;
});
console.log(numbers1[numbers1.length - 2]);

//14.create a function that takes an array of items remove all duplicate items and returmns  anew array in the same sequencial order as the old  array ?
//
var arr = ["apple", "orange", "shgs", "apple", "sjs", "orange"];

function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));
//
//15.create a function that takes an array of integers as an arguement and returns a unique number from that array .all numbers except unique ones have the same number of occurances in the array.
let arr2 = [3, 4, 5, 5, 5, 6, 6, 3, 2, 2];
let count2 = 1;
// for (i = 0; i < arr2.length; i++) {
//   for (j = 1; j < arr2.length; j++) {
//     if (arr2[i] === arr2[j]) {
//       count2++;
//     }
//   }
//   console.log(arr2[i]);
// }
//
const output = arr2.filter((x) => {
  if (count2 > 1) {
    return count2++;
  }
});
console.log(output);

//
//first two character swapping

var string2 = "";
let string3 = "";
function compare(string1) {
  for (let i = 0; i < string1.length; i++) {
    if (i % 2 == 0) {
      [string1[i], string1[i + 1]] = [(string1[i + 1], string1[i])];
      string2 += string1[i + 1] + string1[i];
    }
    if (string1.length % 2 == 1 && i == length - 1) {
      string2 += string1[i];
    }

    console.log(string2);
  }
}
// if (string1.length % 2 == 0) {
//   [string1[i], string1[i + 1]] = [(string1[i + 1], string1[i])];
//   string2 += string1[i + 1] + string1[i];
//   i++;
// } else {
//   console.log("enter even length string");
//   //   [string1[i], string1[i + 1]] = [(string1[i + 1] = string1[i])];
//   string3 += string1[i + 1] + string1[i];
//   i++;
//   console.log(string3 + string1[string1.length - 1]);
//   }
//   }

//   console.log(string2);
// }
compare("ABCDEF");
//

function reverseString(strval) {
  var str6 = "";
  for (let i = 0; i < strval.length; i++) {
    str6 += strval[strval.length - (i + 1)];
  }
  console.log(str6);
}
reverseString("my name is shirisha");

//STAR PATTERNS
/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
let n = 5;
let str1 = "";
for (i = 1; i <= n; i++) {
  str1 += "*\t";
  console.log(str1);
}
//
/*
 *
 *  *
 *  *  *
 *  *  *  *
 *  *  *  *  *
 */

let n2 = 5;
let str2 = "";
for (i = 1; i <= n2; i++) {
  for (j = 1; j <= n2 - i; j++) {
    str2 += "\t";
  }
  for (j = 1; j <= i; j++) {
    str2 += "*\t\t";
  }
  console.log(str2);
  str2 = "";
}
///////
/*
1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
*/

let count = 1;
let str3 = "";
for (i = 1; i <= 5; i++) {
  for (j = 1; j <= i; j++) {
    str3 += count;
    count++;
    str3 += " ";
  }
  str3 += "\n";
}
console.log(str3);
//
/*
1
12
123
1234
12345


*/
let N = 5;
let str4 = "";
let count1 = 1;
for (i = 1; i <= N; i++) {
  str4 += count1++;
  console.log(str4);
}
//
/*
 * * * *
 * * * *
 * * * *
 * * * *
 */
let N1 = 4;
str5 = "";
for (i = 1; i <= N1; i++) {
  for (j = 1; j <= N1; j++) {
    str5 += " * ";
  }
  str5 += "\n";
}
console.log(str5);
//

// console.log(arr.sort());
// console.log(arr.reverse());
//let arr=[23,44,54,34,55,24]

let st = "";
let n1 = 4;
for (i = 0; i < n1; i++) {
  st += "*\t";
  console.log(st);
}
//
let st1 = "";
let n6 = 4;
for (i = 0; i < n6; i++) {
  for (j = 0; j < n6; j++) {
    st1 += "*\t";
  }
  st1 += "\n";
}
console.log(st1);
//
//reverse a string
function abc(str) {
  var strings = "";

  for (i = str.length - 1; i >= 0; i--) {
    strings += str[i];
  }
  console.log(strings);
}
abc(" i am shirishapeddapelly");
//
let count3 = 1;
let str8 = "";
for (i = 0; i < 4; i++) {
  for (j = 0; j <= i; j++) {
    str8 += count3;
    count3++;
  }
  str8 += "\n";
}
console.log(str8);
