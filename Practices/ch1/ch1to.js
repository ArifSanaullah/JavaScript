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
// var word = prompt("enter letter")
// var array = ["a", "b", "c", "d", "e", "f"];
// console.log(typeof(array[1]));
// for (let i = 0; i < array.length; i++) {
//   const element = array[i];
//   if (word === element) {
//     alert("true")
//     break;
//   }
//   else {
//     alert("false");
//     break;
//   }
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
// function sayHello(name) {
//   return function() {
//     console.log("Howdy " + name);
//   };
// }
// let bob = sayHello("bob");
// bob();
// #######################################

// THIS KEYWORD
// function first() {
//   return this;
// }
// console.log(first() === global);
// function second() {
//   'use strict';
//   return this;
// }
// console.log(second()=== undefined);
// let myObject = { value: "My Object"};
// global.value = "global Object";

// function third(name) {
//   return this.value + name;
// }
// // console.log(third());

// console.log(third.call(myObject, "bob"));
// console.log(third.apply(myObject, ["bob"]));

// function fifth() {
//   console.log(this.firstName + " " + this.lastName);
// }
// let customer1 = {
//   firstName: "richard",
//   lastName: "boughton",
//   print: fifth
// };
// let customer2 = {
//   firstName: "richard2",
//   lastName: "boughton2",
//   print: fifth
// };
// customer1.print();
// customer2.print();
// function clickHandler(arg) {
//   // console.log(arg);
//   // console.log(this);
//   console.log(arg.innerText);
// }
// ###############################

// destructuring
// let a, b, c, d, e;
// let names = ["name-one", "name-two", "name-three", "name-four", "name-five"];
// [a, e, c, d, b] = names;
// console.log(a, b, c, d, e);

// let others;
// [a, b, ...others] = names;
// console.log(a,b,others);

// let year, model;
// ({ year, model } = {
//   make: "bmw",
//   model: "745li",
//   year: 2010,
//   value: 5000
// });
// console.log(year);
// console.log(model);
// ################################

// template literals
// let name = "bob";
// console.log(`hi ${name}`)
// let senetence = `     Lorem ipsum, dolor sit amet consectetur adipisicing
//      elit. Dolores fugiat doloremque veritatis provident
//      molestiae exercitationem aperiam sunt magnam, quasi in.
//      Lorem ipsum, dolor sit amet consectetur
//      adipisicing elit. Dolores fugiat doloremque veritatis provident molestiae
//      exercitationem aperiam sunt magnam, quasi in.`;
// console.log(senetence);

// function getReasonCount() {
//   return 1;
// }
// let interpolation = `Give me ${
//   getReasonCount > 1 ? "one good reasong" : "a few reasong"
// } to try this`;
// console.log(interpolation);
// ######################################

// regular expressions
// let pattern = /xyz/;
// let value = "this is xyz a test.";
// console.log(pattern.test(value));
// console.log(value.replace(pattern, "abc"));
// console.log(value.match(pattern));
// var match = value.match(pattern);
// console.log(match.index);
// ######################################

// built-in natives
// let pattern = /xyz/;
// let value = "this is xyz a test.";
// console.log(value.replace(pattern, "abc"));
// let myString = new String("howdy");
// console.log(myString);
// console.log(myString.toString());
// console.log(typeof myString);

// built in natives
// String()
// Number()
// Boolean()
// Object()
// Function()
// Symbol()
// Array()
// RegExp()
// Date()
// Error()

// let myPrimitive = "THIS IS CRAZY";
// console.log(myPrimitive);

// console.log(typeof myPrimitive);
// myPrimitive = myPrimitive.toLowerCase();
// console.log(typeof myPrimitive);
// console.log(myPrimitive);

// let myNumber = new Number(4);
// console.log(typeof myNumber);
// console.log(typeof myNumber.valueOf());
// #######################################3

// constructors
// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }
// let myCar = new Car('bmw', "745li", 2019);
// console.log(myCar);
// function MyFunction() {
//   console.log("hey i am function");
// }
// var myFunction = new MyFunction();
// console.log(typeof myFunction);
// #####################################

// object and prototype chain
// let originalCar = {
//   make: "bmw",
//   model: "745li",
//   year: 2019
// };
// let newCar = Object.create(originalCar);
// console.log(newCar.make);
// let myPrototype = Object.getPrototypeOf(newCar);
// console.log(myPrototype);
// originalCar.doors = 4;
// console.log(newCar.doors);
// console.log(originalCar.hasOwnProperty("doors"));
// console.log(newCar.hasOwnProperty("doors"));
// newCar.type = "manual";
// console.log(newCar.hasOwnProperty("type"));
// newCar.make = "Audi";
// console.log(newCar.whatever);
// ############################################

// javascript classes
// class Car {
//   constructor(make, model, year) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//   }
//   print() {
//     console.log(`${this.make} ${this.model} (${this.year})`)
//   }
// }
// expressions
// let car = class {

// }
// let myCar = new Car("bmw", "745li", 2019);
// myCar.print();
// class SportsCar extends Car {
//   revEngine() {
//     console.log("Vroooooooooooom goes the ", this.model)
//   }
// }
// let mySportsCar = new SportsCar("dodge", "viper", 2020);
// mySportsCar.print()
// mySportsCar.revEngine();
// ######################################

// arrow functions
// let hi = () => {
//   console.log("Howdy");
// };
// hi();

// let hi = (name) => {console.log(`hosdy ${name}`)}
// hi("arif");

// let add = (a, b) => {
//   return a + b;
// };
// console.log(add(3, 4));
// let names = ["davic", "bob", "jack", "allie", "micheal"];
// names.map((name) => {console.log(`howdy ${name}!`)});

// let names = ["davic", "bob", "jack", "allie", "micheal"];
// let i = 0;
// names.map((name) => { i++; console.log(`howdy ${name} ${i}!`)});
// var transformed = names.map((name) => { return `howdy ${name}!`})
// console.log(transformed)

// ####################################
// ####################################

// TRUTHY AND FALSY VALUES

// falsy values
// if (false) {
// } else {
//   console.log("false is falsy");
// }
// if (null) {
// } else {
//   console.log("null is falsy");
// }
// if (undefined) {
// } else {
//   console.log("undefined is falsy");
// }
// if (0) {
// } else {
//   console.log("0 is falsy");
// }
// if (NaN) {
// } else {
//   console.log("NaN is falsy");
// }
// if ("") {
// } else {
//   console.log("an empty string with single quotes is falsy");
// }
// if ("") {
// } else {
//   console.log("an e,pty string with double quotes is falsy");
// }

// // everything else is truthy
// if (true) {
//   console.log("true is truthy");
// }
// if ({}) {
//   console.log("an empty object is truthy");
// }
// if ([]) {
//   console.log("an empty array is truthy");
// }
// if ("bob") {
//   console.log("a non-empty string is truthy");
// }
// if (new RegExp()) {
//   console.log("a new instance of an object is truthy");
// }
// if (10) {
//   console.log("positive ints are truthy");
// }
// if (-10) {
//   console.log("neative int is truthy");
// }
// if (10.43) {
//   console.log("positive float is truthy");
// }
// if (-10.23) {
//   console.log("negative float is truthy");
// }
// if (Infinity) {
//   console.log("positive infinity is truthy");
// }
// if (-Infinity) {
//   console.log("negative infinity is truthy");
// }

// ##############################################
// #################################################3

// NULL DATA TYPE

// let a;
// console.log(a);
// console.log(typeof a);

// let pattern = /xyz/;
// let value = "this is just a test";
// let result = value.match(pattern);
// console.log(result);
// console.log(typeof result);
// if (result==null) {
//     console.log("no matches were found")
// }

// #####################################
// #####################################

// DATES
// let today = new Date();
// let bob = new Date('December 7, 1067 07:03:23');
// let bob = new Date('1969-12-07T03:23:02');
// let bob = new Date(1069,11,6);
// let bob = new Date(1969,12,23,7,34,56);
// let elt = today- bob;
// console.log(elt)
// console.log(bob.getDate());
// console.log(bob.getDay());
// console.log(today.getTime());

// ##################################
// ##################################

// STRINGS

// let first = "Knowledge is the power of the key.";
// let second = "Do or Do not there is not try";
// let third = "1,3,4,56,7,89,5,3,54,5";
// you can even call these method on string literals

// console.log('bob loves you'.toUpperCase());

// console.log(third.split(","));
// console.log(first.slice(12, 17));
// console.log(first.substr(12, 5));
// console.log(second.endsWith("try"));
// console.log(first.startsWith("Know"));
// console.log(first.includes("power"));
// console.log("ha!".repeat(4));
// console.log("       Thi     s is bloa       ted".length);
// console.log("       Thi     s is bloa       ted".trim().length);

// #################################
// ##################################

// ARRAYS

// let names = ["bob", "borge", "morley", "david", "zack"];
// let others = ["sammn", "gary", "davidson", "wolverine", "hamburg"];
// let lost = [4, 6, 4, 2, 7, 96, 4, 2, 4];
// let fibonacci = [1, 1, 2, 3, 5, 7, 13, 17, 19, 23];

// console.log(lost.concat(fibonacci));
// console.log(fibonacci.join("~"));

// // push and pop
// console.log(lost.shift());
// console.log(lost);
// lost.unshift(1,2,3,4,5);
// console.log(lost);

// console.log(names);
// console.log(names.reverse())
// console.log(names.sort());
// console.log(others.indexOf("davidson"))
// console.log(fibonacci.lastIndexOf(1))
// var filtered = lost.concat(fibonacci).filter(x => {
//   if (x <= 15) return x;
// });

// names.forEach(name => console.log(`Howdy ${name}`));

// console.log(filtered.every(num => num < 17));
// console.log(fibonacci.some(num => num > 20));

// ##################################
// #############################3333#

// HANDLING ERROS

// let a = 7*undefined/"panama";
// console.log(a);

// function beforeTryCatch() {
//   let obj = undefined;
//   console.log(obj.b);
//   console.log('if previous line goes wrong i"ll not run ');
// }
// // beforeTryCatch();
// function afterTryCatch() {
//   try {
//     let obj = undefined;
//     console.log(obj.b);
//     console.log('if previous line goes wrong i"ll not run ');
//   } catch (error) {
//     console.log(
//       "i caught an exception that was thrown from javascript compiler"
//     );
//   } finally {
//     console.log("this will happen no matter what comes to happen");
//   }
// }

// afterTryCatch();
// console.log("my application is still running");

// function perfomCalculation(obj) {
//   if (!obj.hasOwnProperty("b")) {
//     throw new Error("object missing property");
//   }
// continue with calculations process
//   return obj;
// }
// function performHigherLevelOperation() {
//   let obj = {};
//   let value = 0;
//   try {
//     value = perfomCalculation(obj);
//   } catch (error) {
//     console.log(error.message);
//   }
//   if (value == 0) {
// continrary logics go here
// retry logics'll go here
//   }
// }
// performHigherLevelOperation();

// #############################
// #############################

// UNDERSTANDING DOCUMENT OBJECT MODEL (DOM)

// (function() {
//   function clickHandler(message) {
//     console.log("hi .... " + message + "...!");
//   }
//   //   get a refrence to button
//   let myButton = document.getElementById("myButton");
//   myButton.addEventListener("click", function() {
//     clickHandler("hi from iffe");
//   });
// })();




