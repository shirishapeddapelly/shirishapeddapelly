/*
DIFFERENCES B/W POP AND OOP:
POP:
The whole code dependent on the specific function to do some specific task.
Where any chages are made, whole program effect in pop.
OOP:
To do any task in oop,it depends on the objects.
//
Oop in js has some principles 

1.ENCAPSULATION:Binding of variables and functions in to single component.

//let details1 = {
  id: 1,
  name: "Glenna Reichert",
  username: "Delphine",
  email: "Chaim_McDermott@dana.io",
  details2: function () {
    return `<h1>${this.id}</h1>
    <h1>${this.name}</h1>`;
  },
};
console.log(details1.details2);

/*
2.ABSTRACTION:Hideing the implementation details and  show only  the functionality to the users.
EXAMPLE:airpods,remote of(tv/ac..etc),response for the calls and messages,capture a photo /taking a selfy,switchboard..etc
=>Abstraction were not possible in javascript ,because it do the perform in frentend.

//
3.POLYMORPHISM:poly <=> same;
Same function with different SIGNATURES is called many times.
EX:SYMBOL(*) which is used to define a pointer at the same time it used for multiplication purpose.
And + is used to add two numbers at the same time it is used to add two strings in different manner.
2+3=5;
"pine"+"apple"='pineapple'.
we use class ;
The extends keyword defines the is-a relationship blw first class and second class
*/
class firstClass {
  add() {
    console.log("First Method");
  }
}
class secondClass extends firstClass {
  add() {
    console.log(30 + 40);
  }
}

var ob = new firstClass();
var ob2 = new secondClass();
ob.add();
ob2.add();

/*
4.INHERITANCE:inherits the variables and functions from base class to the derived class is known as inheritance.
Example:Traits or genes that are passed from a parental generation to its offspring.
=>it satisfies the dry principle.
types of inheritance:
.single level :which inherit the variables and functions from the single level .Which has only one  derived class.
.multiple:which inherits the variables and functions  from different base classes.Which has many base classes. 
.multilevel:it  inherits  data from   different levels of inheritance.
.hybrid:The process of combining more than one type of Inheritance together while deriving subclasses in a program
.hierarchial: inheritance where more than one class is inherited from a single parent or base class.
=>ONLY SINGLE LEVEL INHERITANCE SUPPORTS THE JAVASCRIPT.

*/
const o = {
  a: 1,
  b: 2,

  __proto__: {
    b: 3,
    c: 4,
  },
};
console.log(o.a);
console.log(o.c);
//console.log(a + c);
//////////////
class Car {
  constructor(brand) {
    this.carname = brand;
  }
  get cnam() {
    return this.carname;
  }
}

let myCar = new Car("Ford");
console.log(myCar);
//
function Cart() {
  this.items = [
    {
      name: "Iphone",
      model: 13,
      description:
        "The iPhone 13 has a 6.1-inch screen, and the iPhone 13 mini has a 5.4-inch screen. They both use Apple's Ceramic Shield cover glass, which adds improved drop protection. The Super Retina XDR display is 28% brighter up to 800 nits for regular content 1200 nits for HDR.",
      price: 100000,
    },
    {
      name: "Iphone",
      model: 12,
      description:
        "The iPhone 12 has a 6.1-inch screen, and the iPhone 13 mini has a 5.4-inch screen. They both use Apple's Ceramic Shield cover glass, which adds improved drop protection. The Super Retina XDR display is 28% brighter up to 800 nits for regular content 1200 nits for HDR.",
      price: 100000,
    },
    {
      name: "Iphone",
      model: 11,
      description:
        "The iPhone 11 has a 6.1-inch screen, and the iPhone 13 mini has a 5.4-inch screen. They both use Apple's Ceramic Shield cover glass, which adds improved drop protection. The Super Retina XDR display is 28% brighter up to 800 nits for regular content 1200 nits for HDR.",
      price: 100000,
    },
  ];
}
let cObj1 = new Cart();

Cart.prototype.distributorName = "CloudTail";

console.log(cObj1.distributorName);

Cart.prototype.allProductsUsingLoop = function () {
  let tableHtml = `<table>
                     <tr>
                        <th>SL NO</th>
                        <th>Name</th>
                     </tr>`;
  for (let i = 0; i < this.items.length; i++) {
    tableHtml += ` <tr>
            <td>${i + 1}</td>
            <td>${this.items[i]?.name}</td>
         </tr>
        `;
  }

  tableHtml += `</table>`;

  return tableHtml;
};

console.log(cObj1.allProductsUsingLoop());
