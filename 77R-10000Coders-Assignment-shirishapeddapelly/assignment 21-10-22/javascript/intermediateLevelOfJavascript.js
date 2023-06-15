//debugger;
console.log(a);
var a = 10;
add();
//Sub();
function add() {
  var b = 2;
  console.log(a + b);
}
function Sub() {
  console.log(a - b);
}

//EVERY THING IN JAVASCRIPT HAPPENS INSIDE AND AN EC//

//when we run a program it creates a global execution  context(GEC) and push in to the call stack.Afterthat GEC done in two phases they are
//.memory allocation phase
/*
In this phase it scans the whole program and allocates the memory to all the variables and functions.
 -variable declarations are scanned and made undefined
 -functon declarations are scanned and made available whole function.
*/
//.code exicution phase
/*
  In this phase code executed line by line.
  this is know as synchronous.
   */
//conclusion:JAVASCRIPT IS A SYNCHRONOUS AND SINGLE THREADED LANGUAGE(the whole execution done in a single call stack)//

//
//console.log(a);
var a = 100;
console.log(c);
var c = 20;
anu();
function anu() {
  console.log(c);
}

/*
   HOISTING:
   We can access the variables and functions before the initialization:
   if we call the variables even before  the initialization it made undefined.
   if we call the functions even before the initialization it made available.
*/
//global space:the variables present out of  functional range is known as global space..
/*
let and const hoisting:
The block of code is aware of the variable, but it cannot be used until it has been declared.

Using a let variable before it is declared will result in a ReferenceError.

The variable is in a "temporal dead zone" from the start of the block until it is declared:
*/
//console.log(d);
let d = 10;
//console.log(d);
/*
function mul() {
  console.log(e * f);
}
mul();
//let e = 3;
//let f = 4;
console.log(d);
*/
//SCOPE OF CHAIN:
//Scope Chain means that one variable has a scope (it may be global or local/function or block scope) is used by another variable or function having another scope
// (may be global or local/function or block scope).
//This complete chain formation goes on and stops when the user wishes to stop it according to the requirement.
//debugger;
var g = 20;
function abc() {
  console.log(g * 2);
}
function bcd() {
  console.log(g * 3);
  var h = 4;
  function cde() {
    console.log(h);
  }
  cde();
}
bcd();
abc();
/*
block statement in js
let and const: These variables are scoped to this block and are not accessible after the block.
var

*/
let x = 2;
var y = 1;
if (true) {
  let x = 3;
  var y = 3;
  console.log(x); //3
}
console.log(x); //2
console.log(y); //3
/*
shadowing in javascript:
*/
var a = 10; //updation possible
{
  var a = 30; //
  var a = 50;
  console.log(a); //50
}
console.log(a); //50
/*
let b = 10;
{
  let b = 30;
  console.log(b); //30
}
console.log(b); //10
*/
//Illigal SHADOWING
var b = 20; //updation not possible
{
  let b = 30;
  console.log(b); //30
}
console.log(b); //20
///////
//CLOSURES//which bundled a function with its parent lexical address...
var c = 40;
function cde() {
  var b = 30;
  function bca() {
    function abc() {
      console.log(a + b + c); //40
      console.log(3 * c);
    }
    var a = 10;
    abc();
  }
  bca();
}
cde();
