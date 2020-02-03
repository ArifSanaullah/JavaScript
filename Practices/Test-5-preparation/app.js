// function Plan(name, price, space, transfer, pages, discountMonths ) {
//     this.name = name;
//     this.price = price;
//     this.space = space;
//     this.transfer = transfer;
//     this.pages = pages;
//     this.discountMonths = discountMonths;
//     Plan.prototype.calcAnnual = function (discPerc) {
//         var months = this.discountMonths;
//         var currMo = new Date().getMonth();
//         var percToCharge = (100 - discPerc) / 100;
//         for (var i = 0; i < months.length; i++) {
//             if (currMo === months[i]) {
//                 var newPrice = this.price * percToCharge;
//                 break;
//             } else {
//                 var newPrice = this.price;
//             }
//         }
//         return newPrice * 12;
//     };
//     Plan.prototype.autoRenewal = true;
// }

// var plan1 = new Plan("Premium", 3.99, 100, 1000, 10, [6, 7, 0]);
// var plan2 = new Plan("Platinum", 5.99, 200, 2000, 50, [0, 8, 10]);

// plan2.autoRenewal = false;
// console.log("location" in plan1, "calcAnnual" in plan2);
// var propsList = [];
// for (var prop in plan2) {
//     if (plan2.hasOwnProperty(prop)) {
//         propsList.push(prop);
//     }
// }
// console.log(propsList);


// #############################
// #############################

// window.location.href = `https:${window.location.hostname}/wow.html`;
console.log(window.location.hash)