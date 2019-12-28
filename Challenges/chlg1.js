// // find the 3rd longest element in an array.
// let myArr = ["on", "o", "one", "twoo", "fourr", "fiverr"];
// let myNums = [2, 4, 6, 4, 8, 1, 10];
// let longer = 0;
// for (let i = 0; i < myNums.length-1; i++) {
//     let prev = myNums[i];
//     let next = myNums[i + 1];
//     if (prev < next) {
//         myNums[prev] = myNums[next];
//         myNums[next] = myNums[prev];
//     }
// }
// console.log(myNums);
// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     if (element.length > longer) {
//         longer = element.length
//     }
// }

// let myNums = [2, 1, 5, 3, 9, 101, 64];

// function selection_sort(arr) {
//   var len = arr.length;
//   for (var i = 0; i < len - 1; i = i + 1) {
//     var j_min = i;
//     for (var j = i + 1; j < len; j = j + 1) {
//       if (arr[j] < arr[j_min]) {
//         j_min = j;
//       } else if (arr[j] > arr[i]) {
//         swap(arr, j_min, i);
//       } else if (j_min !== i) {
//         swap(arr, i, j_min);
//       } else {
//       }
//     }
//   }
// //   console.log(arr);
// }
// selection_sort(myNums);

// function swap(arr, x, y) {
//   var temp = arr[x];
//   arr[x] = arr[y];
//   arr[y] = temp;
// }
// console.log(myNums);

let myNums = [2, 1, 5, 3, 9, 101, 64];
function mySort(arr) {
  function swap(arr, n, p) {
    var temp = arr[p];
    arr[p] = arr[n];
      arr[n] = temp;
    //   console.log(temp, p, n);
  }
  for (let i = 0; i < arr.length; i++) {
      let prev = i;
      let next = arr[i + 1];
      for (var j = i + 1; j < arr.length - 1; j++) {
          if (next < prev) {
            //   swap(arr, next, prev);
              prev = next;
          } else if (prev !== next) {
              swap(arr, next, prev);
          }
      }
  }
  console.log(arr);
}
mySort(myNums);
