//functions;
//function declaration:
function add() {
  add = 12 + 12;
  console.log(add);
}
add();
//function with defaultparameters//
function frds1(name, location = "India") {
  console.log(`${name} from ${location}`);
}
frds1("ramya");
//

//function expression
//If you are assigning a function as a value to a variable
const myFunc = function () {
  ("I am a function Expression");
};
console.log(myFunc);
//
var zbbz = function () {
  ("sdisjuhw");
};
console.log(zbbz);

//self-execution function
//function which call/invoke itself

(function () {
  ("self execution function");
})();

//function with return statement

//Return statement is nothing but if you need to capture and store the value somewhere

//function gstCalculation(amount, gst) {
//const result = amount + (amount / 100) * gst;
//return result;
//}

//console.log(gstCalculation(11234, 18));
//
function cal(var1, var2, var3, var4) {
  const r = var1 + var2 + var3 + var4;
  return r;
}
console.log(cal(121, 3245, 567, 122));
//recursive function
let i;
function recursive() {
  for (i = 0; i < 23; i++) {
    if (i % 2 == 0) {
      console.log(i);
    } else {
      console.log(`odd numbers:${i}`);
    }
  }
}
recursive();
//
function rec() {
  for (i = 0; i < 6; i++) {
    if (i <= 4) {
      console.log(`the value is ${i}`);
    } else {
      console.log("the value is not 4");
    }
  }
}
rec();
//callback function//
function add(val) {
  //console.log(val);
}
function sub() {
  console.log("sub is called");
}
add(sub);
sub();
////
function abc(val, val2) {
  const abc = val + val2;
  console.log(abc);
}
function cde() {
  abc(72, 32);
}
cde(abc);
