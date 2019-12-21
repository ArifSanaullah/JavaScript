// var date = new Date();
// alert(date.getDate());


// var name = prompt("Enter your name: ");
// var pre = "Mr. "
// name = pre + name;
// alert(name);


// alert("arif".length);

// var name = "arif   "
// alert(name)
// alert(name.trim(" "));


// var array = [1,2,3,4,5,5]
// console.log(array.splice(2));
// console.log(array)

// var date = new Date();
// console.log(date.setFullYear(2007));
// console.log(date.setMonth(10));
// console.log(date.setSeconds(23));
// function tellTime() {
    
// var now = new Date();
// var min = now.getMinutes();
// var hrs = now.getHours();
// console.log("Current time: " + hrs + ":" + min);
// }
// tellTime();
// tellTime();
// function eligble(age) {
//     var name = prompt();
//     console.log("thisis", name);
//     if (age < 18) {
//         console.log("allowed")
//     }else {
//         console.log("not allowed")
//     }
// }
// var name = "asdf";
// eligble(23, name);


// function myAge(age) {
//     age = age + 10;
    // console.log(age);
//     return age, 20;
// }
// var age = 20;
// var newAge = myAge(age);
// console.log(age)
// console.log(newAge)
// console.log(myAge(age));
// name1 = 210
// function scope() {
//     name = 20;
//     console.log(name);
// }
// scope();
// console.log(name1)





// var date = new Date();
// date.setFullYear(2019);
// date.setMonth(10)
// console.log(date);


// CH 35 -functions
// ##################
// ##################

// var now = new Date();
// var theHr = now.getHours();
// var theMin = now.getMinutes();
// console.log("Time: " + theHr + ":"+ theMin)

// function tellTime() {
//     var now = new Date();
//     var theMin = now.getMinutes();
//     var theHr = now.getHours();
//     console.log("Time: " + theHr + ":"+ theMin);
// }
// tellTime();
// tellTime();


// CH 36 - Functions: Passing them data
// ##################
// ##################
// Will you please explain it's out put. If I am not bothering you.
// function fromOutside() {
//     function fromInside() {
//         console.log("From Inside");
//         return fromOutside();
//     }
    // fromInside();
//     // fromOutside();
//     console.log("From Outside");
//     return fromInside();
// }
// var something = fromOutside();



// (function funcC() {

//     function funcA(anyValue) {
//     return anyValue;
//     }
//     function funcB(anyString, anyFuncReturn) {
//     return anyString + anyFuncReturn;
//     }
//     return "Any Random String";
// }());

// function funcA(name) {
//     return name;
// }
// var name = funcA();
// console.log(name);




