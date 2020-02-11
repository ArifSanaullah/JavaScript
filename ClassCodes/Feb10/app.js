//  PROMISES

/** ********************************************* */
// Promises prototype
//
// do not run this
//
//
// new Promise(function (fulfill, reject){
//     // Do something
//     if (success) {
//         resolve()
//     }
//     else if (failure) {
//         reject()
//     }
// }
//
/** ********************************************* */

// Run following ONE at a time

// const anyFunction = () => {
//   return Math.floor(Math.random() * 10) % 2 === 0;
// };

// const resolveFunction = () => console.log("success");
// const rejectFunction = () => console.log("failure");

// const result = new Promise((res, rej) => {
//   setTimeout(() => (anyFunction() ? res() : rej()), 2000);
// });

// result.then(resolveFunction).catch(rejectFunction);
// console.log("Hello world");

// RESULT:
// Hello world
// success OR failure (this result would depend on the value received from anyFunction result)

/** ********************************************* */

// const anyFunction = () => {
//     return (((Math.floor(Math.random() * 10)) % 2) === 0) ? true : false
// }

// const resolveFunction = () => console.log("success")
// const rejectFunction = () => console.log("failure")

// const result = new Promise((res, rej) => {
//     setTimeout(() => (anyFunction() ? res() : rej()), 2000)
// })

// const resultFromNewPromise = () => new Promise((res, rej) => {
//     console.log("second promise")
//     setTimeout(() => (anyFunction() ? res() : rej()), 2000)
// })

// result.then(resultFromNewPromise).then(resolveFunction).catch(rejectFunction)
// console.log("hello world")

// RESULT:
// Hello world  // first line
// second line of result could be indifferent combination
// if resultFromNewPromise return reject then result will be
// Failure

// if resultFromNewPromise return resolved then result will be
// second promise
// success OR failure (this result would depend on the value received from anyFunction result)


// const anyFunction = () => ((Math.floor(Math.random() * 10) % 2) === 0);

// const resolveFunction = () => {
//     console.log("resolve");
// };

// const rejectFunction = () => {
//   console.log("reject");
// };

// const result = new Promise((res, rej) => {
//     setTimeout(() => (anyFunction() ? res() : rej()), 1000);
// })
// // result.then(resolveFunction).catch(rejectFunction);
// // console.log("hello world");


// const resultFromNewPromise = () => new Promise((res, rej) => {
//     console.log("log from new promise.");
//     setTimeout(() => {
//         return anyFunction() ? res() : rej();
//     }, 0);
// })

// result.then(resultFromNewPromise).then(resolveFunction).catch(rejectFunction);
// console.log("Hello world");


// TRY-CATCH-THROW

// try {
//     console.lo("Hello"); //spelling mistake to generate error
// } catch (e) {
//     console.log("There is a problem: ", e.message);
// }

// try {
//     throw "Test try catch error"
// } catch (e) {
//     console.log(e);
// }

// SHORT-CICRUIT EVALUATION && ||

// change gender value to see different results
// const gender = "male";

// let msg = (gender === "male") && "AND short-circuit";
// console.log(msg);

// msg = (gender === "female") || "OR short-circuit";
// console.log(msg);


// OBJECT.KEYS()

// const obj = {
//     fname: "Arif",
//     lname: "Sanaullah",
//     age: 20
// }

// let objKeys = Object.keys(obj);
// console.log(objKeys);


// OBJECT.VALUES()

// const obj = {
//     fname: "Arif",
//     lname: "Sanaullah",
//     age: 20
// }

// let objValues = Object.values(obj);
// console.log(objValues);