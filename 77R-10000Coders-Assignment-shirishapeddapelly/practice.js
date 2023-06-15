// let s = "";
// for (let i = 1; i <= 4; i++) {
//   for (let j = 1; j <= 4; j++) {
//     s += "*";
//   }
//   s += "\n";
// }
// console.log(s);

// let countCharacters = (string) => {
//   let count = 1;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === string[i + 1]) {
//       count++;
//     } else {
//       console.log(`${string[i]} occur ${count} times`);
//       count = 1;
//     }
//   }
// };

// countCharacters("12 helloqdkmcijdiswme");
// //
// const b = [1];
// for (let i = 0; i < b; i++) {
//   setTimeout(function () {
//     console.log(b[i]);
//   }, 1000);
// }
// for (let i = 0; i < b; i++) {
//   setTimeout(function () {
//     console.log(b[i]);
//   }, 1000);
// }
// //
// const newVal = [1, 2].map((num) => {
//   if (typeof num === "number") return;
//   return num * 2;
// });
// console.log(newVal);
//
let str = "";
let n = 4;
// for (i = 0; i < n; i++) {
//   for (j = 0; j < n; j++) {
//     str += "*";
//   }
//   str += "\n";
// }
// console.log(str);
//
// let count = 1;
// for (i = 0; i < n; i++) {
//   str += count++;
//   console.log(str);

// }
let arrat = [1, 3, 33, 3, 5, 6];
console.log(
  arrat.filter(function (a, b) {
    return arrat.indexOf(a) === b;
  })
);
console.log(
  arrat.sort(function (a, b) {
    return b - a;
  })
);

function order(arrat) {
  for (i = 0; i < 4; i++) {
    let swap = false;
    for (j = 0; j < 4; j++) {
      if (arrat[j] < arrat[j + 1]) {
        let temp = arrat[j + 1];
        arrat[j + 1] = arrat[j];
        arrat[j] = temp;
        swap = true;
      }
    }
    if (!swap) {
      break;
    }
  }
  return arrat;
}
console.log(arrat); //
//
function order1(array) {
  //let array = [23, 45, 2, 11, 33, 55];
  for (i = 0; i < array.length - 1; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  console.log(array);
}
order1([23, 45, 2, 11, 33, 55]);

//
//highest number
let numbers = [23, 45, 12, 34, 09, 34];
console.log(numbers.slice(0, 1));
console.log(numbers.map((x, y) => x + (y + 1)));

console.log(numbers);
for (i = 0; i < numbers.length; i++) {
  for (j = 0; j < numbers.length; j++) {
    if (numbers[j] > numbers[j + 1]) {
      let temp = numbers[j];
      numbers[j] = numbers[j + 1];
      numbers[j + 1] = temp;
    }
  }
}
console.log(numbers[numbers.length - 2]);
//
let str6 = ["abc", "nabs", "nsjsha", "sa", "a"];
abc(str6);
function abc(a) {
  for (j = 0; j < a.length; j++) {
    if (a[j].length > a[j + 1].length) {
      var m = [];
      m = a[j];
      a[j] = a[j + 1];
      a[j + 1] = m;
    }
  }
}
console.log(str6);
