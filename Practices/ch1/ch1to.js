// alert("Thank you giving the input");
// var name = "Mark";
// name = "Ace";
// var weight = 150;
// weight + 2;
// print(name);
// alert(weight);
// alert(2+2);
// var num = 1;
// var deviceInfo = InputDeviceInfo;
// var newNum = (1 + 3) * 4;
// alert("2 plus 2 equals" + 2 + 2);
// var gendre = prompt("Your gendre...?", "Male");
// alert(gendre)
// var x = prompt("Where does the pope live...?");
// if (x==="Vatican") {
//     alert("Correct");
// }
// else if (x === "Rome") {
//     alert("Wrong but close")
// }
// else {
//     alert("Wrong")
// }
// var weight = prompt("enter your weight");
// var time = prompt("enter your time");
// var gednre = prompt("enter your gendre");

// var age = prompt("enter your age");
// if ((weight > 300 && time > 6 && gednre === "male") || age > 17) {
//   alert("you are in.");
// } else {
//   alert("you are out");
// // }
// var cities = [
//   "Multan",
//   "Islamabad",
//   "Karachi",
//   "Lahore",
//   "Kohaat",
//   " Pishawar"
// ];
// var mixArray = [1, "String", true, false];
// var popItem = mixArray.pop();
// // alert(popItem);
// // alert(mixArray.push("item5", "item6"))
// console.log("hi");
// // console.log(typeof popItem);
// a = 3;
// b = "7";
// b = parseInt(b);
// c = a + b;
// console.log(c)
// function sayHello() {
//   console.log("------------");
//   console.log("Say hello");
//   console.log("------------");
// }
// // sayHello();
// let a = sayHello;
// a();
// a();
// a();

// function sayHello(name) {
//   console.log("------------");
//   console.log("Say hello to " + name + ".");
//   console.log("------------");
// }
// // sayHello("arif");
// function calcTax(amount) {
//   let result = amount * 0.0854;
//   return result;
// }
// let tax = calcTax(100);
// console.log(tax);
// setTimeout(function() {
//   console.log("I waited 2 seconds. ");
// }, 2000);

// let count = 0;
// function timeout() {
//   setTimeout(function() {
//     console.log("hi " + count++);
//     timeout();
//   }, 2000);
// }
// timeout();

// (function() {
//   console.log("hi");
// })();

// let hero = "Superman";
// switch (hero.toLowerCase()) {
//   case "superman":
//     console.log("Super strength");
//     console.log("Super Vision");
//     console.log("Greater strength");
//     break;
//   case 'batman':
//     console.log("batman");
//     console.log("powers");
//     break;
//   default:
//     console.log("Member of JLA");
//     break;
// }

// ternary operators
// let a = 1,
//   b = "1";
// let result = a !== b ? "not equal" : "not inequal";
// console.log(result);

// iterations
// for (i = 0; i < 10; i++) {
//   console.log(i)
// }

// let a = [1,3,5,7,9,11,13,15];
// for (let i = 0; i < a.length; i++) {
//   const c = a[i];
//   console.log(c);
// }

// let x = 1;
// while (x<10) {
//   console.log(x++);
//   if (x==7) break;
// }

// scope basics
// let a = "first";

// function scopeTest() {
//   console.log(a);
//   a = "changed"
//   if (a != "") {
//     console.log(a);
//   }

// let b = "second";
// }

// scopeTest();
// console.log(b);
// console.log(a);
// =========================
// object
// let car = {
//   make: "bmw",
//   model: "2010cg",
//   year: 2010,
//   getPrice: function() {
//     return 5000;
//   },
//   printDescription: function() {
//     console.log(this.make + " " + this.model);
//   }
// };
// car.printDescription();
// console.log(car.year);
// console.log(typeof car);
// console.log(car.getPrice());

// console.log(car["make"]);

// var c = {
//   myProperty: [{ d: "this" }, { e: "that" }, { f: "get" }, { g: "crazy" }]
// };
// console.log(c.myProperty[1])

// let carLot = [
//   { year: 2019, make: "Benz", model: "benz2019" },
//   { year: 2018, make: "BMW", model: "bm18" },
//   { year: 2017, make: "RR", model: "R17R" }
// ];
// let contacts = {
//   customers: [
//     {
//       firstName: "OBOB",
//       lastName: "Marley",
//       phoneNumbers: ["345234535245", "3452413445234", "3462531"]
//     },
//     { firstName: "xyz", lastName: "abc", phoneNumbers: ["3452343"] },
//     {
//       firstName: "ghq",
//       lastName: "def",
//       phoneNumbers: ["345345234524", "65785576456"]
//     }
//   ],
//   employees: [
//     {
//       firstName: "OBOB",
//       lastName: "Marley",
//       phoneNumbers: ["345234535245", "3452413445234", "3462531"]
//     },
//     { firstName: "xyz", lastName: "abc", phoneNumbers: ["3452343"] },
//     {
//       firstName: "ghq",
//       lastName: "def",
//       phoneNumbers: ["345345234524", "65785576456"]
//     }
//   ]
// };
// console.log(contacts.customers[2]);
// ###################################
// module pattern
// var counter = (function() {
//   // private content
//   let count = 0;
//   function print(message) {
//     console.log(message + " " + count);
//   }
//   return {
//     // value: count,
//     get: function() {
//       return count;
//     },
//     set: function(value) {count=value;},
//     increment: function() {
//       count += 1;
//       print("after increment: ");
//     },
//     reset: function() {
//       print("Befire Reset: ");
//       count = 0;
//       print("after reset: ");
//     }
//   };
// })();
// // accidentally created a closure
// // console.log(counter.value);
// counter.set(5);
// console.log(counter.get());
// counter.increment();
// counter.increment();
// counter.increment();
// counter.reset();
// ##################################

// closures
function sayHello(name) {
  return function() {
    console.log("Howdy " + name);
  };
}
let bob = sayHello("bob");
bob();
