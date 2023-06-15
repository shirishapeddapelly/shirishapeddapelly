//types of containers//
//var
//let
//const

var number = 5;
var number = 10;
console.log(number);
//redeclarition,updation satisfied//

let number1 = 2;
number1 = 4;
console.log(number1);
//only updation satisfied//

const number3 = 3;
console.log(number3);
//both updation and redeclaration were not satisfied//

//RULES AND NAMING AN IDENTIFIER//
//1st character in an identifier name must be an alphabet or underscore or doller symbol/;
let _number = 5;
console.log(_number);
let Number5 = 10;
console.log(Number5);
//THE IDENTIFIER NAME SHOULD NOT BE ANY KEYWORD OF JAVASCRIPT/
//let break = 5;
//console.log(break);

//NO COMMAS OR BLANKS ARE NOT ALLOWED WITHIN AN IDENTIFIER NAME/
//let nu,mber=6;
//console.log(nu,mber);
//var nu bers=3;
//console.log(nu ber);

//no special symbol otherthan _ and $ not allowed/
const _num = 6;
console.log(_num);
const $num = 6;
console.log($num);
//var @num=6;
//console.log(@num);
const num__ber = 7;
console.log(num__ber);

//output //string
console.log(typeof typeof 10);

//output//boolean
let string = true;
console.log(typeof string);

let boolean = 0;
console.log(typeof boolean);

///conversions
let ABC;

ABC = Boolean("A string");
console.log(ABC, typeof ABC);

ABC = Boolean(" ");
console.log(ABC, typeof ABC);

ABC = Boolean(0);
console.log(ABC, typeof ABC);

ABC = Boolean({});
console.log(ABC, typeof ABC);

ABC = Boolean([]);
console.log(ABC, typeof ABC);
