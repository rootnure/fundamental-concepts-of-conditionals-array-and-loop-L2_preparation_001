/**
 * MULTI_LEVEL CONDITION
 */

// ---------------SHOPPING DISCOUNT EXAMPLE----------------
const price = 2000;
if(price >= 5000) {
    // 10% discount
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    // console.log(payAmount);
}
else if(price >= 2500) {
    // 5% discount
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    // console.log(payAmount);
}
else {
    // console.log(price);
}

// -----------------RESTAURANT BILL PAY EXAMPLE------------------
const age = 61;
const foodPrice = 1250;
if(age <= 12) {
    // console.log("You get 50% discount");
    const discount = foodPrice * 50 / 100;
    const payAmount = foodPrice - discount;
    // console.log(payAmount);
}
else if(age > 60) {
    // console.log("You get 25% discount");
    const discount = foodPrice * 25 / 100;
    const payAmount = foodPrice - discount;
    // console.log(payAmount);
}
else if(age > 50) {
    // console.log("You get 10% discount");
    const discount = foodPrice * 10 / 100;
    const payAmount = foodPrice - discount;
    // console.log(payAmount);
}
else {
    // console.log("Sorry! No discount for you.");
    // console.log(foodPrice);
}

// --------------GRADING EXAMPLE---------------
const marks = 24;
if(marks >= 80) {
    // console.log("Outstanding! You got A+.");
}
else if(marks >= 70) {
    // console.log("Excellent. You got A.");
}
else if(marks >= 60) {
    // console.log("Very Good. You got A-.");
}
else if(marks >= 50) {
    // console.log("Satisfactory. You got B.");
}
else if(marks >= 40) {
    // console.log("Average. You got C.");
}
else if(marks >= 33) {
    // console.log("Bellow Average. You got D.");
}
else {
    // console.log("You have failed in the exam. You got F.");
}

//----------------BMI EXAMPLE-----------------
const heightInCM = 170;
// const weightInKG = 117;
const weightInKG = 72.22;
const bmi = weightInKG / (heightInCM / 100 * heightInCM / 100);
if(bmi >= 30) {
    console.log("You weight is obese.");
}
else if(bmi >= 25) {
    console.log("You are overweight.");
}
else if(bmi >= 18.5) {
    console.log("Congratulation! You are in healthy weight.");
}
else {
    console.log("You are underweight.");
}