/*
 * Object.assign()
 * forOfLoop
 * This
 * Class
 */

// OBJECT.ASSIGN()
// const obj1 = { Name: "Arif" };
// const obj2 = { Age: 22 };
// const obj3 = Object.assign({}, obj1, obj2);
// let obj1 = {
//   fname: "Irfan",
//   lname: "Ali",
//   degrees: 2
// };
// let obj2 = {
//   city: "Karachi",
//   country: "Pakistan",
//   gender: "male"
// };
// let obj3 = {
//   fname: "Umair",
//   lname: "Ahmed",
//   skills: {
//     coding: "Node.js",
//     UI: "React.js"
//   }
// };
// const newObj = Object.assign(obj1, obj2, obj3, {skills : {...obj3.skills, coding: "PHP"}});
// console.log(obj1);
// console.log(obj2);
// console.log(obj3);
// console.log(newObj);

// FOR OF LOOP

// let arr = "abcdefghijkl";
// console.log(arr);
// arr = arr.split("");
// console.log(arr);
// for (const iterator in arr) {
//     console.log(arr[iterator], iterator);
// }

// THIS KEYWORD
// "use strict";
// var name = "Arif";
// const abc = {
//     name: "Umair",
//     welcomeArrowMsg: () => console.log(this.name),
//     welcomFuncMsg: function() {console.log(this.name);},
// }
// abc.welcomeArrowMsg();
// abc.welcomFuncMsg();
// "use strict";
// function ghost() {
//   console.log(this.boo);
// }

// const myGhost = {
//   boo: "hhhoowwwwwwww"
// };

// ghost();
// let boo = "Ghhhhooooosttt";
// ghost();
// window.boo = "Ghhhhooosttt";
// ghost();
// myGhost.ghost();

// ghost();
// ghost = ghost.bind(myGhost);
// ghost();
// var foo = "Fooooo";
// function myFn() {
//   console.log(this);
// }
// let arrow = () => console.log(this);
// myFn();
// arrow();

// (() => {
//     function myFn() {
//         console.log(this);
//     }
//     myFn();
// })()

// function bike() {
//     console.log(this.name);
// }
// var name = "Ninja";
// const obj1 = { name: "Pulsar" };
// const obj2 = { name: "Gixxer" };
// bike();
// bike = bike.bind(obj1);
// bike();
// bike();
// bike();

function bike () {
    let name = "Ninja";
    this.maker = "Kawasaki";
    console.log(this.name, maker);
}

let name = "Pulsa";
let maker = "Bajaj";

let obj = new bike();
bike();
console.log(obj.maker);