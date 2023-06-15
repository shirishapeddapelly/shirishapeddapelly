/*functions in js
function:which is used to perform some splecific task.
*/
//write a function to sort a array?
//sort :arrange in order(assending/decending)
const num = [1, 31, 19, 7];
console.log(`before sorting:${num}`);
num.sort(function (a, b) {
  return a - b;
});
console.log(`after sorting:${num}`); //which  satisfied for any no.of digit numbers//
//
function abc(num1) {
  num1.sort();
  console.log(num1);
}
abc([55, 67, 23, 45, 11]); ////which take the first digit of the number//not satisfied for otherthan one digit numbers//

//
function srt(wor) {
  wor.sort();
  console.log(wor);
}
srt(["zcaf", "gsft", "abud", "hgsy", "hgs"]);
//
//write a function to find max and min number in an array?
function maxAndmin(arr) {
  let max = 0;
  let min = Infinity;
  for (i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  console.log(`max is:${max}`);
  console.log(`min is:${min}`);
}
maxAndmin([23, 35, 2343, 5543, 113]);
//
//write a function to remove duplicate values in array?
var arr = ["apple", "orange", "shgs", "apple", "sjs", "orange"];
function removeDuplicates(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));
//
//write a function a return month when we pass a date//
function getAdate() {
  let date = new Date("july ,12 ,2002");
  console.log(`month is:${date.getMonth() + 1}`);
}
getAdate();
