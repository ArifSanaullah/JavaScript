
// Task 1
// ###########
// ###########

// var date = new Date();
// var theDay = date.getDay();
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
// theDay = dayNames[theDay];
// var theMonth = date.getMonth();
// var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
// theMonth = monthNames[theMonth];
// var theDate = "0" + date.getDate();
// var theYear = date.getFullYear();
// var fullDate = theDay + " " + theMonth + " " + theDate + " " + theYear;
// console.log(fullDate)

// Task 2
// ###########
// ###########

// Write a program that writes the current date in the following format.

// ====> Tue Dec 03 2019 14:53:48 GMT+0500 (Pakistan Standard Time)


// var now = new Date();
// console.log(now.toString());


// Task 3
// ###########
// ###########

// const date = new Date();

// console.log("HOUR =======>", date.getHours());

// console.log("DAY =======>", date.getDay());

// console.log("MONTH =======>", date.getMonth());

// console.log("YEAR =======>", date.getFullYear())



// Task 4
// ###########
// ###########

// What will be the output of the following program?


// const date = new Date();

// console.log(new Date(date.setFullYear(2006)).toDateString())


// Task 5
// ###########
// ###########

// Write a function that takes a name as a parameter and append Mr. at the start of the name on console

// function appendPrefix(name) {
//     var prefix = "Mr. ";
//     console.log(prefix + name);
// }
// var name = "Arif";
// appendPrefix(name);


// Task 6
// ###########
// ###########

// (function tellTime() {

//         var now = new Date();
    
//         var theHr = now.getHours();
    
//         var theMin = now.getMinutes();
    
//         console.log("Current time: " + theHr + ":" + theMin)
    
//     }());


// Task 7
// ###########
// ###########

// 1. myfunction() { }

// 2. function myfunction() { } =============> CORRECT

// 3. func myfunction() { }

// 4. myfunction = () => { } ================> CORRECT


// Task 8
// ###########
// ###########

// Write a function that takes an array as a parameter.

// The function's duty is to delete the last element from the array and return the array

// function deleteElement(array) {
//     array.pop();
//     return array;
// }
// var array = [1,2,3,4];
// var newArray = deleteElement(array);
// console.log(newArray);


// Task 9
// ###########
// ###########

// Write a function that takes an argument.

// The function's duty is to check the arguments type and print the type

// For example if i pass in a string the function should print string on the console

// if i pass a number the console should print number

// function checkType(element) {
//     var type = typeof(element);
//     console.log("Type of the element passed in argument is", type);
// }
// var element = "arif";
// checkType(element);

/**

|--------------------------------------------------

| TASK 10

|--------------------------------------------------

*/

// Write a function that takes an array of numbers as a parameter and function's job

// is to multiply each element of an array by 2 and print it

// function multiplyElement(array) {
//     for (let i = 0; i < array.length; i++) {
//         var element = array[i] * 2;
//         console.log(element);
//     }
// }
// var array = [1,2,3,4,5];
// multiplyElement(array);



// |--------------------------------------------------

// | TASK 11

// |--------------------------------------------------

// */


// Write a function that does not get any arguments but should return a random id number if called against a variable 

// Example:

//  

//  var id = generateId();

//  the generate function should generate a random id between 1 - 1000 and return it 


// function genRand() {
//     var randNum = Math.random()*1000;
//     randNum = Math.round(randNum);
//     return randNum;
// }
// var random = genRand();
// console.log(random);


// |--------------------------------------------------

// | TASK 12

// |--------------------------------------------------

// */


// Write a function that takes in a string as an argument an the functions duty is to check the number of characters

// in a string a print it on the console



// /**

// function checkLength(anyString) {
//     var lengthOfString = anyString.length;
//     console.log(lengthOfString);
// }
// var name = "arif";
// checkLength(name);

// |--------------------------------------------------

// | TASK 13

// |--------------------------------------------------

// */

// write an arrow function that takes in a string as an argument and returns the string in uppercase letters.



// /**

// upperCaseString = (anyString) => {
//     var upperString = anyString.toUpperCase();
//     return upperString;
// }
// var name = upperCaseString("arif");
// console.log(name);


// |--------------------------------------------------

// | TASK 14

// |--------------------------------------------------

// */

// Write a function to sort an array of numbers in ascending or descending order




// /**

// (function sortArray() {
//     var array = [3,5,2,7,4,9,43];
//     console.log(array);
//     var sortedArray = array.sort();
//     console.log(sortedArray)
// }());

// |--------------------------------------------------

// | TASK 15

// |--------------------------------------------------

// */

// Write a function and the functions duty is to first check 

// if the argument passed is a string..if it is then you should concatenate behind the sring "Welcome" and return it

// if the argument passed is a number then it should be multiplied by the power of 2 and return it

function checkType(anyArgument) {
    if (typeof(anyArgument) === "string") {
        anyArgument = "Welcome " + anyArgument;
        return anyArgument;
    } else if (typeof(anyArgument) === "number") {
        anyArgument = Math.pow(anyArgument, 2);
        return anyArgument;
    } else {
        return "Invalid argument"
    }
}
var argument = checkType(4);
console.log(argument);

// |--------------------------------------------------

// | TASK 16

// |--------------------------------------------------

// */

// Write a function to round a number to a specified number of digits. when passed as an argument and return it

// Example: 

// roundNumber(4.6); 

// Expected Ouput: 5 ===> The number is rounded off


// function roundNumber(number) {
//     var roundedNumber = Math.round(number);
//     return roundedNumber;
// }
// var number = 3.6;
// var newNumber = roundNumber(number);
// console.log(newNumber + " ===> The number is rounded off");