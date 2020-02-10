// function XO(str) {
//   let xs = 0;
//   let os = 0;
//     [...str].map(s => {
//     s === "x" || s === "X" ? xs++ : s === "o" || s === "O" ? os++ : false;
//   });
//   return xs === os;
// }


function XO(str) {
    let x = str.match(/x/gi);
    let o = str.match(/o/gi);
    return (x && x.length) === (o && o.length);
}