"use strict";

console.clear();

//Задание 1
console.log("Задание 1");

const weapons = [new Knife(), new Staff(), new Axe(), new StormStaff(), new LongBow(), new Bow()];
console.log(weapons);

function getNames() {
    return weapons.map(weapon => weapon.name);
}

function getCountReliableWeapons(reliable) {
    return weapons.filter(weapon => weapon.durability > reliable).length;
}

function hasReliableWeapons(reliable) {
    return weapons.some(weapon => weapon.durability > reliable);
}

function getReliableWeaponsNames(reliable) {
    const getedWeapons = weapons.filter(weapon => weapon.durability > reliable);
    return getedWeapons.map(weapon => weapon.name);
}

function getTotalDamage() {
    let damage = 0;
    weapons.forEach(weapon => damage += weapon.attack);
    return damage;
}

function getValuestCountToSumValues(arr, sum) {
    let arrIndex = 0;
    arr.reduce(function (acc, value, index) {
        if (acc >= sum && arrIndex === 0) {
            arrIndex = index;
        }
        return acc + value;
    });
    if (arrIndex === 0) {
        return arr.length;
    } else {
        return arrIndex;
    }
}

console.log(getNames());
console.log(getCountReliableWeapons(299));
console.log(hasReliableWeapons(900));
console.log(getReliableWeaponsNames(300));
console.log(getTotalDamage());
console.log(getValuestCountToSumValues([1, 2, 3, 5, 2, 7, 3, 5, 2], 10));
console.log(getValuestCountToSumValues([1, 2, 3, 5, 2, 7, 3, 5, 2], 20));
console.log(getValuestCountToSumValues([1, 2, 3, 5, 2, 7, 3, 5, 2], 200));

//Задание 2
console.log("Задание 2");

function sleep(milliseconds) {
    let e = new Date().getTime() + milliseconds;
    while (new Date().getTime() <= e) { }
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(100); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
        return sum += +arg;
    }, 0);
}

function compareArrays(arr1, arr2) {
    return arr1.every(function (element, index) {
        return element === arr2[index] && arr1.length === arr2.length;
    });

}

console.log(compareArrays([8, 9], [6])); // false, разные значения
console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5])); // false, разные значения
console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4])); // false, разные значения
console.log(compareArrays([2, 2, 3], [2, 3, 1])); // false, разные индексы, хотя и одинаковые значения
console.log(compareArrays([8, 1, 2], [8, 1, 2])); // true


function memorize(fn, limit) {
    let memory = [];
    console.log(memory);
    return function (...args) {
        const memoryFind = memory.find(element => compareArrays(args, element.args));
        if (memoryFind !== undefined) {
            return memoryFind.result;
        } else {
            const memoryAdd = fn(sum(...args));
            memory.push({ "args": args, "result": memoryAdd });
            if (memory.length > limit) {
                memory.shift();
            };
            return memoryAdd;
        };
    };
}

const mSum = memorize(sum, 6);

console.log(mSum(1, 3));
console.log(sum(3, 4));
console.log(mSum(3, 4));
console.log(mSum(1, 3));
console.log(mSum(3, 4, 5));
console.log(mSum(3, 4, 6));
console.log(mSum(3, 4, 7));
console.log(mSum(3, 4, 8));
console.log(mSum(3, 4, 5));
// const resultFunction = memorize();
// resultFunction(1, 2, 3, 4);
