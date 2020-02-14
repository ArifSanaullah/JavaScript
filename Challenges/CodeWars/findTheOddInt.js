// Given an array, find the integer that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

//www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript

function findOdd(arr) {
  let result = {};
  arr.map(n => {
    result[n] ? result[n] += 1 : result[n] = 1;
  })
  for (const key in result) {
      const element = result[key];
      if(element%2===1) {return parseInt(key)}
  }
}

console.log(findOdd([20, 1, 1, 2, 2, 3, 3, 5, 5, 4, 20, 4, 5]));
console.log(findOdd([1, 1, 2, -2, 5, 2, 4, 4, -1, -2, 5]));
console.log(findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]));