/**
 * ARRAY METHODS
 *      - push()
 *      - pop()
 *      - shift()
 *      - unshift()
 */

const numbers = [98, 7, 49, 65, 320, 13, 21, 9, 7, 84];

console.log(numbers);
numbers.push(45); // insert an element to an array in the last
console.log(numbers);
numbers.push(25, 4); // insert multiple element to an array in the last
console.log(numbers);
numbers.pop(); // remove last element from an array and return the removed element
console.log(numbers);
numbers.pop(); // remove last element from an array and return the removed element
console.log(numbers);
numbers.shift(); // remove first element from an array and return the removed element
console.log(numbers);
numbers.unshift(2); // insert an element to an array in the beginning
console.log(numbers);
numbers.unshift(2, 52, 43, 50); // insert multiple elements to an array in te beginning
console.log(numbers);