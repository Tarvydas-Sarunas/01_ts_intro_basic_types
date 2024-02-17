"use strict";
// arrays
let colors = ['red', 'green', 'blue'];
colors.push('5');
let mixed = [1, 'blue', 'green'];
mixed.push('5');
console.log('mixed ===', mixed);
const upperColors = colors.map((color) => color.toUpperCase());
console.log('upperColors ===', upperColors);
const numsArr = [1, 5, -10, -5, 50, 10];
const largerThan3 = numsArr
    .sort((a, b) => a - b)
    .filter((num) => num > 3);
console.log('largerThan3 ===', largerThan3);
const largerThan = numsArr
    .sort((a, b) => a - b)
    .filter((num) => num > 3)
    .map((sk) => sk.toString());
console.log('largerThan ===', largerThan);
