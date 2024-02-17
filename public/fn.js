'use strict';
console.log('fn.js file was loaded');
// function
function greet(name, weekDay) {
    console.log(' hello', name, weekDay);
}
greet('James', 2);
// greet('James')
function sum(sk1, sk2) {
    return sk1 + sk2;
}
// const sk1 = Number(prompt('ivesk sk 1'))
// const sk2 = Number(prompt('ivesk sk 2'))
// const sept = sum(sk1, sk2)
// console.log('sept ===', sept);
// const sk3 = Number(prompt('ivesk sk 1'))
// const sk4 = Number(prompt('ivesk sk 2'))
// function flow(): void {
//   if (sk1 === null || sk2 === null) {
//   return
// }
// sum(+sk1, +sk2)
// }
// flow()
// const aha = sum(sk3, sk4)
// console.log('sept ===', aha)
// function makePrice(value: number): string  {
//   const rez: string = `$ ${value.toFixed(2)} `
//   console.log('rez ===', rez);
//   return rez  
// }
const makePrice = (value, currency = '$') => {
    const rez = `${currency} ${value.toFixed(2)} `;
    console.log('rez ===', rez);
    return rez;
};
makePrice(100);
makePrice(100, '€');
