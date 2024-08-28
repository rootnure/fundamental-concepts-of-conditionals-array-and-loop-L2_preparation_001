/**
 * TERNARY OPERATOR --> three parts
 * 
 *       ?          :
 * 
 *  condition ? do something when true : do something when false
 * 
 */

const age = 112;

// normal if---else
if(age >= 18) {
    // console.log("You are eligible to vote.");
}
else {
    // console.log("Tomar vote deyar boyos hoi nai.");
}

// simple ternary (print something upon condition)
// age >= 18 ? console.log("You are eligible to vote.") : console.log("Tomar vote deyar boyos hoi nai.");

// ---------------

let price = 500;
const isLeader = false;

// if(isLeader === true) {
//     price = 0;
// }
// else {
//     price = price + 100;
// }

// simple ternary (set/update variable value upon condition)
price = isLeader === true ? 0 : price + 100;

// console.log(price);

// ---------------OPTIONAL: Feel free to ignore this part---------------
// if(isLeader === true) {
//     if(price > 1000) {
//         price = price / 2;
//     }
//     else {
//         price = 0;
//     }
// }
// else {
//     price = price + 100;
// }

// semi-advance ternary (nested ternary)
price = isLeader === true ?
            price > 1000 ?
                price / 2
                : 0
            : price + 100;

console.log(price);