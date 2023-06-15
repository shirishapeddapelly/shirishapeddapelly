/*
OBJECT:it is type of data which is stored in key value pair.
->object is instance of a class.
we can create an object in 2 ways:
1.object literal
2.object constructor
*/
//object literal
//By using {},is known as object literal way:
const details = {
  id: 9,
  name: "Glenna Reichert",
  username: "Delphine",
  email: "Chaim_McDermott@dana.io",
  address: {
    street: "Dayna Park",
    suite: "Suite 449",
    city: "Bartholomebury",
    zipcode: "76495-3109",
    geo: {
      lat: "24.6463",
      lng: "-168.8889",
    },
  },
};
console.log(details.address.geo.lat);
/*
why we need object?
->to store the larger information in meaningful way.
it helps to understand easily
we can retrive the data in 2 ways they are:
1.. operator
2.[] (but we retrive the data from the array by using [])
 */
//object constructor

function Abc() {
  this.details = [
    {
      id: 1,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 2,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 3,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
  ];
}

//by using the instance we can access object constructor
let Abcobj = new Abc();
console.log(Abcobj);
//
/*
we have some predefined objects in js
1.document//object literal
2.window  //..
3.math    //..
4.event   //..
5.date//object const..
6.promise//object const..
*/
let details1 = {
  id: 1,
  name: "Glenna Reichert",
  username: "Delphine",
  email: "Chaim_McDermott@dana.io",
  details2: function () {
    return `<h1>${this.id}</h1>
  <h1>${this.name}</h1>`;
  },
  details3: () => {
    return `<h1>${this.id}</h1>
  <h1>${this.name}</h1>`;
  },
};
console.log(details1.details2()); //it points to perticular object()
console.log(details1.details3()); //which points globally(=> function)
console.log(window);
//In function expression it points to the perticular object,but array function points to the global window.

//how to add behaviour to the  oc

/*function Abcd() {
  this.details1 = [
    {
      id: 1,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 2,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
    {
      id: 3,
      name: "Glenna Reichert",
      username: "Delphine",
      email: "Chaim_McDermott@dana.io",
    },
  ];
  this.alldetails = function () {
    let tablehtml = `<table>
    <tr>
    <th>ID</th>
    <th>NAME</th>
    <th>USER NAME</th>
    <th>EMAIL</th>
    </tr>
    <tr>
  
  <td>${this.details1[0].id}</td>
  <td>${this.details1[0].name}</td>
  <td>${this.details1[0].username}</td>
  <td>${this.details1[0].email}</td>
</tr>

<tr>
  <td>${this.details1[1].id}</td>
  <td>${this.details1[1].name}</td>
  <td>${this.details1[1].username}</td>
  <td>${this.details1[1].email}</td>
</tr>
<tr>
  <td>${this.details1[2].id}</td>
  <td>${this.details1[2].name}</td>
  <td>${this.details1[2].username}</td>
      <td>${this.details1[2].email}</td>
</tr>
</table>`;
    return tablehtml;
  };
}
let Abcdobj = new Abcd();
//console.log(Abcdobj.alldetails());
document.body.innerHTML = Abcdobj.alldetails();
*/
function Abcd() {
  let details1 = [
    {
      id: 1,
      name: " Reichert",
      username: "Delphine",
      email: "McDermott@dana.io",
    },
    {
      id: 2,
      name: "Glenna",
      username: "Delphine",
      email: "McDermott@dana.io",
    },
    {
      id: 3,
      name: " Reichert",
      username: "Delphine",
      email: "McDermott@dana.io",
    },
  ];
  this.alldetails = function () {
    //for (let i = 0; i <= details1.length; i++)
    document.body.innerHTML += `
    <tr >
      <th> ID</th>
      <th>  NAME   </th>
      <th>  USERNAME </th>
    <th>  EMAIL  </th>
   </tr> `;

    for (i = 0; i <= details1.length; i++) {
      document.body.innerHTML += `<table>
      <tr>
      <td>${details1[i].id}</td>
      <td>${details1[i].name}</td>
      <td>${details1[i].username}</td>
      <td>${details1[i].email}</td>
     </tr> 
     </table>
     `;
    }
  };
}

let Abcdobj = new Abcd();
console.log(Abcdobj.alldetails());

//document.body.innerHTML = Abcdobj.alldetails();
