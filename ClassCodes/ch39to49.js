// var age = 22;
// switch (age) {
//     case 22:
//         console.log("Age is 22");
//         break;
//     case 21:
//         console.log("Age is 21");
//         break;
//     case 20:
//         console.log("Age is 20");
//         break;
//     default:
//         console.log("Age is none");
// }
// switch (age) {
//     case 22:
//         for (let i = 0; i < 5; i++) {
//             const element = [i];
//             console.log(element);
//         }
//         break;
//     default:
//         break;
// }

// var number = prompt("Enter number");
// number = parseInt(number)
// console.log("number: ", number , "round off: ", Math.round(number), "Floor value: ", Math.floor(number));
// var number = prompt("Enter number table: ");
// number = parseInt(number);
// for (let i = 1; i <= 15; i++) {
//     console.log(number + "x"+i+"="+number*i )
// }

// CH 39
// ####################
// ####################

// var dayOfWeek = prompt("Enter Day: ");
// dayOfWeek = dayOfWeek.toLowerCase();
// dayOfWeek = dayOfWeek.slice(0, 3);
// switch (dayOfWeek) {
//   case "":
//     console.log("Please enter any day of week..");
//     break;
//   case "fri":
//     console.log("its friday");
//     break;
//   case "sat":
//     console.log("It's Saturday");
//     break;
//   case "sun":
//     console.log("It's Sunday");
//     break;
//   case "mon":
//     console.log("It's Monday");
//     break;
//   case "sss":
//     console.log("It's sss");
//     break;
//   default:
//     console.log("Its other than all cases");
// }

// CH 41
// ####################
// ####################

// var i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

// var i = 0;
// while (i < 0) {
//   console.log(i);
// }

// CH 42
// ####################
// ####################

// var i = 0;
// do {
//   console.log(i);
// } while (i < 0);

// ########################
// ########################
// ########################
// var btn = document.getElementsByTagName("button");

// function myBtn() {
//   function outerText() {
//     alert("outerText called");
//   }
//   btn.addEventListener("outerText", () => {
//     console.log("add event");
//   });
//   console.log(btn);
// }
// window.addEventListener("click", () => {
//   console.log("You knocked?");
//   btn.innerText = "this is outertext";
//   console.log(btn.innerText);
// });

// CH 45
// ####################
// ####################

// function validateEmail(email) {
//   if (email === "") {
//     alert("Enter an email please.");
//   }
// }

// CH 46
// ####################
// ####################
// function greetings(params) {
//   alert(params.src);
// }
// function clickFunc(element) {
//   element.innerText = "this is inner text";
//   console.log(element.previousElementSibling.innerText);
// }
// var image = document.querySelector(".myImage");
// console.log(image);
// var computedwidth = image.style.width;
// console.log(computedwidth);
// var style = getComputedStyle(image);
// console.log(style);
// var backgroundColor = style.backgroundColor;
// console.log(backgroundColor);
// var i = 3
// for (var i; i < 10; i++) {
//   console.log(i);
// }

// CH 49
// ####################
// ####################
// console.log(document.getElementsByClassName("email"));
function validateForm() {
  var realElement = document.getElementsByClassName("email");
  // alert(realElement);
  if (realElement.value == ) {
    console.log(realElement);
    alert("email is required");
  }
}
