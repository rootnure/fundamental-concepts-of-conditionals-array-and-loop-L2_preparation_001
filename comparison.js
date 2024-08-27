/**
 * COMPARISON
 * 1. greater: >
 * 2. less: <
 * 3. equal: ==
 * 4. greater than or equal: >=
 * 5. less than or equal: <=
 * 6. not equal: !=
 * 
 * ----------------------------
 * 7. AND: &&
 * 8. OR: ||
 */

console.log(5 > 10); // false
console.log(5 < 10); // true
console.log(5 == 10); // false
console.log(10 == 10); // true
console.log(5 >= 10); // false
console.log(10 >= 10); // true
console.log(5 <= 10); // true
console.log(10 <= 10); // true

/**
 * COMPARISON USING VARIABLE
 */
var level1Fee = 5500;
var level2Fee = 5500;

console.log(level1Fee > level2Fee);
console.log(level1Fee < level2Fee);
console.log(level1Fee == level2Fee);
console.log(level1Fee != level2Fee);
console.log(level1Fee >= level2Fee);
console.log(level1Fee <= level2Fee);

/**
 * SPECIAL COMPARISON
 * == vs ===
 * != vs !==
 */

console.log(10 == '10'); // true
console.log(10 === '10'); // false

console.log(5 == 10); // false
console.log(5 === 10); // false

console.log(10 != '10'); // false
console.log(10 !== '10'); // true

console.log(5 != '10'); // true
console.log(5 !== '10'); // true