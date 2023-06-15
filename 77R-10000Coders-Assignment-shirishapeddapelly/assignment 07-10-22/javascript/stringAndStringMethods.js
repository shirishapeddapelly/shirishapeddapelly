//string methods
//strings:combination of characters;
//strings were stored like array
//length
//which display the length of the string//
const a = "abc   def"; //o/p"9
console.log(a.length);
const b = "def  hello"; //o/p:10
console.log(b.length);
const c = "1 2 3 4 5"; //o/p:9
console.log(c.length);
const d = "1, 2, 3, 4, 5, 6"; //o/p:16
console.log(d.length);

//includes
const e = ["abc", "def", "ghi", "jkl"];
console.log(e.includes("abc")); //true
console.log(e.includes("ABC")); //false
//indexOf
const f = ["abc", "def", "ghi", "jkl"];
console.log(f.indexOf("def")); //1
console.log(f.indexOf("abc")); //0
console.log(f.indexOf("ghi")); //2
console.log(f.indexOf("jkl")); //3

//lastIndexOf
const g = ["abc", "def", "ghi", "jkl", "ghi"];
console.log(g.lastIndexOf("ghi")); //4
console.log(g.indexOf("ghi")); //2
//concat
const h = "I am ";
const i = "studying javascript";
console.log(h.concat(i));
//
const j = "i am student of";
const k = " 10k coders";
console.log(j.concat(k));
//slice
const l = "i am student of 10k coders";
console.log(l.slice(0, 5));
console.log(l.slice(5, 12));
console.log(l);
const m = "sudent of 10k coders";
console.log(m.slice(0, 1));
console.log(m);

//replace()
const abc = "The elements of this array are sorted, The sort is not necessary.";
console.log(abc);
console.log(abc.replace("sort", "Sort"));
const ABC = /sort/gi;
console.log(abc.replace(ABC, "Sort"));

//charAt()
//it returns character  in a string
const abcd =
  "The elements of this array are sorted, The sort is not necessary.";
console.log(abcd.charAt(012));

//split
//convert string into array
const abcde = "The elements of this array are sorted.";
console.log(abcde.split(" "));

//tolowercase()
//it converts string to lowercase
const abcdef = "The Elements Of This Array are Sorted.";
console.log(abcdef.toLowerCase());
console.log(abcdef.toUpperCase());

//trim()
//it removes the extra spaces at the sides//
const abcdefg = "   the extra spaces    ";
console.log(abcdefg.trim());
const abcdefgh = "     1 2 3 4 5 6    "; //it does't remove the excess spaces b/w the strings//
console.log(abcdefgh.trim()); //it only remove extra spaces  at the both sides.

//take a example of array which is having srting elements and sort that array without using methods?
//var numbers = "    12 10 15 11 14 13 16      ";
//const fruits10 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
arr = [5, 2, 7, 1, 0];

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let swapped = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      // swapping the elements
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }

    if (!swapped) break;
  }

  return arr;
}

console.log("Before sorting: ", arr);
console.log("After sorting: ", bubbleSort(arr));

////take a example of array which is having number elements and sort them//
const fruits11 = [1, 31, 19, 7];
fruits11.sort(function (a, b) {
  return a - b;
});
//if i want a remove spaces in b/w strings how will do it?
const ac = "The elements of this array are sorted,The sort is not necessary.";
console.log(ac);
const AC = / /g;
console.log(ac.replace(AC, ""));
