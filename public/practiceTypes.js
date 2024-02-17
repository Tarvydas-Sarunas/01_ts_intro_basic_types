"use strict";
// sukurti custumer tipa
const custumersArr = [
    {
        name: 'Petras',
        age: 33,
        buySum: 120,
        isDriver: true,
    },
    {
        name: 'Jonas',
        age: 20,
        buySum: 114,
        isDriver: false,
    },
    {
        name: 'Algis',
        age: 40,
        buySum: 15,
        isDriver: true,
    },
    {
        name: 'Ausra',
        age: 18,
        buySum: 80,
        isDriver: false,
    },
    {
        name: 'Jurgis',
        age: 67,
        buySum: 54,
        isDriver: true,
    },
];
function totalSum(masyvas) {
    const sum = masyvas.reduce((add, cObj) => add + cObj.buySum, 0);
    return sum;
}
const totalBuySum = totalSum(custumersArr);
console.log('totalBuySum ===', totalBuySum);
// 2. parasyti funkcija, kuri ima masyva kai argumenta
// grazina visu kiek yra vairuotoju
function driverSum(masyvas) {
    const drivers = masyvas.filter((cObj) => cObj.isDriver === true);
    return drivers.length;
}
const totalDrivers = driverSum(custumersArr);
console.log('totalDrivers ===', totalDrivers);
// 3. parasyti funkcija, kuri ima masyva kai argumenta
// grazina visu customers vardus kaip masyvo elementus
const varduArr = (masyvas) => {
    const vardai = masyvas.map((cObj) => cObj.name);
    return vardai;
};
const vardai = varduArr(custumersArr);
console.log('vardai ===', vardai);
// 4. parasyti funkcija, kuri ima masyva kai argumenta
// grazina visu customers vardus kaip kableliais atskirta stringa
const varduString = (masyvas) => {
    const varduStr = masyvas.map((cObj) => cObj.name).join(', ');
    return varduStr;
};
const vardStringas = varduString(custumersArr);
console.log('vardStringas ===', vardStringas);
// 5. parasyti funkcija, kuri ima masyva kai argumenta
// grazina visu customers amziu vidurki
const metuAvg = (masyvas) => {
    const varduStr = masyvas.reduce((add, cObj) => add + cObj.age, 0) / masyvas.length;
    return varduStr;
};
const metuVidurkis = metuAvg(custumersArr);
console.log('metuVidurkis ===', metuVidurkis);
// 6. parasyti funkcija, kuri ima masyva kai argumenta
// grazina masyva su objektais kuriuose yra vardas ir amzius
const naujas = (masyvas) => {
    const vardaiMetai = masyvas.map((cObj) => ({ name: cObj.name, age: cObj.age }));
    return vardaiMetai;
};
const naujasArr = naujas(custumersArr);
console.log('naujasArr ===', naujasArr);
