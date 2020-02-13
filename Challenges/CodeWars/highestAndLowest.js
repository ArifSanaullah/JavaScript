// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

//www.codewars.com/kata/554b4ac871d6813a03000035/solutions/javascript

function highAndLow(numbers) {
  numbers = numbers.split(/ /g).map(n => parseInt(n));
  // let highest = numbers[0];
  // let lowest = numbers[0];
  // numbers.forEach(number => {
  //     number > highest ? highest = number : number < lowest ? lowest = number : "";
  // });
  // console.log(`${highest} ${lowest}`);

  return `${Math.max.apply(0, numbers)} ${Math.min.apply(0, numbers)}`;
}

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
