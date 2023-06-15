//array and array methods
//push
//pop
//shift
//unshift
//slice
//splice

//push:
//The push() method adds new items to the end of an array.

//The push() method changes the length of the array.

//The push() method returns the new length.
//example:
//it will add last index:
let fruits = ["Banana", "Orange", "Apple"];
fruits.push("Kiwi");
fruits.push("pineapple", "fruit6", "fruit7", "fruit8");
fruits.push("fruit9", "fruit10");

console.log(fruits);

//pop:
//The pop() method removes (pops) the last element of an array.

//The pop() method changes the original array.

//The pop() method returns the removed element.
//example:
const vegetables = ["tomato", "carrots", "raddish", "beets"];
vegetables.pop();
console.log(vegetables);
let vegetables2 = ["tomato", "carrots", "raddish", "beets"];
vegetables2.pop();
console.log(vegetables2);

//shift:
//The shift() method removes the first item of an array.

//The shift() method changes the original array.

//The shift() method returns the shifted element.
//example:
//remove the first input:
const vegetables1 = ["turnips", "potatos", "sweet potatos", "stem vegetables"];
vegetables1.shift();
vegetables1.shift();
vegetables1.shift();
vegetables1.shift();
console.log(vegetables1);

//unshift:
//The unshift() method adds new elements to the beginning of an array.

//The unshift() method overwrites the original array.
//example:
//add first index:
const fruits1 = ["Banana", "Orange", "Apple", "Mango"];
fruits1.unshift("Lemon", "Pineapple");
fruits1.unshift("kiwi", "sweetpotatos");
console.log(fruits1);

//splice:
//The splice() method adds and/or removes array elements.

//The splice() method overwrites the original array.
//syntax: splice(start,deletecount,item1,item2----itemn)
//example:
const fruits2 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits2.splice(1, 2, "apple"));
console.log(fruits2);
//output:'orange','Apple'
const fruits4 = ["Banana", "Orange", "Apple", "Mango", "Kiwi"];
console.log(fruits4.splice(1, 3, "apple"));
console.log(fruits4);

//slice:
//The slice() method returns selected elements in an array, as a new array.

//The slice() method selects from a given start, up to a (not inclusive) given end.

//The slice() method does not change the original array.
//slice(start,end)
//extract some portion in an array
//example:
const fruits3 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits3.slice(1, 3));
console.log(fruits3);
//output:'orange','lemon'

//includes
//it checks ehwather the given array include or not .it return true or false value.
//if the provided value is there it display true.otherwise return false.
const fruits5 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits5.includes("kiwi"));
console.log(fruits5.includes("Banana"));

//indexOf(
//it returns particular index number of the value.if there  is no value it will return -1;
const fruits6 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits6.indexOf("Banana"));
console.log(fruits6.indexOf("Orange"));
console.log(fruits6.indexOf("Mango"));
console.log(fruits6.indexOf("kiwi"));

//lastIndexOf()
//which checks from the last;
const fruits7 = ["Banana", "Orange", "Lemon", "Orange", "Mango"];
console.log(fruits7.lastIndexOf("Orange")); //output:3

//reverse()
//which display the arry in reverse order
const fruits8 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits8.reverse());

//join()
const fruits9 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits9.join("/"));

//sort()
const fruits10 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits10.sort());
const fruits11 = [1, 31, 19, 7];
fruits11.sort(function (a, b) {
  return a - b;
});

//concat;
console.log(fruits11);
const fruits12 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const num = [1, 2, 3, 4];
console.log(fruits12.concat(num));
