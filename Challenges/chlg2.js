// // LARGEST 5 DIGIT NUMBER
// // INPUT => 1234567890
// // OUTPUT => 67890

// const WAFT = function (n) {
//     n = n.toString();
//     if(n.length < 5) {
//         return;
//     }
//     let result = [];
//     let digit = null;
//     for (let i = 0; i < n.length-4; i++) { //coz we have to return sequence of 5 digits so we will stop loop when there are 5 digits left in the string of numbers.
//         result.push(n.slice(i, i + 5));
//     }
//     for (let i = 0; i < result.length; i++) {
//         const element = result[i];
//         if (element>digit) {
//             digit = element;
//         }
//     }
//     console.log(digit);
// }
// WAFT(1278452345356345345);

// const mumbler = function (str) {
//     let result = [...str];
//     let foo = [];
//     for (let i = 0; i < result.length; i++) {
//         const element = result[i];
//         for (let j = 0; j < i+1; j++) {
//             foo.push(element);
//         }
//     }

//     result = [];
//     for (let i = 0; i < foo.length; i++) {
//         let letter = foo[i];
//         const element = foo[i];
//         if (letter[letter.length-1] === element) {
//             letter = element;
//         }
//         result.push(letter);
//     }
//     foo = foo.toString().replace(/,/g, "");
//     console.log(result);
//     console.log(foo);
// };
// mumbler("abc");


// const weirdStrInGcAse = (str) => {
//     str = [...str];
//     str = str.map((l, i) => i % 2 === 0 ? l.toUpperCase() : l.toLowerCase());
//     str = str.toString().replace(/,/g, "");
//     console.log(str);
// }

// weirdStrInGcAse("Arif Sanaullah Khan Baloch");

// const stringIncrementer = str => {
//   let strings = [];
//   let nums = [];
//   if (Number(str[str.length - 1])) {
//     for (let i = 0; i < str.length; i++) {
//       const element = str[i];
//       if (Number(element)) {
//         nums.push(element);
//       } else {
//         strings.push(element);
//       }
//     }
//     nums = Number(String(nums).replace(/,/g, ""));
//     nums++;
//     str = strings.toString().replace(/,/g, "") + nums;
//   } else {
//     str = str + "1";
//   }
//   console.log(str);
// };

// stringIncrementer("Arif01");


// const passwordValidator = password => {
//     if (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{6,})/.test(password)) {
//         return true;
//     }
//     return false;
// };

// console.log(passwordValidator("Arif3"));
// console.log(passwordValidator("Arif3a"));

const numberOfTrailingZeros = (number) => {
    const getFactorial = (number) => number ? number * getFactorial(number - 1) : 1;
    let factorial = getFactorial(number);
    console.log(factorial);
    
};
numberOfTrailingZeros(12);