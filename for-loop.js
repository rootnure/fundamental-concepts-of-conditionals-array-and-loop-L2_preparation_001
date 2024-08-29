/**
 * for(loopVariable; loopCondition; loopVariableChange) {
 *      // loop statement
 * }
 */

// incremental for loop
for(let num = 0; num <= 5; num++) {
    // console.log(num);
}

// decremental for loop
for(let num = 5; num >= 0; num--) {
    // console.log(num);
}


// --------PROBLEM SOLVING----------

/* 1. Find all even number from 0 to 10 using for loop without using if---else. */

for(let number = 0; number <= 10; number+=2) {
    // console.log(number);
}


/* 2. Find all odd number from 0 to 10 using for loop without using if-else. */

for(let number = 1; number < 10; number+=2) {
    // console.log(number);
}

/* 3. Get the sum of numbers from 11 to 20 using for loop */

let sum = 0;
for(let num = 11; num <= 20; num++) {
    sum = sum + num;
}
// console.log(sum);


/* 4. Get the sum of even numbers from 11 to 20 using for loop */

let evenSum = 0;
for(let num = 11; num <= 20; num+=2) {
    // console.log(num); // checking what we are getting
    evenSum = evenSum + (num + 1);
}
// console.log(evenSum);


/* 5. Get the sum of odd numbers from 11 to 20 using for loop in decremental way */

let evenSum2 = 0;
for(let num = 20; num >= 11; num-=2) {
    // console.log(num); // checking what we are getting
    evenSum2 = evenSum2 + (num - 1);
}
// console.log(evenSum2);

/* 6. Get all the values from 1 to 30 which are devisable by 5 */

for(let i = 1; i <= 30; i++){
    if(i % 5 === 0){
        // console.log(i);
    }
}

/* 7. Get all the values from 1 to 30 which are devisable by 3 or 5 */

for(let number = 1; number <= 30; number++) {
    if(number % 3 === 0 || number % 5 === 0) {
        // console.log(number);
    }
}

/* 8. Get all the values from 1 to 30 which are devisable by 3 and 5 */

for(let number = 1; number <= 30; number++) {
    if(number % 3 === 0 && number % 5 === 0) {
        console.log(number);
    }
}