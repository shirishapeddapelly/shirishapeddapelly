//call by value example//
var a = 5;
var b;
b = a;
a = 3;
console.log(a); //output:3
console.log(b); //output:5

const c = 3 + 3 + "57";
console.log(c);
//output:657// addition is not possible,
///They both ended up attaching each other(number and string)
//'concatenation' takes place

///we need to add them we need to convert the string into
//an integer. It actually, converts the string into integer and
//helps to add them.

const result = 3 + 3 + Number("57");
console.log(result); //output:63//

//conditional operators
console.log(6 > 2); //true
console.log(10 < 3); //false
console.log(2 <= 3); //true
console.log(45 <= 24); //false
console.log(18 >= 15); //true
console.log(62 < 10); //false
console.log(91 == "9"); //false
console.log(8 === "8"); //false
console.log(false === false); //true
console.log(true == "true"); //false

//logical operators

//and operator
//if one of the statement is false then o/p will be false //
console.log(true && true); //true
console.log(true && false); //false
console.log(false && true); //false
console.log(false && false); //false

//or operator
//if one of the statement is true,then the o/p will be true//
console.log(true || true); //true
console.log(true || false); //true
console.log(false || true); //true
console.log(false || false); //false

//not operator
//it is used to reverse the logical state of operand//
console.log(!true); //false
console.log(!false); //true
