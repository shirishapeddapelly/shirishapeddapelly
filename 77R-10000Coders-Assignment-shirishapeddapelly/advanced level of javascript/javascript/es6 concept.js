/*
1.ARRAY DESTRUCTURING
2.OBJECT DESTRUCTURING
3.REST AND SPREAD OPERATOR
4.NESTED OBJECT DESTRUCTURING
5.OPTIONAL CHAINING
6.AJAX(asynchronous javascript and xml )
*/
//1.
const arr = ["abc", "bcd", "cde", "def", "efg"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
const [, arr2, , ,] = arr;
console.log(arr2);
//const[,,arr3,,]=arr;
const [, , , arr4] = arr;
console.log(arr4);
//2.
const obj = {
  name: "10000 coders",
  phone: 9067565765,
  email: "10000coders@gmail.com",
  place: "hyderabad",
  geo: {
    lat: "-38.2386",
    lng: "57.2232",
  },
};

console.log(obj.name);
console.log(obj["name"]);
const { name } = obj;
//
console.log(name);
const { phone } = obj;
console.log(phone);
//
//nested object destructuring
const {
  geo: { lat },
} = obj;
console.log(lat);
//
const {
  geo: { lng },
} = obj;
console.log(lng);
//
//optional chaining

const obj1 = [
  {
    name: "10000 coders",
    phone: 9067565765,
    email: "10000coders@gmail.com",
    place: "hyderabad",
    geo: {
      lat: "-38.2386",
      lng: "57.2232",
    },
  },
  {
    name: "10000 coders1",
    phone: 9067565765,
    email: "10000coders1@gmail.com",
    place: "hyderabad",
    geo: {
      //lng: "57.2232",
    },
  },
];

const tBody = document.getElementById("t-body");

const output = obj1.map((data) => {
  //console.log(data?.geo?.lat);
  return `<tr>
<td>${!data?.geo?.lat ? "NULL" : data?.geo?.lat}</td>
  <td>${!data?.geo?.lng ? "NULL" : data?.geo?.lng}</td>
            </tr>`;
});

tBody.innerHTML = output;

//Rest & spread operator(...)

//Rest Operator (...)
function sum(a, b) {
  console.log(a + b);
}
sum(4, 5);

const arr1 = [1, 2, 3, 4, 5];
const arr3 = [6, 7, 8, 9];

function sum1(...param) {
  let total = 0;

  for (let x of param) {
    total += x;
  }
  console.log(total);
}

sum1(...arr1);
//
const arr8 = [...arr1, ...arr3];
console.log(arr8);
//
//REST OPERATER
let ARR = [34, 56, 77, 77];
function sum(...sam) {
  total = 0;
  for (let x of sam) {
    total += x;
  }
  console.log(total);
}
sum(...ARR);
