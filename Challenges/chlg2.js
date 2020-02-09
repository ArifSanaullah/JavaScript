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

const mumbler = function (str) {
    let result = [...str];
    let foo = [];
    for (let i = 0; i < result.length; i++) {
        const element = result[i];
        for (let j = 0; j < i+1; j++) {
            foo.push(element);
        }
    }

    result = [];
    for (let i = 0; i < foo.length; i++) {
        let letter = foo[i];
        const element = foo[i];
        if (letter[letter.length-1] === element) {
            letter = element;
        }
        result.push(letter);
    }
    foo = foo.toString().replace(/,/g, "");
    console.log(result);
    console.log(foo);
};
mumbler("abc");