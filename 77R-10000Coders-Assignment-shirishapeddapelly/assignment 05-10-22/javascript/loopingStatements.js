//different kinds of loops

/*
1. for loop
2. while loop
3. do while loop
4. for in loop
5. for of loop
*/

//for loop
//when you know the initialization part
//write a code to display add number and even numbers from 1 to 100//

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log("even numbers:" + i);
  } else {
    console.log("odd numbers:" + i);
  }
}
//write a code to display following message?
/*
   *
  *  *
 *  *  *
*  * *  *
 
 */
let N = 4;
var str = "";
for (var i = 1; i <= N; i++) {
  for (var k = 1; k <= N - i; k++) {
    str += "\t";
  }
  for (var j = 1; j <= i; j++) {
    str += "*\t\t";
  }
  console.log(str);
  str = "";
}

//write a code to display following message?
/*
 * * * *
 * * * *
 * * * *
 * * * *
 */
let s = "";
for (let i = 1; i <= 4; i++) {
  for (let j = 1; j <= 4; j++) {
    s += "*";
    s += " ";
  }
  s += "\n";
}
console.log(s);

/*
1 
2 3
4 5 6
7 8 9 10
*/
let string = "";
let count = 1;
// External loop
for (let i = 1; i <= 4; i++) {
  // Internal loop
  for (let j = 1; j <= i; j++) {
    string += count;
    count++;
    string += " ";
  }
  string += "\n";
}
console.log(string);

//while loop
//when you don't know from where to start

//let someNumber = 10;

//while (someNumber <= 100) {
//   debugger;
//console.log(someNumber);
//someNumber++;
//}

//do-while loop
//if you want to execute your code atleast once if the condition is false

// let count = 1;

// do {
//   console.log(count);
//   count++;
// } while (count < 1);//
