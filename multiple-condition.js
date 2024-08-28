const salary = 20000;
const isBCS = true;
const height = 67;
const hasCar = true;

// if(salary >= 20000 && height > 66) { // must fill all the conditions
//     console.log("Su---patro");
// }
// else {
//     console.log("onno patro khuji");
// }

// if(salary >= 20000 && height > 66 && isBSC == true) { // can use more than 2 conditions
//     console.log("Su---patro");
// }
// else {
//     console.log("onno patro khuji");
// }

if(salary > 25000 || height > 66 || isBCS == true) { // minimum 1 condition must be true
    console.log("eso baba kobul");
}
else {
    console.log("bhag toi mokbul");
}

// ---------------------COMPLEX CONDITION--------------------
if((salary > 25000 || hasCar == true) && isBCS == true) {
    console.log("tomar 14 gosti raji");
}