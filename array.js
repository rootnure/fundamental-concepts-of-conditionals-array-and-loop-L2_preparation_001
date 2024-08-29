/**
 * ARRAY
 *      - Length
 *      - Index
 *      - get value by index
 *      - get index by value
 */

const numbers = [63, 25, 16, 8, 49, 16, 19, 68];
console.log(numbers.length); // get length of array
console.log(numbers.indexOf(19)); // get index by value 19
console.log(numbers[4]); // get value by index 4
numbers[5] = 11; // set value by index
console.log(numbers);