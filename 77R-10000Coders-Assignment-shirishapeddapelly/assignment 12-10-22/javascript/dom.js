/////second largest number in an array//
var numbers1 = [3, 55, 22, 56, 788, 2342, 24];

var len = numbers1.length;
var temp;
for (i = 0; i < len; i++) {
  for (j = i + 1; j < len; j++) {
    if (numbers1[i] > numbers1[j]) {
      temp = numbers1[i];
      numbers1[i] = numbers1[j];
      numbers1[j] = temp;
    }
  }
}
console.log(numbers1[len - 2]);
///write a code for list of missing  integers from 1 to 100 //
let m = 100;
var arr = [];
//var arr1 = [];
for (l = 0; l < m; l++) {
  arr[l] = l + 1;
}
arr1 = arr.splice(98, 2);
console.log(arr1);
console.log(arr);
//missing integers
sum = (100 * 101) / 2;
console.log(sum);
sum1 = (98 * 99) / 2;
console.log(sum1);
sum2 = sum - sum1;
console.log(sum2);
let n1;
n1 = (sum2 - 1) / 2;
console.log(n1);
console.log(n1 + 1);
//missing numbers
//n1
//n1+1
//calculate how many numbers are there in a string
let abc = "hgr2na7";
for (i = 0; i < abc.length; i++) {
  count = 0;
  if (isFinite(abc[i])) {
    count++;
    console.log(`${abc[i]} occurs ${count++} times`);
  } else {
    console.log(`${abc[i]} is not a number`);
  }
}
