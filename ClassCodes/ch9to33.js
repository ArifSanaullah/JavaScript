// CH 8
// #####################
// #####################
var string = "hello";
var string2 = "world";
console.log(string + " " + string2);
console.log("2 plus 2 equals " + 2 + 2);

// CH 9
// ###################
// ###################

// var question = "What is your gendre";
// var defAns = "Male";
// var resp = prompt(question, defAns);
// console.log(resp + 1);

// CH 10
// ###################
// ###################

// var x = "world";
// if (x==="world") {
//     console.log("It's true.");
// }

// CH 11
// ###################
// ###################

// var ticket = 3;
// if (ticket !== 5) {
//     console.log("Better luck next time.");
// }
// if (ticket > 4) {
//     console.log("It's greater")
// } else {
//     console.log("It's smaller")
// }

// CH 12
// ###################
// ###################

// var x = prompt("Where does the Pope live?");
// if (x === "Vatican") {
//     console.log("Right Answer.")
// }
// else if(x=== "Rome") {
//     console.log("Wrong but close.")
// }
// else {
//     console.log("Wrong Answer.")
// }

// CH 13
// ###################
// ###################

// var age = 64;
// var weight = 500;
// var time = 5;
// var gendre = "male";
// if ( (age > 60 || age < 21 ) && gendre === "male") {
//     console.log("You are in.")
// }

// CH 14
// ###################
// ###################

// var c = "c";
// var d = "c";
// var x = "x";
// var y = "y";
// var a = "a";
// var b = "a";
// if (c === d) {
//     if (x === y) {
//         console.log("x === y");
//     }
//     else if (a === b) {
//         console.log("a === b");
//     }
//     else {
//         console.log("e === f");
//     }
// } else {
//     console.log("g === i");
// }

// CH 15
// ###################
// ###################

// var cities = ["fsd", "khi", "lhr", "mlt", "rwp", "pswr"];
// console.log(cities[3]);
// for (let i = 0; i < cities.length; i++) {
//     const element = cities[i];
//     console.log(element);
// }


// CH 16
// ###################
// ###################

// cities = ["fsd", "khi", "lhr", "mlt", "rwp", "pswr"];
// console.log(cities[2]);
// cities[2] = "qta";
// console.log(cities[2]);

// CH 16
// ###################
// ###################

// cities = ["fsd", "khi", "lhr", "mlt", "rwp", "pswr"];
// console.log(cities);
// cities.shift();
// console.log(cities);
// cities.unshift("isb");
// console.log(cities);
// cities.splice(2, 1, "mnp", "johar");
// console.log(cities);
// console.log(cities);
// let lastThree = cities.splice(-4, 3);
// console.log(lastThree);

// CH 17
// ###################
// ###################
// var city = prompt("Enter City: ");
// cities = ["fsd", "khi", "lhr", "mlt", "rwp", "pswr"];
// var avail = "true";
// for (let i = 0; i < cities.length; i++) {
//     if (city === cities[i]) {
//         avail =  true;
//         break;
//     } else {
//         avail =  false;
//     }   
// }
// if (avail) {
//     console.log(city + " is in.")
// } else {
//     console.log(city + " is out")
// }

// CH 19
// ###################
// ###################
// var city = prompt("Enter City: ");
// cities = ["fsd", "khi", "lhr", "mlt", "rwp", "pswr"];
// var avail = false;
// for (let i = 0; i < cities.length; i++) {
//     if (city === cities[i]) {
//         avail =  true;
//         alert("is in")
//         break;
//     } else {
//         avail =  false;
//     }
// }
// if (avail === false) {
//     alert(city + " is out")
// }

// C H 20
// ###################
// ###################

// var firstNames = ["BlueRay ", "Upchuck ", "Lojack ", "Gizmo ", "Do-Rag "];
// var lastNames = ["Zzz", "Burp", "Dogbone", "Droop"];
// var fullName = [];
// for (let i = 0; i < firstNames.length; i++) {
//     const elementOut = firstNames[i];
//     for (let j = 0; j < lastNames.length; j++) {
//         const elementIn = lastNames[j];
//         fullName.push(elementOut + elementIn);
//         console.log(fullName)
//     }
// }

// CH 21
// ###################
// ###################

// CH 22
// ###################
// ###################

// var some = "qustuntunia";
// console.log(some.slice( -5, -1));
// console.log(some)
// var month = prompt("enter month");
// var abrev = month;
// if (month.length > 3) {
//     var abrev = month.slice(0,3);
// }
// alert(abrev);

// var str = prompt("enter any string");
// for (let i = 0; i < str.length; i++) {
//     const element = str[i];
//     if (str.slice((i, i+2) === " ")) {
//         alert("no double spaces found");
//         break;
//     }
// }

// CH 23
// ###################
// ###################
// var str = "It is startling to think that, even in the darkest depths of World War II, J. R. R."
// var firstChar = str.indexOf("Wrord War II");
// if (firstChar !== -1) {
//     var text = str.slice(0, firstChar) + "The second World War" + str.slice(firstChar, 12)
//     console.log(text);
// }
// var str = "It is startling to think that, even in the darkest depths of World War II, J. R. R.";
// var firstChar = str.indexOf("World War II");
// for (var i; i < str.length; i++) {
//     if ((str.slice(i, firstChar)) === "World War II") {
//         str = str.slice(0, i) + "the Second World War" + str.slice(firstChar);
//     }
// }
// console.log(str);

// var str = "It is startling to think that, even in the darkest depths of World War II, J. R. R.";
// console.log(str);
// var firstChar = str.indexOf("World War II");
// if (firstChar !== -1) {
//     str = str.slice(0, firstChar) + "The Second World War" + str.slice(firstChar + 12);
// }
// console.log(str);

// CH 24
// ###################
// ###################

// var firstName = "ArifSanaullah";
// console.log(firstName.charAt(0));

// CH 25
// ###################
// ###################

// var str = "To be or not To be";
// console.log(str.replace(/be/g, "Be"));


// CH 26
// ###################
// ###################

// console.log(Math.round(1.999));
// console.log(Math.ceil(1.99));
// console.log(Math.floor(1.9999));


// CH 27
// ###################
// ###################

// var bidDec = Math.random();
// console.log(bidDec);
// var imprDec = (bidDec * 6) +1;
// console.log(imprDec)
// var numOfStars = Math.floor(imprDec);
// console.log(numOfStars);


// CH 28
// ###################
// ###################
// console.log(parseFloat("34"));
// console.log(parseInt("34.343"));


// CH 29
// ###################
// ###################
// var num = 23;
// num.toString();
// console.log(typeof(num.toString()));
// num/2;


// CH 30
// ###################
// ###################

// var price = 9.95;
// var tax = 6.5;
// var total = price + (price * tax);
// console.log(total.toFixed(2));


// CH 31
// ###################
// ###################

// var now = new Date();
// now = now.toString();
// console.log(now);
// var theDay = now.getDay();
// console.log(theDay)
// var dayNames = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
// var nameOfTheDay = dayNames[theDay];
// console.log(nameOfTheDay);
// var theDate = now.getDate();
// console.log(theDate)
// var theMonth = now.getMonth();
// var monthNames = ["jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// theMonth = monthNames[theMonth];
// console.log(theMonth)
// var theDate = now.getDate();
// console.log(theDate);
// var year = now.getFullYear();
// console.log(year);
// var theHours = now.getHours();
// console.log(theHours);
// var theMinutes = now.getMinutes();
// console.log(theMinutes)
// var theSec = now.getSeconds();
// console.log(theSec)
// var theMiliSec = now.getMilliseconds();
// console.log(theMiliSec);
// var theTime = now.getTime();
// console.log(theTime);



// CH 33
// ###################
// ###################

// var today = new Date();
// var doomsDay = new Date("June 20, 2040");
// var msDay = today.getTime();
// var msDoomsDay = doomsDay.getTime();
// var msDiff = msDoomsDay - msDay;
// var days = msDiff / (1000 * 60 * 60 * 24);
// days = Math.round(days);
// console.log(today, doomsDay, msDay, msDoomsDay, msDiff, days);